import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Label, PieChart, Pie, Cell
} from 'recharts';

const TherapyMetrics = () => {
  const combinedData = [
    { line: "L1", percentage: 63.5, months: 21.1 },
    { line: "L2", percentage: 36.5, months: 12.7 }
  ];

  const drugData = [
    { name: "Donepezil", percentage: 58.4 },
    { name: "Rivastigmine", percentage: 13.63 },
    { name: "Donepezil + Memantine", percentage: 6.43 },
    { name: "Galantamine", percentage: 12.83 }
  ];

  const getColor = (index) => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return colors[index % colors.length];
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
          <p className="font-medium">{`Line: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
              {entry.name === "Percentage" ? "%" : " months"}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full p-8">
      <div className="flex flex-row gap-4">
        <div className="bg-white p-4 rounded-lg shadow flex-1">
          <h3 className="text-lg font-bold mb-4 text-center">
            Patients and Avg Days by Line of Therapy
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={combinedData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                barCategoryGap="30%"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="line" />
                <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `${value}%`}>
                  <Label value="Patient Percentage" angle={-90} position="insideLeft" style={{ textAnchor: "middle" }} />
                </YAxis>
                <YAxis yAxisId="right" orientation="right" domain={[0, 24]} tickFormatter={(value) => `${value}m`}>
                  <Label value="Avg Duration (Months)" angle={-90} position="insideRight" style={{ textAnchor: "middle" }} />
                </YAxis>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar yAxisId="left" dataKey="percentage" name="Percentage" fill="#0088FE" />
                <Bar yAxisId="right" dataKey="months" name="Avg Duration" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg shadow flex-1">
          <h3 className="text-lg font-bold mb-4 text-center">
            Drug Prescription Rate
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={drugData}
                  dataKey="percentage"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="68%"
                  fill="#8884d8"
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                >
                  {drugData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getColor(index)} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyMetrics;