import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
 
const data = [
  {
    drug: 'Donepezil',
    sideEffectRate: 19.4,
    adherenceRate: 61.2,
  },
  {
    drug: 'Galantamine',
    sideEffectRate: 18.2,
    adherenceRate: 47.0,
  },
  {
    drug: 'Rivastigmine',
    sideEffectRate: 20.6,
    adherenceRate: 41.3,
  },
  {
    drug: 'Donanemab',
    sideEffectRate: 24.0,
    adherenceRate: null, // Data not available
  },
];
 
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Drug: ${label}`}</p>
          {payload.map((item, index) => (
            <p key={index} className="intro">
              {`${item.name}: ${item.value!== null? `${item.value}%` : 'Data not available'}`}
            </p>
          ))}
        </div>
      );
    }
  
    return null;
  };
 
const SideEffectsAdherenceChart = () => (
<ResponsiveContainer width="100%" height={400}>
<BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
<XAxis dataKey="drug" />
<YAxis />
<Tooltip content={<CustomTooltip />} />
<Legend />
<Bar dataKey="sideEffectRate" name="Side Effect Rate (%)" fill="#8884d8" />
<Bar dataKey="adherenceRate" name="Adherence Rate (%)" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
);
 
export default SideEffectsAdherenceChart;