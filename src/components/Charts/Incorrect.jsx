import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data updated for Alzheimer's misdiagnoses
const data = [
  { name: 'Normal Aging', frequency: 35 }, // Often misdiagnosed as Alzheimer's due to similar symptoms in older adults
  { name: 'Depression', frequency: 25 }, // Symptoms of depression can mimic cognitive decline
  { name: 'Anxiety Disorders', frequency: 20 }, // Anxiety and stress-related disorders can be mistaken for cognitive impairment
  { name: 'Thyroid Disorders', frequency: 15 }, // Hypothyroidism can present symptoms resembling Alzheimer's
  { name: 'Vitamin Deficiencies', frequency: 10 }, // Deficiencies like B12 can lead to cognitive symptoms similar to Alzheimer's
];

const IncorrectDiagnosesChart = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold' }}>Most Common Initial Incorrect Diagnoses in Alzheimer's Disease</h2>
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
