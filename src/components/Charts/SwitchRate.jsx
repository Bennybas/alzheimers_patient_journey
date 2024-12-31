import React, { useState } from 'react';

const MedicationSankey = () => {
  const [hoveredPath, setHoveredPath] = useState(null);

  const sourceMeds = [
    { id: 'don', name: 'Donepezil', color: '#16a34a' },
    { id: 'riv', name: 'Rivastigmine', color: '#2563eb' },
    { id: 'gal', name: 'Galantamine', color: '#dc2626' },
    { id: 'mem', name: 'Memantine', color: '#9333ea' }
  ];

  // Target medications (right side)
  const targetMeds = [
    { id: 'mem', name: 'Memantine', color: '#9333ea' },
    { id: 'don', name: 'Donepezil', color: '#16a34a' },
    { id: 'riv', name: 'Rivastigmine', color: '#2563eb' },
    { id: 'gal', name: 'Galantamine', color: '#dc2626' },
    { id: 'addMem', name: '+ Memantine', color: '#0891b2' },
    { id: 'addAChEI', name: '+ AChEI', color: '#ea580c' }
  ];

  const flows = [
    { from: 'don', to: 'mem', value: 3.7 },
    { from: 'don', to: 'addMem', value: 11.2 },
    { from: 'don', to: 'riv', value: 3.0 },
    { from: 'don', to: 'addAChEI', value: 5.7 }, // Added connection to addAChEI
    { from: 'riv', to: 'mem', value: 4.3 },
    { from: 'riv', to: 'addMem', value: 11.1 },
    { from: 'riv', to: 'gal', value: 6.7 },
    { from: 'riv', to: 'addAChEI', value: 7.1 }, // Added connection to addAChEI
    { from: 'gal', to: 'mem', value: 1.0 },
    { from: 'gal', to: 'addMem', value: 7.2 },
    { from: 'gal', to: 'don', value: 8.2 },
    { from: 'gal', to: 'addAChEI', value: 3.8 }, // Added connection to addAChEI
    { from: 'mem', to: 'don', value: 5.4 },
    { from: 'mem', to: 'riv', value: 5.4 },
    { from: 'mem', to: 'gal', value: 1.0 },
    { from: 'mem', to: 'addAChEI', value: 16.0 }
  ];

  

  const getPathD = (fromIndex, toIndex, value) => {
    const startX = 60;
    const endX = 440;
    const boxHeight = 40;
    const sourceGap = 20;
    const targetGap = 15;
    const startY = fromIndex * (boxHeight + sourceGap) + 30;
    const endY = toIndex * (boxHeight + targetGap) + 30;
    const curveStrength = 200;
    // Reduced the multiplier for width calculation to make flows thinner
    const width = Math.max(value * 1.5, 1);

    return `
      M ${startX} ${startY}
      C ${startX + curveStrength} ${startY},
        ${endX - curveStrength} ${endY},
        ${endX} ${endY}
      L ${endX} ${endY + width}
      C ${endX - curveStrength} ${endY + width},
        ${startX + curveStrength} ${startY + width},
        ${startX} ${startY + width}
      Z
    `;
  };

  return (
    <div className="w-full h-[400px] bg-white overflow-hidden p-4">
      <h2 className="text-lg font-bold text-center mb-4">Medication Switch Rates</h2>
      <div className="relative">
        <svg width="500" height="380" className="w-full h-full">
          {/* Flow Paths */}
          {flows.map((flow, idx) => {
            const fromIdx = sourceMeds.findIndex(m => m.id === flow.from);
            const toIdx = targetMeds.findIndex(m => m.id === flow.to);
            const fromMed = sourceMeds.find(m => m.id === flow.from);
            const toMed = targetMeds.find(m => m.id === flow.to);
            
            return (
              <g key={`${flow.from}-${flow.to}`}>
                <path
                  d={getPathD(fromIdx, toIdx, flow.value)}
                  fill={hoveredPath === idx ? fromMed.color : `${fromMed.color}30`}
                  className="transition-all duration-300"
                  onMouseEnter={() => setHoveredPath(idx)}
                  onMouseLeave={() => setHoveredPath(null)}
                />
                {hoveredPath === idx && (
                  <g>
                    <rect
                      x="220"
                      y={(fromIdx + toIdx) * 25 + 15}
                      width="60"
                      height="24"
                      fill="white"
                      rx="4"
                      className="shadow-lg"
                    />
                    <text
                      x="250"
                      y={(fromIdx + toIdx) * 25 + 31}
                      textAnchor="middle"
                      className="text-xs font-bold"
                      fill="#1f2937"
                    >
                      {`${flow.value}%`}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Source Medications (Left) */}
          {sourceMeds.map((med, idx) => {
            const y = idx * (40 + 20) + 30;
            return (
              <g key={`source-${med.id}`}>
                <rect
                  x="10"
                  y={y}
                  width="100"
                  height="40"
                  rx="4"
                  fill={med.color}
                  className="opacity-90"
                />
                <text
                  x="60"
                  y={y + 25}
                  textAnchor="middle"
                  className="text-xs"
                  fill="white"
                >
                  {med.name}
                </text>
              </g>
            );
          })}

          {/* Target Medications (Right) */}
          {targetMeds.map((med, idx) => {
            const y = idx * (40 + 15) + 30;
            return (
              <g key={`target-${med.id}`}>
                <rect
                  x="390"
                  y={y}
                  width="100"
                  height="40"
                  rx="4"
                  fill={med.color}
                  className="opacity-90"
                />
                <text
                  x="440"
                  y={y + 25}
                  textAnchor="middle"
                  className="text-xs"
                  fill="white"
                >
                  {med.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default MedicationSankey;