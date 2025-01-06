import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

// Sort data in descending order
const medicationData = [
  { name: 'Rivastigmine', value: 19, color: '#0088FE' },
  { name: 'Donepezil', value: 17, color: '#00C49F' },
  { name: 'Galantamine', value: 14.51, color: '#FF8042' },
  { name: 'Memantine', value: 13.23, color: '#FFBB28' }
].sort((a, b) => b.value - a.value);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded p-2 shadow-lg">
        <p className="m-0 font-bold">{label}</p>
        <p className="m-0">{`${payload[0].value.toFixed(2)}%`}</p>
      </div>
    );
  }
  return null;
};

const NonAdherence = () => {
  return (
    <div className="p-6 shadow rounded-lg">
      <h4 className="text-lg font-bold mb-4 text-center text-gray-700">
        Medication Non-Adherence Rates
      </h4>
      <div className="h-80 w-full">
        <ResponsiveContainer>
          <BarChart
            data={medicationData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, Math.ceil(Math.max(...medicationData.map(d => d.value)))]}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fill: '#666' }}
              width={90}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="value"
              barSize={40}
              radius={[0, 4, 4, 0]}
            >
              {medicationData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NonAdherence;