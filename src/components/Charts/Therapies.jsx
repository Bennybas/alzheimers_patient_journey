import React from 'react';
 
const data = [
  {
    treatment: 'Combination Therapy and Single-Drug Treatment',
    mean: 25,
    median: 26,
    min: 15,
    max: 30,
    lowerQuartile: 22,
    upperQuartile: 28,
  },
  {
    treatment: '',
    mean: 23,
    median: 24,
    min: 14,
    max: 29,
    lowerQuartile: 20,
    upperQuartile: 26,
  },
];
 
const BoxPlot = ({ width, height }) => {
  // Define margins for the plot
  const margin = { top: 20, right: 30, bottom: 60, left: 60 };
  // Calculate actual plot dimensions
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  // Updated scaling functions to account for margins
  const xScale = (index) => margin.left + (index + 1) * (plotWidth / (data.length + 1));
  const yScale = (value) => margin.top + plotHeight - (value / 30) * plotHeight;
 
  return (
<svg width={width} height={height} className="bg-white">
      {/* Y-Axis */}
<line 
        x1={margin.left} 
        y1={margin.top} 
        x2={margin.left} 
        y2={height - margin.bottom} 
        stroke="black" 
        strokeWidth="1"
      />
      {/* X-Axis */}
<line 
        x1={margin.left} 
        y1={height - margin.bottom} 
        x2={width - margin.right} 
        y2={height - margin.bottom} 
        stroke="black" 
        strokeWidth="1"
      />
 
      {/* Y-Axis Labels */}
      {[0, 5, 10, 15, 20, 25, 30].map((val) => (
<g key={val}>
          {/* Tick marks */}
<line
            x1={margin.left - 5}
            x2={margin.left}
            y1={yScale(val)}
            y2={yScale(val)}
            stroke="black"
          />
          {/* Label text */}
<text
            x={margin.left - 10}
            y={yScale(val)}
            dy="0.32em"
            textAnchor="end"
            fontSize="12"
            fill="black"
>
            {val}
</text>
</g>
      ))}
 
      {/* Y-Axis Title */}
<text
        transform={`rotate(-90, ${margin.left/3}, ${height/2})`}
        x={margin.left/3}
        y={height/2}
        textAnchor="middle"
        fontSize="14"
        fill="black"
>
        MMSE score
</text>
 
      {data.map((d, index) => (
<g key={d.treatment} transform={`translate(${xScale(index)}, 0)`}>
          {/* Whiskers */}
<line
            x1={0}
            y1={yScale(d.min)}
            x2={0}
            y2={yScale(d.lowerQuartile)}
            stroke="black"
            strokeWidth="1"
          />
<line
            x1={0}
            y1={yScale(d.upperQuartile)}
            x2={0}
            y2={yScale(d.max)}
            stroke="black"
            strokeWidth="1"
          />
          {/* Horizontal whisker lines */}
<line
            x1={-10}
            y1={yScale(d.min)}
            x2={10}
            y2={yScale(d.min)}
            stroke="black"
            strokeWidth="1"
          />
<line
            x1={-10}
            y1={yScale(d.max)}
            x2={10}
            y2={yScale(d.max)}
            stroke="black"
            strokeWidth="1"
          />
 
          {/* Boxes */}
<rect
            x={-15}
            y={yScale(d.upperQuartile)}
            width={30}
            height={yScale(d.lowerQuartile) - yScale(d.upperQuartile)}
            fill="lightblue"
            stroke="black"
            strokeWidth="1"
          />
          {/* Median */}
<line
            x1={-15}
            y1={yScale(d.median)}
            x2={15}
            y2={yScale(d.median)}
            stroke="red"
            strokeWidth="2"
          />
          {/* Mean */}
<circle 
            cx={0} 
            cy={yScale(d.mean)} 
            r={4} 
            fill="green" 
          />
          {/* Treatment Label */}
<text
            x={0}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            fontSize="12"
            fill="black"
>
            {d.treatment}
</text>
</g>
      ))}
 
      {/* Legend */}
<g transform={`translate(${width - margin.right + 10}, ${margin.top})`}>
<circle cx={0} cy={0} r={4} fill="green" />
<text x={10} y={0} dy="0.32em" fontSize="12" fill="black"></text>
<line x1={-5} y1={20} x2={5} y2={20} stroke="red" strokeWidth="2" />
<text x={10} y={20} dy="0.32em" fontSize="12" fill="black"></text>
</g>
</svg>
  );
};
 
const Therapies = () => (
<div className="p-4">
<h2 className="text-xl font-bold mb-4">Combination Therapies vs. Single-Drug Treatments</h2>
<BoxPlot width={300} height={350} />
</div>
);
 
export default Therapies;