import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the bar chart
const data = [
  { name: 'Condition A', frequency: 45 },
  { name: 'Condition B', frequency: 30 },
  { name: 'Condition C', frequency: 20 },
  { name: 'Condition D', frequency: 15 },
  { name: 'Condition E', frequency: 10 },
];

const IncorrectDiagnosesChart = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold' }}>Most Common Initial Incorrect Diagnoses</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: 'Initial Incorrect Diagnosis', position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: 'Number of Patients', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="frequency" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncorrectDiagnosesChart;
