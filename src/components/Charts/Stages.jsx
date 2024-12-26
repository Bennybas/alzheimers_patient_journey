import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'MCI/Mild', value: 17.5 },
  { name: 'Moderate', value: 40 },
  { name: 'Severe', value: 42.5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

const AlzheimerStagesPieChart = () => {
  return (
    <div style={{ width: '100%', height: 400, marginTop:'8px' }}>
      <h2 style={{ textAlign: 'center', fontWeight:'bold', fontSize:'18px'}}>Prevalence of Alzheimer's Patients by Stage</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AlzheimerStagesPieChart;
