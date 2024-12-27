import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

const AgeDistributionBarChart = () => {
  // Data for the Bar Chart
  const data = [
    { ageGroup: "40–59", percentage: 2 },
    { ageGroup: "60–69", percentage: 14.3 },
    { ageGroup: "70–79", percentage: 42.9 },
    { ageGroup: "80–89", percentage: 32.7 },
    { ageGroup: "90+", percentage: 8.2 },
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Chart Title */}
      <h2 className="text-center text-sm font-bold text-gray-700 mb-4">
        Follow-up Individual Age Distribution
      </h2>
      
      {/* Bar Chart */}
      <BarChart
        width={450}
        height={330}
        data={data}
        margin={{ top: 20, right: 30, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ageGroup" label={{ value: "Age Groups", position: "insideBottom", offset: -5 }} />
        <YAxis
          label={{ value: "Percentage (%)", angle: -90, position: "insideLeft" }}
          domain={[0, 50]}
          ticks={[0, 10, 20, 30, 40, 50]}
        />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
        <Bar dataKey="percentage" fill="#4A90E2" />
      </BarChart>
      
    </div>
  );
};

export default AgeDistributionBarChart;
