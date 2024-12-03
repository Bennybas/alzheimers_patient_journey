import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';

const SankeyDiagram = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 1100;
    const height = 400;
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };

    svg.attr("width", width)
       .attr("height", height);

    // Medium-intensity color palette for Alzheimer's diagnosis
    const colorScale = d3.scaleOrdinal()
      .domain([
        "Patients", "PCP", "Specialized Providers", "Psychiatrist", 
        "Neurologist", "Geriatrician"
      ])
      .range([
        "#90CAF9", "#64B5F6", "#F48FB1", "#A5D6A7", "#81D4FA", "#F8BBD0"
      ]);

    // Define the data for the Sankey diagram
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
      .nodePadding(30)
      .extent([ 
        [margin.left, margin.top], 
        [width - margin.right, height - margin.bottom] 
      ]);

    const { nodes, links } = sankeyGenerator(data);

    const chart = svg.append("g");

    // Enhanced links with gradient and hover effect
    const link = chart.append("g")
      .selectAll(".link")
      .data(links)
      .enter().append("g")
      .attr("class", "link-group");

    const linkPaths = link.append("path")
      .attr("class", "link")
      .attr("d", sankeyLinkHorizontal())
      .attr("fill", "none")
      .attr("stroke", d => {
        const gradient = svg.append("linearGradient")
          .attr("id", `link-gradient-${d.source.index}-${d.target.index}`)
          .attr("gradientUnits", "userSpaceOnUse")
          .attr("x1", d.source.x1)
          .attr("y1", (d.source.y0 + d.source.y1) / 2)
          .attr("x2", d.target.x0)
          .attr("y2", (d.target.y0 + d.target.y1) / 2);

        gradient.append("stop").attr("offset", "0%").attr("stop-color", colorScale(d.source.name));
        gradient.append("stop").attr("offset", "100%").attr("stop-color", colorScale(d.target.name));

        return `url(#link-gradient-${d.source.index}-${d.target.index})`;
      })
      .attr("stroke-opacity", 0.5)
      .attr("stroke-width", d => Math.max(1, d.width))
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-opacity", 0.8)
          .attr("stroke-width", d.width * 1.5);

        const tooltip = chart.append("g")
          .attr("class", "link-tooltip");

        tooltip.append("rect")
          .attr("x", (d.source.x1 + d.target.x0) / 2 - 100)
          .attr("y", (d.source.y0 + d.target.y0) / 2 - 30)
          .attr("width", 200)
          .attr("height", 30)
          .attr("fill", "rgba(255,255,255,0.9)")
          .attr("stroke", "#bbb")
          .attr("rx", 6)
          .attr("filter", "url(#drop-shadow)");

        tooltip.append("text")
          .attr("x", (d.source.x1 + d.target.x0) / 2)
          .attr("y", (d.source.y0 + d.target.y0) / 2 - 10)
          .attr("text-anchor", "middle")
          .attr("fill", "#333")
          .text(`${d.source.name} → ${d.target.name}: ${d.value} (${Math.round((d.value / 100) * 100)}%)`)
          .style("font-size", "13px")
          .style("color", "#00000")
          .style("font-weight", "500");
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-opacity", 0.5)
          .attr("stroke-width", Math.max(1, d.width));
        chart.selectAll(".link-tooltip").remove();
      });

    // Add percentage labels to links
    link.append("text")
      .attr("x", d => (d.source.x1 + d.target.x0) / 2)
      .attr("y", d => (d.source.y0 + d.target.y0) / 2)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", "#333")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .text(d => `${Math.round((d.value / 100) * 100)}%`)
      .attr("pointer-events", "none");

    // Add drop shadow filter
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "drop-shadow")
      .attr("height", "130%");

    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 3)
      .attr("result", "shadow");

    filter.append("feOffset")
      .attr("dx", 2)
      .attr("dy", 2);

    filter.append("feComponentTransfer")
      .append("feFuncA")
      .attr("type", "linear")
      .attr("slope", 0.3);

    filter.append("feMerge")
      .html(`
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      `);

    const node = chart.append("g")
      .selectAll(".node")
      .data(nodes)
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

    node.append("rect")
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", d => colorScale(d.name))
      .attr("rx", 6)
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .attr("opacity", 0.9)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("opacity", 1)
          .attr("stroke-width", 3);

        const tooltip = chart.append("g")
          .attr("class", "node-tooltip");

        tooltip.append("rect")
          .attr("x", d.x0 + (d.x1 - d.x0) / 2 - 80)
          .attr("y", d.y0 - 35)
          .attr("width", 160)
          .attr("height", 30)
          .attr("fill", "rgba(255,255,255,0.9)")
          .attr("stroke", "#bbb")
          .attr("rx", 6)
          .attr("filter", "url(#drop-shadow)");

        tooltip.append("text")
          .attr("x", d.x0 + (d.x1 - d.x0) / 2)
          .attr("y", d.y0 - 20)
          .attr("text-anchor", "middle")
          .attr("fill", "#333")
          .text(`${d.name}: ${d.value} (${Math.round((d.value / 100) * 100)}%)`)
          .style("font-size", "13px")
          .style("color", "#00000")
          .style("font-weight", "500");
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("opacity", 0.9)
          .attr("stroke-width", 2);
        chart.selectAll(".node-tooltip").remove();
      });

    node.append("text")
      .attr("x", d => (d.x0 + d.x1) / 2)
      .attr("y", d => (d.y0 + d.y1) / 2)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("fill", "#fff")
      .style("font-size", "12px")
      .text(d => d.name);
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default SankeyDiagram;
