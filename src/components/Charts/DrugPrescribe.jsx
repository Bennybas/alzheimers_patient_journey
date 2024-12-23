import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';

const BarChartData = [
  { name: 'Donepezil', percentage: 58.4 },
  { name: 'Rivastigmine', percentage: 13.63 },
  { name: 'Donepezil + Memantine', percentage: 6.43 },
  { name: 'Galantamine', percentage: 12.83 },
  { name: 'No antidementia drug', percentage: 8 },
];

const PieChartData = [
  { name: 'Rivastigmine', value: 19 },
  { name: 'Donepezil', value: 17 },
  { name: 'Memantine', value: 13.23 },
  { name: 'Galantamine', value: 14.51 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DrugPrescribingCharts = () => {
  return (
    <div className="flex items-center justify-center space-x-12">
      {/* Horizontal Bar Chart */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-center">Antidementia Drug Prescribing Pattern</h4>
        <BarChart
          width={600}
          height={300}
          data={BarChartData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 70]} />
          <YAxis type="category" dataKey="name" width={150} />
          <Tooltip />
          <Bar dataKey="percentage" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Pie Chart */}
      <div>
      <h4 className="text-lg font-bold -mb-20 text-center">Non-Adherence</h4>
        <PieChart width={500} height={500}>
        
          <Pie
            data={PieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {PieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default DrugPrescribingCharts;
