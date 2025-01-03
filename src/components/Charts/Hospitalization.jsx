import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Label,
  Cell
} from "recharts";

const data = [
  { name: "Syncope, fall and trauma", value: 26, color: "#5B248E" }, // Purple
  { name: "Ischemic heart disease", value: 17, color: "#FFA722" }, // Orange
  { name: "Gastrointestinal disease", value: 9, color: "#3DB7A3" }, // Teal
  { name: "Pneumonia", value: 6, color: "#C2C2C2" }, // Gray
  { name: "Delirium, mental status change", value: 5, color: "#585858" }, // Dark Gray
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded p-2 shadow-lg">
        <p className="m-0 font-bold">{label}</p>
        <p className="m-0">{`Percentage: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const HospitalizationBarChart = () => {
  return (
    <div className="p-4 font-sans">
      <h3 className="text-center text-lg font-bold mb-4">
        Reasons for Hospitalization of Individuals with Alzheimer's Dementia
      </h3>
      <div className="h-96 w-full">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              interval={0}
              angle={-25}
              textAnchor="end"
              tick={{ fontSize: 12, fill: "#333" }}
            >
              <Label
                
                offset={-40}
                position="insideBottom"
                className="text-sm font-bold"
              />
            </XAxis>
            <YAxis
              tick={{ fontSize: 12, fill: "#333" }}
              label={{
                value: "Percentage",
                angle: -90,
                position: "insideLeft",
                className: "text-sm font-bold"
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[10, 10, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <Label
                position="top"
                content={({ value }) => `${value}%`}
                className="text-xs font-bold fill-gray-700"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HospitalizationBarChart;