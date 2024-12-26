import React from 'react';
import TherapyDistributionChart from './TwoTherapies';
import TherapyMetrics from './TherapyMetrics';

const TreatmentDistribution = () => {
  const data = {
    'L1': [
      { name: 'Rivastigmine', percentage: 30.5, count: 1190 },
      { name: 'Donepezil', percentage: 27.5, count: 1073 },
      { name: 'Galantamine', percentage: 5.5, count: 216 }
    ],
    'L2': [
      { name: 'Memantine', percentage: 24.1, count: 941 },
      { name: 'Donepezil + Memantine', percentage: 13.8, count: 538 },
      { name: 'Rivastigmine + Memantine', percentage: 6.8, count: 266 },
      { name: 'Galantamine + Memantine', percentage: 1.4, count: 56 }
    ]
  };

  // Function to get color intensity based on percentage
  const getColor = (percentage) => {
    const maxPercentage = 35; // Slightly higher than our max value for better color distribution
    const intensity = Math.floor((percentage / maxPercentage) * 255);
    return `rgb(0, ${intensity}, ${255 - (intensity/2)})`;
  };

  // Calculate total width for each line of treatment
  const l1Total = data.L1.reduce((sum, item) => sum + item.percentage, 0);
  const l2Total = data.L2.reduce((sum, item) => sum + item.percentage, 0);

  return (
    <div className="w-full max-w-6xl bg-white rounded-gray shadow-lg rounded-lg p-6">
      
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Treatment Distribution</h2>
      </div>

      
      
      <div className="flex gap-8">
        {/* Left side: L1 and L2 charts */}
        <div className="w-1/2 space-y-8">
          {['L1', 'L2'].map((line) => (
            <div key={line} className="relative">
              <div className="flex items-center mb-2">
                <div className="w-12 font-bold text-lg">{line}</div>
                <div className="flex-1 h-16 flex">
                  {data[line].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        width: `${(item.percentage / (line === 'L1' ? l1Total : l2Total)) * 100}%`,
                        backgroundColor: getColor(item.percentage)
                      }}
                      className="h-full relative group"
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-sm font-medium">
                        <span className="whitespace-nowrap overflow-hidden text-ellipsis px-1">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded text-xs whitespace-nowrap z-10">
                        {item.name}<br />
                        Count: {item.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: TherapyDistributionChart */}
        <div className="w-1/2">
          <TherapyDistributionChart />
        </div>
      </div>

      
      
    </div>
  );
};

export default TreatmentDistribution;