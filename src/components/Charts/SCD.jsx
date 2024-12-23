import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';

// Sample data for the stacked bar chart
const data = [
  {
    ageGroup: '40-49',
    stressAnxiety: 25,
    sleepIssues: 15,
    medicationSideEffects: 10,
    perceivedNormalAging: 50
  },
  {
    ageGroup: '50-59',
    stressAnxiety: 30,
    sleepIssues: 20,
    medicationSideEffects: 15,
    perceivedNormalAging: 35
  },
  {
    ageGroup: '60-69',
    stressAnxiety: 35,
    sleepIssues: 25,
    medicationSideEffects: 20,
    perceivedNormalAging: 20
  },
  {
    ageGroup: '70+',
    stressAnxiety: 40,
    sleepIssues: 30,
    medicationSideEffects: 25,
    perceivedNormalAging: 5
  }
];

const ReasonsForSCDChart = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold' }}>Reasons for Reporting Subjective Cognitive Decline (SCD) by Age Group</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ageGroup" label={{ value: 'Age Group', position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: 'Percentage of Individuals Reporting SCD', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="stressAnxiety" stackId="a" fill="#8884d8">
            <Cell key="stressAnxiety" fill="#1f77b4" />
          </Bar>
          <Bar dataKey="sleepIssues" stackId="a" fill="#82ca9d">
            <Cell key="sleepIssues" fill="#28a745" />
          </Bar>
          <Bar dataKey="medicationSideEffects" stackId="a" fill="#9e63b4">
            <Cell key="medicationSideEffects" fill="#6f42c1" />
          </Bar>
          <Bar dataKey="perceivedNormalAging" stackId="a" fill="#aec6cf">
            <Cell key="perceivedNormalAging" fill="#add8e6" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReasonsForSCDChart;
