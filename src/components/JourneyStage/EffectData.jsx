import React from'react';
import {
  ScatterChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ReferenceLine,
} from'recharts';

const EffectDataPlot = () => {
  const data = [
    {
      name: 'Donepezil',
      lowerWhisker: 50,
      lowerBox: 60,
      upperBox: 80,
      upperWhisker: 90,
      mean: 70,
      median: 75,
    },
    {
      name: 'Rivastigmine',
      lowerWhisker: 45,
      lowerBox: 55,
      upperBox: 75,
      upperWhisker: 85,
      mean: 65,
      median: 70,
    },
    {
      name: 'Galantamine',
      lowerWhisker: 40,
      lowerBox: 50,
      upperBox: 70,
      upperWhisker: 80,
      mean: 60,
      median: 65,
    },
    {
      name: 'Memantine',
      lowerWhisker: 35,
      lowerBox: 45,
      upperBox: 65,
      upperWhisker: 75,
      mean: 55,
      median: 60,
    },
    {
      name: 'Leqembi',
      lowerWhisker: 30,
      lowerBox: 40,
      upperBox: 60,
      upperWhisker: 70,
      mean: 50,
      median: 55,
    },
  ];

  const transformData = (type) => {
    return data.map((item, index) => ({
      x: index,
      y: type ==='mean'? item.mean : type ==='median'? item.median : null,
      type,
      name: item.name,
    })).filter(Boolean);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow">
          <p className="font-bold">{data.name}</p>
          <p>Value: {data.y}</p>
          <p>Type: {data.type}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-4xl p-4">
      <h3 className="text-lg font-bold mb-4">Medication Effectiveness</h3>
      <ScatterChart
        width={400}
        height={300}
        margin={{ top: 10,  left: -5, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          domain={[-0.5, 4.5]}
          tickFormatter={(value) => data[value]?.name || ''}
          ticks={[0, 1, 2, 3, 4]}
        />
        <YAxis
          type="number"
          domain={[20, 100]}
          label={{ value: 'Effectiveness Score', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {/* Box plot */}
            <ReferenceLine
              segment={[
                { x: index, y: item.lowerWhisker },
                { x: index, y: item.upperWhisker },
              ]}
              stroke="#8884d8"
              strokeWidth={2}
            />
            <ReferenceLine
              segment={[
                { x: index - 0.2, y: item.lowerWhisker },
                { x: index + 0.2, y: item.lowerWhisker },
              ]}
              stroke="#8884d8"
              strokeWidth={2}
            />
            <ReferenceLine
              segment={[
                { x: index - 0.2, y: item.upperWhisker },
                { x: index + 0.2, y: item.upperWhisker },
              ]}
              stroke="#8884d8"
              strokeWidth={2}
            />
            <ReferenceLine
              segment={[
                { x: index - 0.2, y: item.lowerBox },
                { x: index + 0.2, y: item.lowerBox },
              ]}
              stroke="#8884d8"
              strokeWidth={2}
            />
            <ReferenceLine
              segment={[
                { x: index - 0.2, y: item.upperBox },
                { x: index + 0.2, y: item.upperBox },
              ]}
              stroke="#8884d8"
              strokeWidth={2}
            />
            <ReferenceLine
              segment={[
                { x: index - 0.2, y: item.lowerBox },
                { x: index - 0.2, y: item.upperBox },
              ]}
              stroke="#8884d8"
              strokeWidth={2}
            />
            <ReferenceLine
              segment={[
                { x: index + 0.2, y: item.lowerBox },
                { x: index + 0.2, y: item.upperBox },
              ]}
              stroke="#8884d8"
              strokeWidth={2}
            />
            {/* Median line */}
            <ReferenceLine
              segment={[
                { x: index - 0.2, y: item.median },
                { x: index + 0.2, y: item.median },
              ]}
              stroke="#413ea0"
              strokeWidth={2}
            />
          </React.Fragment>
        ))}
        {/* Mean points */}
        <Scatter
          data={transformData('mean')}
          fill="#ff7300"
          shape="circle"
        />
      </ScatterChart>
    </div>
  );
};

export default EffectDataPlot;