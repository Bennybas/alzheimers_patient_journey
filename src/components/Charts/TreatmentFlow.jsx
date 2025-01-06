import React from 'react';
import TherapyDistributionChart from './TwoTherapies';
import TherapyMetrics from './TherapyMetrics';

const TreatmentDistribution = () => {
  const data = {
    'L1': [
      { name: 'Rivastigmine', percentage: 30.5, count: 1190, color: '#FF6B6B' },
      { name: 'Donepezil', percentage: 27.5, count: 1073, color: '#4ECDC4' },
      { name: 'Galantamine', percentage: 5.5, count: 216, color: '#45B7D1' }
    ],
    'L2': [
      { name: 'Memantine', percentage: 24.1, count: 941, color: '#96CEB4' },
      { name: 'Donepezil + Memantine', percentage: 13.8, count: 538, color: '#FFEEAD' },
      { name: 'Rivastigmine + Memantine', percentage: 6.8, count: 266, color: '#D4A5A5' },
      { name: 'Galantamine + Memantine', percentage: 1.4, count: 56, color: '#9BB7D4' }
    ]
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
        {/* Left side: L1 and L2 charts with legend */}
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
                        backgroundColor: item.color
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
                        {item.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Legend for each line */}
              <div className="mt-4 flex flex-wrap gap-4 ml-8">
                {data[line].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-sm mr-2"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right side: TherapyDistributionChart */}
        <div className="w-1/2 ml-8">
          <TherapyDistributionChart />
        </div>
      </div>
    </div>
  );
};

export default TreatmentDistribution;