import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Donepezil', rate: 96.8 },
  { name: 'Memantine', rate: 50.8 },
  { name: 'Rivastigmine', rate: 60.5 },
  { name: 'Galantamine', rate: 32.0 }
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const ComplianceChart = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-4">Compliance Rates</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} label={{ value: 'Compliance Rate (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar dataKey="rate">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComplianceChart;