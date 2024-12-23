import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Monotherapy", value: 86.2 },
  { name: "Dual therapy", value: 13.8 }
];

const COLORS = ["#3B82F6", "#10B981"];

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

const TherapyDistributionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={40}
          labelLine={false}
          label={({ name, value }) => (
            `${name}: ${value}%`
          )}
        >
          {data.map((entry, index) => (
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
  );
};

export default TherapyDistributionChart;