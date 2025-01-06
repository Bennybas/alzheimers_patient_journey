import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";

const DrugDiscontinuationRates = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 1050;
    const height = 450;
    const margin = { top: 60, right: 150, bottom: 60, left: 150 };

    svg.attr("width", width).attr("height", height);

    const colorScale = d3
      .scaleOrdinal()
      .domain(["Donepezil", "Memantine", "Rivastigmine", "Galantamine", "Discontinuation", "Continuation"])
      .range(["#7CB9E8", "#F4C430", "#FF69B4", "#90EE90", "#FF0000", "#FFD700"]);

    const data = {
      nodes: [
        { id: "Donepezil", name: "Donepezil", x: 0 },
        { id: "Memantine", name: "Memantine", x: 0 },
        { id: "Rivastigmine", name: "Rivastigmine", x: 0 },
        { id: "Galantamine", name: "Galantamine", x: 0 },
        { id: "Discontinuation", name: "Discontinuation", x: 1 },
        { id: "Continuation", name: "Continuation", x: 1 }
      ],
      links: [
        { source: "Donepezil", target: "Discontinuation", value: 51.8 },
        { source: "Donepezil", target: "Continuation", value: 48.2 },
        { source: "Memantine", target: "Discontinuation", value: 56.5 },
        { source: "Memantine", target: "Continuation", value: 43.5 },
        { source: "Rivastigmine", target: "Discontinuation", value: 60.5 },
        { source: "Rivastigmine", target: "Continuation", value: 39.5 },
        { source: "Galantamine", target: "Discontinuation", value: 60.7 },
        { source: "Galantamine", target: "Continuation", value: 39.3 }
      ]
    };

    const sankeyGenerator = sankey()
      .nodeId(d => d.id)
      .nodeWidth(30)
      .nodePadding(20)
      .extent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]]);

    const { nodes, links } = sankeyGenerator(data);

    // Links with hover effects and labels
    const linkGroup = svg.append("g");
    
    // Background for link labels
    linkGroup.selectAll("rect.link-label-bg")
      .data(links)
      .join("rect")
      .attr("class", "link-label-bg")
      .attr("x", d => (d.source.x1 + d.target.x0) / 2 - 20)
      .attr("y", d => (d.y1 + d.y0) / 2 - 10)
      .attr("width", 40)
      .attr("height", 20)
      .attr("fill", "white")
      .attr("opacity", 0.8);

    // Link paths
    linkGroup.selectAll("path")
      .data(links)
      .join("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("fill", "none")
      .attr("stroke-width", d => Math.max(1, d.width))
      .attr("stroke", d => d3.color(colorScale(d.source.name)).copy({opacity: 0.5}))
      .style("mix-blend-mode", "multiply")
      .append("title")
      .text(d => `${d.source.name} → ${d.target.name}: ${d.value.toFixed(1)}%`);

    // Link labels
    linkGroup.selectAll("text.link-label")
      .data(links)
      .join("text")
      .attr("class", "link-label")
      .attr("x", d => (d.source.x1 + d.target.x0) / 2)
      .attr("y", d => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(d => `${d.value.toFixed(1)}%`)
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .style("pointer-events", "none");

    // Nodes
    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

    // Rectangle for nodes with hover effects
    node.append("rect")
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", d => colorScale(d.name))
      .attr("opacity", 0.8)
      .on("mouseover", function() {
        d3.select(this)
          .attr("opacity", 1)
          .attr("stroke", "#000")
          .attr("stroke-width", 2);
      })
      .on("mouseout", function() {
        d3.select(this)
          .attr("opacity", 0.8)
          .attr("stroke", null);
      })
      .append("title")
      .text(d => `${d.name}: ${d.value.toFixed(1)}%`);

    // Label backgrounds
    node.append("rect")
      .attr("x", d => d.x0 < width / 2 ? -160 : d.x1 - d.x0 + 5)
      .attr("y", d => (d.y1 - d.y0) / 2 - 10)
      .attr("width", 150)
      .attr("height", 20)
      .attr("fill", "white")
      .attr("opacity", 0.7);

    // Node labels
    node.append("text")
      .attr("x", d => d.x0 < width / 2 ? -10 : d.x1 - d.x0 + 10)
      .attr("y", d => (d.y1 - d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", d => d.x0 < width / 2 ? "end" : "start")
      .text(d => `${d.name} (${d.value.toFixed(1)}%)`)
      .style("font-size", "12px")
      .style("font-weight", "bold");

    // Title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Drug Treatment Pattern");
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default DrugDiscontinuationRates;
