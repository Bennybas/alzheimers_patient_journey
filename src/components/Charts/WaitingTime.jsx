import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from "recharts";

const data = [
  { year: "2019", waitingTime: 13.0 },
  { year: "2020", waitingTime: 15.3 },
  { year: "2021", waitingTime: 17.7 },
  { year: "2022", waitingTime: 17.7 },
  { year: "2023", waitingTime: 22 },
];

const AverageWaitingTimeChart = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontWeight:'bold',marginTop:'12px' }}>
        Average Waiting Time from Referral to Dementia Diagnosis
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="year">
            <Label value="Year" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label
              value="Average Waiting Time (weeks)"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip />
          <Bar dataKey="waitingTime" fill="#8884d8" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageWaitingTimeChart;
