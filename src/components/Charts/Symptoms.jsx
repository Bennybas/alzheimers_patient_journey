import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Cell } from "recharts";

const SymptomsBarChart = () => {
  // Data for the Bar Chart
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

  // Define colors for each bar
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
      
      {/* Bar Chart */}
      <BarChart width={400} height={400} data={data} margin={{ top: 50, right: 30, left: 20, bottom: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          interval={0}
          angle={-35}
          textAnchor="end"
          minTickGap={1}
          tick={{ fontSize: 12 }}
        />
        <YAxis />
        <Tooltip
          formatter={(value, name) => [`${value}%`, name]}
          contentStyle={{
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
            fontSize: "14px",
            textAlign: "center",
          }}
        />
        <Legend verticalAlign="top" align="center" />
        <Bar dataKey="value" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default SymptomsBarChart;