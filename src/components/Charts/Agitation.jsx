import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Cognitive Decline", value: 30 },
  { name: "Environmental Changes", value: 20 },
  { name: "Communication Difficulties", value: 15 },
  { name: "Physical Discomfort", value: 15 },
  { name: "Psychiatric Symptoms", value: 10 },
  { name: "Medication Side Effects", value: 5 },
  { name: "Social Isolation", value: 5 },
];

const COLORS = [
  "#8884d8", // Cognitive Decline
  "#82ca9d", // Environmental Changes
  "#ffc658", // Communication Difficulties
  "#ff8042", // Physical Discomfort
  "#d0ed57", // Psychiatric Symptoms
  "#8dd1e1", // Medication Side Effects
  "#a4de6c", // Social Isolation
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>{payload[0].name}</p>
        <p style={{ margin: 0 }}>{`Percentage Influence: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const AgitationPieChart = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Factors Contributing to Agitation in Alzheimer's Patients
      </h3>
<<<<<<< HEAD
      <ResponsiveContainer width="100%" height={300}>
=======
      <ResponsiveContainer width="100%" height={400}>
>>>>>>> 24b7c0817e1a7f25615cc0196bee43e029866967
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
<<<<<<< HEAD
            outerRadius={90}
=======
            outerRadius={120}
>>>>>>> 24b7c0817e1a7f25615cc0196bee43e029866967
            label={(entry) => `${entry.name}: ${entry.value}%`}
            labelLine={false}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AgitationPieChart;
