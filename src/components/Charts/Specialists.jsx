import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const dataPieChart = [
  { name: "Family Practitioner", value: 51.3 },
  { name: "General Internist", value: 39.4 },
  { name: "Internal Medicine Specialist", value: 6.1 },
  { name: "Emergency Medicine Physician", value: 2.3 },
  { name: "Hospitalist", value: 1.0 },
];

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#6366F1"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-medium text-gray-900">{payload[0].name}</p>
        <p className="text-gray-600">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const PCPPieChart = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold' }}>PCP Distribution</h2>
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={dataPieChart}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          innerRadius={60}
          labelLine={false}
          
        >
          {dataPieChart.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          verticalAlign="bottom" 
          height={36} 
          formatter={(value) => (
            <span className="text-sm text-gray-600">{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
    </div>
  );
};

export default PCPPieChart;