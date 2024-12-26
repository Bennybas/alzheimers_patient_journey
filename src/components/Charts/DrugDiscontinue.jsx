import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const DiscontinuationData = [
  { name: 'Donepezil', percentage: 21.94 },
  { name: 'Rivastigmine', percentage: 22.34 },
  { name: 'Galantamine', percentage: 27.55 },
  { name: 'Memantine', percentage: 19.04 },
];

const DrugDiscontinuationRates = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="text-lg font-bold mb-4 text-center">Drug Discontinuation Rates</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={DiscontinuationData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barCategoryGap="30%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 30]} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar dataKey="percentage" fill="#FF8042" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DrugDiscontinuationRates;
