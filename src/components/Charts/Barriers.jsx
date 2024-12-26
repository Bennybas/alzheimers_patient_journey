import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';

const data = [
  {
    reason: 'Lack of Patient Awareness of Subtle Cognitive Changes',
    percentage: 40
  },
  {
    reason: 'Attributing Symptoms to "Normal Aging" or Stress',
    percentage: 35
  },
  {
    reason: 'Lack of Time During Routine Appointments',
    percentage: 25
  },
  {
    reason: 'Insufficient Training in Cognitive Assessments',
    percentage: 20
  },
  {
    reason: 'Lack of Standardized Screening Protocols',
    percentage: 15
  }
].sort((a, b) => b.percentage - a.percentage);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-600">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const BarriersToMCIChart = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Barriers to Early Detection of Mild Cognitive Impairment (MCI)
      </h2>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 50, bottom: 20, left:-16 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <YAxis
            dataKey="reason"
            type="category"
            width={200}
            tick={{ 
              fill: '#374151',
              fontSize: 12,
              width: 200,
              wordWrap: 'break-word'
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="percentage"
            fill="#6366F1"
            className="hover:opacity-80"
            barSize={30}
          >
            <LabelList
              dataKey="percentage"
              position="right"
              formatter={(value) => `${value}%`}
              fill="#374151"
              className="font-medium"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarriersToMCIChart;
