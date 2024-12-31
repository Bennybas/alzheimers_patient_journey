import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import AlzheimersSankey from './SwitchRate';

const PieChartData = [
  { name: 'Rivastigmine', value: 19 },
  { name: 'Donepezil', value: 17 },
  { name: 'Memantine', value: 13.23 },
  { name: 'Galantamine', value: 14.51 },
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DrugPrescribingCharts = () => {
  const customLegendFormatter = (value) => {
    const item = PieChartData.find(item => item.name === value);
    return `${value} (${item.value}%)`;
  };

  return (
    <div className="p-6 shadow rounded-lg">
          <h4 className="text-lg font-bold mb-4 text-center text-gray-700">
            Medication Non-Adherence Rates
          </h4>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={PieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label={({ name, value }) => `${value}%`}
              >
                {PieChartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend formatter={customLegendFormatter} />
            </PieChart>
          </ResponsiveContainer>
    </div>
  );
};

export default DrugPrescribingCharts;