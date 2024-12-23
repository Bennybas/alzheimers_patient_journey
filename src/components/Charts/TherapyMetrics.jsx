import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label
} from 'recharts';

const TherapyMetrics = () => {
  // Patient distribution data by line of therapy
  const patientData = [
    {
      line: "L1",
      percentage: 63.5,
      patients: 2479,
      fill: "#0088FE"
    },
    {
      line: "L2",
      percentage: 36.5,
      patients: 1801,
      fill: "#00C49F"
    }
  ];

  // Average duration data by line of therapy
  const durationData = [
    {
      line: "L1",
      months: 21.1,
      fill: "#0088FE"
    },
    {
      line: "L2",
      months: 12.7,
      fill: "#00C49F"
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
          <p className="font-medium">{`Line ${label}`}</p>
          {data.percentage ? (
            <>
              <p>{`${data.percentage}% of patients`}</p>
              <p>{`${data.patients.toLocaleString()} patients`}</p>
            </>
          ) : (
            <p>{`${data.months} months average duration`}</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-4xl p-8">
      <div className="grid grid-cols-2 gap-16">
        {/* Patients by Line of Therapy */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4 text-center">Patients by Line of Therapy</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={patientData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="line" />
                <YAxis tickFormatter={(value) => `${value}%`}>
                  <Label
                    value="Patient Distribution"
                    angle={-90}
                    position="insideLeft"
                    style={{ textAnchor: 'middle' }}
                  />
                </YAxis>
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="percentage" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Average Duration by Line of Therapy */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4 text-center">Avg Days on each Line of Therapy</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={durationData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="line" />
                <YAxis domain={[0, 24]} tickFormatter={(value) => `${value}m`}>
                  <Label
                    value="Duration (Months)"
                    angle={-90}
                    position="insideLeft"
                    style={{ textAnchor: 'middle' }}
                  />
                </YAxis>
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="months" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyMetrics;