import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Late Diagnosis", Percentage: 30 },
  { name: "Patient Reluctance", Percentage: 25 },
  { name: "Healthcare System Delays", Percentage: 20 },
  { name: "Inadequate Screening", Percentage: 15 },
  { name: "Misunderstanding of Symptoms", Percentage: 10 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: "#ffffff", border: "1px solid #cccccc", padding: "10px", borderRadius: "5px" }}>
        <p style={{ margin: 0, fontWeight: "bold" }}>{label}</p>
        <p style={{ margin: 0 }}>{`Percentage: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const DelayChart = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3 className="text-lg font-bold mb-4 text-center text-gray-700">Reasons for Delays in Alzheimer's Treatment Initiation</h3>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fill: "#333", fontSize: 12 }} />
          <YAxis tick={{ fill: "#333", fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="bottom" height={36} />
          <Bar dataKey="Percentage" fill="#82ca9d" barSize={30} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DelayChart;
