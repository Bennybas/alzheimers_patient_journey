import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend as BarLegend, ResponsiveContainer as BarResponsiveContainer
} from 'recharts';

const COLORS = ["#9B4D96", "#FFC107"]; // Updated colors for high stress and clinical depression

const dementiaCaregiverData = [
  { name: "High or Very High Stress", value: 60 },
  { name: "Clinical Depression", value: 40 },
];

const data = [
  { year: 2010, dementia: 18, amyloid: 14, infusion: 6 },
  { year: 2011, dementia: 17, amyloid: 13, infusion: 5 },
  { year: 2012, dementia: 16, amyloid: 12, infusion: 5 },
  { year: 2013, dementia: 15, amyloid: 11, infusion: 4 },
  { year: 2014, dementia: 14, amyloid: 10, infusion: 4 },
  { year: 2015, dementia: 13, amyloid: 9, infusion: 3 },
  { year: 2016, dementia: 12, amyloid: 8, infusion: 3 },
  { year: 2017, dementia: 11, amyloid: 7, infusion: 2 },
  { year: 2018, dementia: 10, amyloid: 6, infusion: 2 },
  { year: 2019, dementia: 9, amyloid: 5, infusion: 1 },
  { year: 2020, dementia: 8, amyloid: 4, infusion: 1 },
  { year: 2021, dementia: 7, amyloid: 3, infusion: 1 },
  { year: 2022, dementia: 6, amyloid: 3, infusion: 1 },
  { year: 2023, dementia: 5, amyloid: 2, infusion: 1 },
  { year: 2024, dementia: 4, amyloid: 2, infusion: 1 },
  { year: 2025, dementia: 3, amyloid: 1, infusion: 1 },
  { year: 2026, dementia: 2, amyloid: 1, infusion: 1 },
  { year: 2027, dementia: 1, amyloid: 1, infusion: 1 },
  { year: 2028, dementia: 1, amyloid: 0, infusion: 0 },
  { year: 2029, dementia: 1, amyloid: 0, infusion: 0 },
  { year: 2030, dementia: 0, amyloid: 0, infusion: 0 },
  { year: 2031, dementia: 0, amyloid: 0, infusion: 0 },
  { year: 2032, dementia: 0, amyloid: 0, infusion: 0 },
  { year: 2033, dementia: 0, amyloid: 0, infusion: 0 },
  { year: 2034, dementia: 0, amyloid: 0, infusion: 0 },
  { year: 2035, dementia: 0, amyloid: 0, infusion: 0 },
];

const CaregiverChart = () => {
  return (
    <div className="flex">
      {/* Left: Pie Chart */}
      <div className="p-6 w-1/2">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-700">Dementia Caregiver Statistics</h3>
        <div className="aspect-[4/3] w-full">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dementiaCaregiverData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {dementiaCaregiverData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right: Bar Chart */}
      <div className="p-6 w-1/2">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-700">Diagnosis and Treatment Delay Statistics</h3>
        <BarResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="dementia" fill="#800080" stackId="a" />
            <Bar dataKey="amyloid" fill="#FFD700" stackId="a" />
            <Bar dataKey="infusion" fill="#32CD32" stackId="a" />
            <BarLegend />
          </BarChart>
        </BarResponsiveContainer>
      </div>
    </div>
  );
};

export default CaregiverChart;
