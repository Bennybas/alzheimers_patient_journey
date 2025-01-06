import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#4CAF50", "#F44336"]; // Updated colors for adherence and non-adherence

const adherenceData = [
  { name: "Adherence", value: 29 },
  { name: "Non-Adherence", value: 71 },
];

const AdherenceChart = () => {
  return (
    <div className="p-6">
      <h3 className="text-lg font-bold mb-4 text-center text-gray-700">Adherence Distribution</h3>
      <div className="aspect-[4/3] w-full">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={adherenceData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {adherenceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} /> {/* Updated legend placement */}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdherenceChart;
