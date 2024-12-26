import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const ScreeningReason = () => {
  // Data for the Pie Chart
  const data = [
    { name: "Annual re-screen", value: 5.9 },
    { name: "Curiosity", value: 15.9 },
    { name: "Preventative", value: 25.7 },
    { name: "Other", value: 4.5 },
    { name: "Family expressed concern", value: 9.2 },
    { name: "Customer memory concern", value: 38.9 },
  ];

  // Colors for the Pie Chart
  const COLORS = [
    "#80DEEA",
    "#FFF59D",
    "#FFCC80",
    "#B0BEC5",
    "#FFABAB",
    "#B39DDB",
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Chart Title */}
      <h2 className="text-center text-lg font-bold mb-4">
        Reasons for Screening
      </h2>

      {/* Pie Chart */}
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name) => [`${value}%`, name]}
          contentStyle={{
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            fontSize: "14px",
            textAlign: "center",
          }}
        />
        <Legend />
      </PieChart>

      {/* Chart Footer */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Data represents the percentage of cases.
      </p>
    </div>
  );
};

export default ScreeningReason;
