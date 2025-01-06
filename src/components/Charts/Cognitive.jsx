import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Patient or Family", value: 57.9 },
  { name: "Participating HCP", value: 29.6 },
  { name: "Referring Physician", value: 11.8 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Cognitive = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontWeight:'bold'}}>
        Initiators of Cognitive Impairment Investigations
      </h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(1)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Cognitive;
