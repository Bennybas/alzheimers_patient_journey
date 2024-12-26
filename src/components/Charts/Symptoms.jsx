import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const SymptomsPieChart = () => {
  // Data for the Pie Chart
  const data = [
    { name: "Amnesia", value: 94.6 },
    { name: "Disorientation", value: 58.5 },
    { name: "Apathy", value: 50.4 },
    { name: "Depression", value: 38.4 },
    { name: "Apraxia", value: 33.5 },
    { name: "Aphasia", value: 25.4 },
    { name: "Emotional instability and Irritability", value: 18.3 },
    { name: "Personality changes", value: 15.2 },
  ];

  // Define colors for each segment
  const COLORS = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#FFCD94",
    "#4C99FF",
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg">
      {/* Chart Title */}
      <h2 className="text-center text-lg font-bold mb-4">
        Symptoms Experienced by Patients in the Onset
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
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
            fontSize: "14px",
            textAlign: "center",
          }}
        />
        <Legend />
      </PieChart>
      
      {/* Chart Footer */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Label: Percentage of cases
      </p>
    </div>
  );
};

export default SymptomsPieChart;
