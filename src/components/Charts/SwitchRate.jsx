import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";

const DrugSwitch = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 1100;
    const height = 550;
    const margin = { top: 60, right: 80, bottom: 60, left: 60 };

    svg.attr("width", width).attr("height", height);

    const colorScale = d3
      .scaleOrdinal()
      .domain(["Donepezil", "Rivastigmine", "Galantamine", "Memantine", "Combination"])
      .range(["#4ECDC4", "#FF6B6B", "#45B7D1", "#96CEB4", "#FFEEAD"]);

    const data = {
      nodes: [
        // L1 nodes
        { id: "Donepezil_1", name: "Donepezil", x: 0 },
        { id: "Rivastigmine_1", name: "Rivastigmine", x: 0 },
        { id: "Galantamine_1", name: "Galantamine", x: 0 },
        // L2 nodes
        { id: "Memantine_1", name: "Memantine", x: 1 },
        { id: "DonepezilMem", name: "Donepezil + Memantine", x: 1 },
        { id: "RivastigmineMem", name: "Rivastigmine + Memantine", x: 1 },
        { id: "GalantamineMem", name: "Galantamine + Memantine", x: 1 }
      ],
      links: [
        // From Donepezil
        { source: "Donepezil_1", target: "Memantine_1", value: 13.7 },
        { source: "Donepezil_1", target: "DonepezilMem", value: 13.8 },
        // From Rivastigmine
        { source: "Rivastigmine_1", target: "Memantine_1", value: 23.7 },
        { source: "Rivastigmine_1", target: "RivastigmineMem", value: 6.8 },
        // From Galantamine
        { source: "Galantamine_1", target: "Memantine_1", value: 4.1 },
        { source: "Galantamine_1", target: "GalantamineMem", value: 1.4 }
      ]
    };

    const sankeyGenerator = sankey()
      .nodeId(d => d.id)
      .nodeWidth(40)
      .nodePadding(30)
      .iterations(32)
      .extent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]]);

    const { nodes, links } = sankeyGenerator(data);

    const filteredNodes = nodes.filter(node => node.value > 0);

    const chart = svg.append("g");

    const defs = svg.append("defs");
    const linkGradient = defs
      .selectAll("linearGradient")
      .data(links)
      .enter()
      .append("linearGradient")
      .attr("id", (d, i) => `linkGradient${i}`)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", (d) => d.source.x1)
      .attr("x2", (d) => d.target.x0);

    linkGradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", (d) => colorScale(d.source.name));

    linkGradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", (d) => colorScale(d.target.name));

    const linkEnter = chart
      .append("g")
      .selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", sankeyLinkHorizontal())
      .attr("fill", "none")
      .attr("stroke", (d, i) => `url(#linkGradient${i})`)
      .attr("stroke-opacity", 0.5)
      .attr("stroke-width", (d) => Math.max(1, d.width))
      .attr("title", (d) => `${d.source.name} -> ${d.target.name}: ${d.value}%`)
      .append("title")
      .text(d => `${d.source.name} -> ${d.target.name}: ${d.value}%`);

    const node = chart
      .append("g")
      .selectAll(".node")
      .data(filteredNodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

    node
      .append("rect")
      .attr("height", (d) => d.y1 - d.y0)
      .attr("width", (d) => d.x1 - d.x0)
      .attr("fill", (d) => colorScale(d.name))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("title", (d) => `${d.name}: ${d.value}%`)
      .on("mouseover", function () {
        d3.select(this)
          .attr("stroke", "#000")
          .attr("stroke-width", 3)
          .attr("opacity", 0.8);
      })
      .on("mouseout", function () {
        d3.select(this)
          .attr("stroke", "#fff")
          .attr("stroke-width", 2)
          .attr("opacity", 1);
      });

    node
      .append("text")
      .attr("x", (d) => (d.x1 - d.x0) / 2)
      .attr("y", (d) => (d.y1 - d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text((d) => `${d.name}: ${d.value}%`)
      .attr("fill", "#000")
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .style("pointer-events", "none");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Treatment Switch Pattern");
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default DrugSwitch;