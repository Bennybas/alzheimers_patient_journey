import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'MMSE', value: 79 },
  { name: 'Standard Psychiatric Evaluations', value: 68.9 },
  { name: 'Mini-Cog', value: 39.1 },
  { name: 'ADAS-Cog', value: 23.8 },
  { name: 'GPCOG', value: 18.2 },
];

const AssessmentBarChart = () => {
  return (
    <div className="w-full mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Assessments for Investigating Cognitive Impairment</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 100, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <YAxis type="category" dataKey="name" />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar dataKey="value" fill="#8884d8" radius={[5, 5, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#82ca9d' : '#8884d8'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssessmentBarChart;
