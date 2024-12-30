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
import MedicationSankey from './SwitchRate';

const PieChartData = [
  { name: 'Rivastigmine', value: 19 },
  { name: 'Donepezil', value: 17 },
  { name: 'Memantine', value: 13.23 },
  { name: 'Galantamine', value: 14.51 },
];

const SwitchRateData = [
  { name: 'Donepezil', percentage: 3.03 },
  { name: 'Rivastigmine', percentage: 6.57 },
  { name: 'Galantamine', percentage: 8.16 },
  { name: 'Memantine', percentage: 5.41 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DrugPrescribingCharts = () => {
  const customLegendFormatter = (value) => {
    const item = PieChartData.find(item => item.name === value);
    return `${value} (${item.value}%)`;
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
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

        {/* Drug Switch Rates Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <MedicationSankey />
        </div>
         
      </div>
    </div>
  );
};

export default DrugPrescribingCharts;