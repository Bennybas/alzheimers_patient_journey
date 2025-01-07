import React from 'react';

const DrugChangeHeatmap = () => {
  const data = [
    { name: 'Rivastigmine', HCP: 44, payerChange: 22, planChange: 33 }, 
    { name: 'Donepezil', HCP: 100, payerChange: 0, planChange: 0 }, 
    { name: 'Galantamine', HCP: 100, payerChange: 0, planChange: 0 },
    { name: 'Memantine', HCP: 0, payerChange: 50, planChange: 50 }
  ];

  const colorScale = {
    HCP: '#2563eb',        // Strong blue for HCP
    payerChange: '#16a34a', // Strong green for Payer
    planChange: '#9333ea'   // Strong purple for Plan
  };

  const getColor = (category, value) => {
    if (value > 0) {
      return colorScale[category];
    }
    return '#f3f4f6'; // Light gray for zero values
  };

  const categories = ['HCP', 'payerChange', 'planChange'];
  const categoryLabels = {
    HCP: 'HCP Change',
    payerChange: 'Payer Change',
    planChange: 'Plan Change'
  };

  return (
    <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Drug Switch Reasons</h2>
      
      <div className="flex gap-8">
        <div className="w-full space-y-4">
          {data.map((drug, index) => {
            const nonZeroCategories = categories.filter(cat => drug[cat] > 0);
            const widthPercentage = nonZeroCategories.length > 0 ? `${Math.floor(100 / nonZeroCategories.length)}%` : '0%';
            return (
              <div key={index} className="relative">
                <div className="flex items-center mb-2">
                  <div className="w-32 font-bold text-sm">{drug.name}</div>
                  <div className="flex-1 h-8 flex">
                    {nonZeroCategories.map((category) => (
                      <div
                        key={category}
                        style={{
                          width: widthPercentage,
                          height: '18px',
                          backgroundColor: getColor(category, drug[category])
                        }}
                        className="h-full relative group"
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xs font-medium">
                          <span className="whitespace-nowrap overflow-hidden text-ellipsis px-1">
                            {Math.round(drug[category])}%
                          </span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded text-xs whitespace-nowrap z-10">
                          {categoryLabels[category]}<br />
                          {Math.round(drug[category])}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full mt-8">
        <div className="flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: colorScale.HCP }}></div>
            <span className="ml-2 text-xs text-gray-600">HCP Change</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: colorScale.payerChange }}></div>
            <span className="ml-2 text-xs text-gray-600">Payer Change</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: colorScale.planChange }}></div>
            <span className="ml-2 text-xs text-gray-600">Plan Change</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugChangeHeatmap;
