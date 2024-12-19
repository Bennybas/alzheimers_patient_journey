import React from 'react';

const AlzheimersTreatmentFlow = ({ 
  outerRadius = 80, 
  arcWidth = 20,
  plateColor = "#E8F4FF"  // Light blue plate color
}) => {
  // Calculate percentages based on patient numbers
  
  const percentage1 = 80;
  const percentage2 = 66;
  const percentage3 = 44;
  const percentage4 = 28;

  const createArcPath = (startAngle, endAngle, radius) => {
    const start = polarToCartesian(80, 80, radius, endAngle);
    const end = polarToCartesian(80, 80, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  return (
    <div className="flex justify-center items-center space-x-8 -ml-20">
      {/* First Circle - Monotherapy */}
      <div className="relative" style={{ width: '160px', height: '200px' }}>
        <svg viewBox="0 -80 160 360" width="300" height="360">
          <defs>
            <linearGradient id="gradientPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Decorative outer ring */}
          <circle 
            cx="80" 
            cy="80" 
            r="75" 
            fill="none" 
            stroke="#b9cffa"
            strokeWidth="10"
            strokeDasharray="4,4"
          />

          {/* Main circle background */}
          <circle cx="80" cy="80" r="65" fill={plateColor} />

          {/* Progress arc */}
          <path
            d={createArcPath(0, (percentage1 * 3.6), 50)}
            fill="none"
            stroke="url(#gradientPrimary)"
            strokeWidth={arcWidth}
            strokeLinecap="round"
            filter="url(#glow)"
          />

          {/* Percentage display */}
          <text
            x="80"
            y="75"
            textAnchor="middle"
            fill="#1E40AF"
            fontSize="24"
            fontWeight="bold"
          >
            {percentage1}%
          </text>
          <text
            x="80"
            y="95"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="12"
          >
            Monotherapy
          </text>

          {/* Title and medications */}
          <text 
            x="80" 
            y="-40" 
            textAnchor="middle"
            fill="#374151"
            fontSize="14"
            fontWeight="bold"
          >
            First-line Treatment
          </text>
          <text 
            x="80" 
            y="-20" 
            textAnchor="middle"
            fill="#6B7280"
            fontSize="11"
          >
            (Donepezil, Rivastigmine , Galantamine)
          </text>
        </svg>
      </div>
{/*       
      <div>
        <svg 
        className="w-full max-w-2xl"
        viewBox="0 0 400 100"
        xmlns="http://www.w3.org/2000/svg"
        >
        
        <line
          x1="100"
          y1="100"
          x2="200"
          y2="100"
          stroke="black"
          strokeWidth="2"
        />
        
    <circle
          cx="1p0"
          cy="100"
          r="4"
          fill="black"
        />
       
    <circle
          cx="200"
          cy="100"
          r="4"
          fill="black"
        />
    </svg>
    </div> */}

      {/* Second Circle - Dual Therapy */}
      <div className="relative" style={{ width: '160px', height: '200px' }}>
        <svg viewBox="0 -80 160 360" width="300" height="360">
          <defs>
            <linearGradient id="gradientSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>

          {/* Decorative outer ring */}
          <circle 
            cx="80" 
            cy="80" 
            r="75" 
            fill="none" 
            stroke="#a9f5d9"
            strokeWidth="10"
            strokeDasharray="4,4"
          />

          {/* Main circle background */}
          <circle cx="80" cy="80" r="65" fill="#F0FDF4" />

          {/* Progress arc */}
          <path
            d={createArcPath(0, (percentage3 * 3.6), 50)}
            fill="none"
            stroke="url(#gradientSecondary)"
            strokeWidth={arcWidth}
            strokeLinecap="round"
            filter="url(#glow)"
          />

          {/* Percentage display */}
          <text
            x="80"
            y="75"
            textAnchor="middle"
            fill="#065F46"
            fontSize="24"
            fontWeight="bold"
          >
            {percentage2}%
          </text>
          <text
            x="80"
            y="95"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="12"
          >
            Dual Therapy
          </text>

          {/* Title and medications */}
          <text 
            x="80" 
            y="180" 
            textAnchor="middle"
            fill="#374151"
            fontSize="14"
            fontWeight="bold"
          >
            Second-line Treatment
          </text>
          <text 
            x="80" 
            y="200" 
            textAnchor="middle"
            fill="#6B7280"
            fontSize="11"
          >
            (Donepezil + Memantine, Rivastigmine + Memantine )
          </text>
        </svg>
      </div>


      {/* Third line */}
      <div className="relative" style={{ width: '160px', height: '200px' }}>
        <svg viewBox="0 -80 160 360" width="300" height="360">
          <defs>
            <linearGradient id="gradientPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Decorative outer ring */}
          <circle 
            cx="80" 
            cy="80" 
            r="75" 
            fill="none" 
            stroke="#b9cffa"
            strokeWidth="10"
            strokeDasharray="4,4"
          />

          {/* Main circle background */}
          <circle cx="80" cy="80" r="65" fill={plateColor} />

          {/* Progress arc */}
          <path
            d={createArcPath(0, (percentage3 * 3.6), 50)}
            fill="none"
            stroke="url(#gradientPrimary)"
            strokeWidth={arcWidth}
            strokeLinecap="round"
            filter="url(#glow)"
          />

          {/* Percentage display */}
          <text
            x="80"
            y="75"
            textAnchor="middle"
            fill="#1E40AF"
            fontSize="24"
            fontWeight="bold"
          >
            {percentage3}%
          </text>
          <text
            x="80"
            y="95"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="12"
          >
           Severe Stages
          </text>

          {/* Title and medications */}
          <text 
            x="80" 
            y="-40" 
            textAnchor="middle"
            fill="#374151"
            fontSize="14"
            fontWeight="bold"
          >
            Advanced Stage Treatment
          </text>
          <text 
            x="80" 
            y="-20" 
            textAnchor="middle"
            fill="#6B7280"
            fontSize="11"
          >
            (Memantine)
          </text>
        </svg>
      </div>

      {/* Fourth line */}
      <div className="relative" style={{ width: '160px', height: '200px' }}>
        <svg viewBox="0 -80 160 360" width="300" height="360">
          <defs>
            <linearGradient id="gradientSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>

          {/* Decorative outer ring */}
          <circle 
            cx="80" 
            cy="80" 
            r="75" 
            fill="none" 
            stroke="#a9f5d9"
            strokeWidth="10"
            strokeDasharray="4,4"
          />

          {/* Main circle background */}
          <circle cx="80" cy="80" r="65" fill="#F0FDF4" />

          {/* Progress arc */}
          <path
            d={createArcPath(0, (percentage3 * 3.6), 50)}
            fill="none"
            stroke="url(#gradientSecondary)"
            strokeWidth={arcWidth}
            strokeLinecap="round"
            filter="url(#glow)"
          />

          {/* Percentage display */}
          <text
            x="80"
            y="75"
            textAnchor="middle"
            fill="#065F46"
            fontSize="24"
            fontWeight="bold"
          >
            {percentage4}%
          </text>
          <text
            x="80"
            y="95"
            textAnchor="middle"
            fill="#6B7280"
            fontSize="12"
          >
            Specific Cases
          </text>

          {/* Title and medications */}
          <text 
            x="80" 
            y="180" 
            textAnchor="middle"
            fill="#374151"
            fontSize="14"
            fontWeight="bold"
          >
            Supplementary Therapy Combinations
          </text>
          <text 
            x="80" 
            y="200" 
            textAnchor="middle"
            fill="#6B7280"
            fontSize="11"
          >
            (Galantamine + Memantine )
          </text>
        </svg>
      </div>
      
    </div>
  );
};

export default AlzheimersTreatmentFlow;