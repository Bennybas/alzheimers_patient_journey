import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";

const SankeyDiagram = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 1100; // Slightly increased width
    const height = 550; // Increased height for better spacing
    const margin = { top: 60, right: 60, bottom: 60, left: 60 }; // Increased margins

    svg.attr("width", width).attr("height", height);

    const colorScale = d3
      .scaleOrdinal()
      .domain([
        "Patients",
        "PCP",
        "Specialized Providers",
        "Psychiatrist",
        "Neurologist",
        "Geriatrician"
      ])
      .range([
        "#64B5F6",   // Lighter Blue for Patients
        "#90CAF9",   // Much Lighter Blue for PCP
        "#B39DDB",   // Lighter Purple for Specialized Providers
        "#F48FB1",   // Lighter Pink for Psychiatrist
        "#A1887F",   // Lighter Brown for Neurologist
        "#FFD54F"    // Lighter Amber for Geriatrician
      ]);

    const data = {
      nodes: [
        { name: "Patients", value: 100 },
        { name: "PCP", value: 85 },
        { name: "Specialized Providers", value: 15 },
        { name: "Psychiatrist", value: 7.05 },   // 47% of 15%
        { name: "Neurologist", value: 6.6 },     // 44% of 15%
        { name: "Geriatrician", value: 1.35 }    // 9% of 15%
      ],
      links: [
        { source: 0, target: 1, value: 85 },   // Patients -> PCP
        { source: 0, target: 2, value: 15 },   // Patients -> Specialized Providers (original 15%)
        { source: 1, target: 2, value: 42.5 }, // PCP -> Specialized Providers (50% of 85)
        { source: 2, target: 3, value: 7.05 }, // Specialized Providers -> Psychiatrist
        { source: 2, target: 4, value: 6.6 },  // Specialized Providers -> Neurologist
        { source: 2, target: 5, value: 1.35 }  // Specialized Providers -> Geriatrician
      ]
    };

    const sankeyGenerator = sankey()
      .nodeWidth(40)
      .nodePadding(30) // Increased padding for better separation
      .extent([
        [margin.left, margin.top],
        [width - margin.right, height - margin.bottom],
      ]);

    const { nodes, links } = sankeyGenerator(data);

    const chart = svg.append("g");

    // Gradient for links to add depth
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

    // Links with improved hover effect
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
      .on("mouseover", function () {
        d3.select(this)
          .attr("stroke-opacity", 0.9)
          .attr("stroke-width", (d) => Math.max(2, d.width * 1.5));
      })
      .on("mouseout", function () {
        d3.select(this)
          .attr("stroke-opacity", 0.5)
          .attr("stroke-width", (d) => Math.max(1, d.width));
      });

    // Nodes with enhanced hover effect
    const node = chart
      .append("g")
      .selectAll(".node")
      .data(nodes)
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
      .attr("rx", 5) // Added rounded corners
      .attr("ry", 5)
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
      .style("pointer-events", "none"); // Prevents text from interfering with hover

    // Add title to the chart
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Patient Flow");

    // Add annotation about 15% to specialized providers
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("font-style", "italic")
      
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default SankeyDiagram;