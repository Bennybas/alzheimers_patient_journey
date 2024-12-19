import React from'react';

const data = [
  {
    treatment: 'Combination Therapy',
    mean: 25,
    median: 26,
    min: 15,
    max: 30,
    lowerQuartile: 22,
    upperQuartile: 28,
  },
  {
    treatment: 'Single-Drug Treatment',
    mean: 23,
    median: 24,
    min: 14,
    max: 29,
    lowerQuartile: 20,
    upperQuartile: 26,
  },
];

const BoxPlot = ({ width, height }) => {
  const xScale = (index) => (index + 1) * (width / (data.length + 1));
  const yScale = (value) => height - (value / 30) * height;

  return (
    <svg width={width} height={height}>
      {/* Y-Axis */}
      <line x1={0} y1={0} x2={0} y2={height} stroke="black" />
      {/* Y-Axis Labels */}
      {[0, 5, 10, 15, 20, 25, 30].map((val) => (
        <text
          key={val}
          x={-30}
          y={yScale(val)}
          dy={5}
          textAnchor="end"
          fontSize="10"
        >
          {val}
        </text>
      ))}
      {data.map((d, index) => (
        <g key={d.treatment} transform={`translate(${xScale(index)}, 0)`}>
          {/* Whiskers */}
          <line
            x1={0}
            y1={yScale(d.min)}
            x2={0}
            y2={yScale(d.lowerQuartile)}
            stroke="black"
          />
          <line
            x1={0}
            y1={yScale(d.upperQuartile)}
            x2={0}
            y2={yScale(d.max)}
            stroke="black"
          />
          {/* Boxes */}
          <rect
            x={-10}
            y={yScale(d.upperQuartile)}
            width={20}
            height={yScale(d.lowerQuartile) - yScale(d.upperQuartile)}
            fill="lightblue"
            stroke="black"
          />
          {/* Median */}
          <line
            x1={-10}
            y1={yScale(d.median)}
            x2={10}
            y2={yScale(d.median)}
            stroke="red"
          />
          {/* Mean */}
          <circle cx={0} cy={yScale(d.mean)} r={3} fill="green" />
          {/* Treatment Label */}
          <text
            x={0}
            y={height}
            dy={15}
            textAnchor="middle"
            fontSize="12"
          >
            {d.treatment}
          </text>
        </g>
      ))}
    </svg>
  );
};

const Therapies = () => (
  <div>
    <h2>Combination Therapies vs. Single-Drug Treatments</h2>
    <BoxPlot width={300} height={300} />
  </div>
);

export default Therapies;