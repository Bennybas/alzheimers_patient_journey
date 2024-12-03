import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const StateCaregivingMap = () => {
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
  const [tooltipContent, setTooltipContent] = useState("");

  // Caregiving data for each state
  const caregivingData = {
    // Convert state numeric IDs to state abbreviations
    "01": { abbr: "AL", caregivers: 217, hours: 387, value: 5310 },
    "02": { abbr: "AK", caregivers: 25, hours: 39, value: 796 },
    "04": { abbr: "AZ", caregivers: 292, hours: 483, value: 10228 },
    "05": { abbr: "AR", caregivers: 155, hours: 270, value: 4448 },
    "06": { abbr: "CA", caregivers: 1373, hours: 1864, value: 44272 },
    "08": { abbr: "CO", caregivers: 177, hours: 307, value: 7249 },
    "09": { abbr: "CT", caregivers: 128, hours: 201, value: 4331 },
    "10": { abbr: "DE", caregivers: 31, hours: 46, value: 909 },
    "11": { abbr: "DC", caregivers: 14, hours: 15, value: 343 },
    "12": { abbr: "FL", caregivers: 840, hours: 1321, value: 24437 },
    "13": { abbr: "GA", caregivers: 374, hours: 755, value: 11417 },
    "15": { abbr: "HI", caregivers: 60, hours: 91, value: 1907 },
    "16": { abbr: "ID", caregivers: 66, hours: 105, value: 1875 },
    "17": { abbr: "IL", caregivers: 311, hours: 480, value: 9840 },
    "18": { abbr: "IN", caregivers: 216, hours: 322, value: 5186 },
    "19": { abbr: "IA", caregivers: 98, hours: 125, value: 2284 },
    "20": { abbr: "KS", caregivers: 89, hours: 125, value: 1989 },
    "21": { abbr: "KY", caregivers: 157, hours: 302, value: 4869 },
    "22": { abbr: "LA", caregivers: 168, hours: 256, value: 3428 },
    "23": { abbr: "ME", caregivers: 51, hours: 87, value: 1911 },
    "24": { abbr: "MD", caregivers: 247, hours: 405, value: 8144 },
    "25": { abbr: "MA", caregivers: 213, hours: 246, value: 5668 },
    "26": { abbr: "MI", caregivers: 380, hours: 872, value: 17044 },
    "27": { abbr: "MN", caregivers: 164, hours: 225, value: 5276 },
    "28": { abbr: "MS", caregivers: 93, hours: 175, value: 2380 },
    "29": { abbr: "MO", caregivers: 223, hours: 350, value: 6478 },
    "30": { abbr: "MT", caregivers: 17, hours: 25, value: 478 },
    "31": { abbr: "NE", caregivers: 40, hours: 62, value: 1188 },
    "32": { abbr: "NV", caregivers: 84, hours: 142, value: 2681 },
    "33": { abbr: "NH", caregivers: 48, hours: 77, value: 1529 },
    "34": { abbr: "NJ", caregivers: 272, hours: 494, value: 10882 },
    "35": { abbr: "NM", caregivers: 67, hours: 118, value: 2142 },
    "36": { abbr: "NY", caregivers: 543, hours: 879, value: 18996 },
    "37": { abbr: "NC", caregivers: 373, hours: 723, value: 10939 },
    "38": { abbr: "ND", caregivers: 19, hours: 25, value: 465 },
    "39": { abbr: "OH", caregivers: 414, hours: 624, value: 11427 },
    "40": { abbr: "OK", caregivers: 108, hours: 189, value: 3099 },
    "41": { abbr: "OR", caregivers: 170, hours: 229, value: 5285 },
    "42": { abbr: "PA", caregivers: 465, hours: 822, value: 13668 },
    "44": { abbr: "RI", caregivers: 36, hours: 51, value: 1132 },
    "45": { abbr: "SC", caregivers: 219, hours: 361, value: 5550 },
    "46": { abbr: "SD", caregivers: 27, hours: 34, value: 716 },
    "47": { abbr: "TN", caregivers: 369, hours: 499, value: 7804 },
    "48": { abbr: "TX", caregivers: 1016, hours: 1532, value: 23937 },
    "49": { abbr: "UT", caregivers: 112, hours: 132, value: 2465 },
    "50": { abbr: "VT", caregivers: 19, hours: 28, value: 615 },
    "51": { abbr: "VA", caregivers: 342, hours: 662, value: 12572 },
    "53": { abbr: "WA", caregivers: 247, hours: 378, value: 9499 },
    "54": { abbr: "WV", caregivers: 65, hours: 115, value: 1585 },
    "55": { abbr: "WI", caregivers: 205, hours: 297, value: 5528 },
    "56": { abbr: "WY", caregivers: 16, hours: 21, value: 385 },
  };

  // Color categories for states
  const getStateColor = (stateData) => {
    if (!stateData) return "#F0F4F8";

    const caregivers = stateData.caregivers;
    if (caregivers > 1000) return "#2D6A4F"; // Dark green
    if (caregivers > 500) return "#52B788"; // Medium green
    return "#B7E4C7"; // Light green
  };

  // Tooltip for state data
  const handleMouseEnter = (geo) => {
    const stateId = geo.id;
    const stateData = caregivingData[stateId];
    
    if (stateData) {
      setTooltipContent(`
        State: ${stateData.abbr}
        Number of Caregivers: ${stateData.caregivers}k
        Hours of Unpaid Care: ${stateData.hours}M
        Value of Unpaid Care: $${stateData.value}M
      `);
    } else {
      setTooltipContent("No data available");
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Caregiving Statistics by State
      </h2>

      <div className="flex justify-center items-center space-x-4 mb-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#2D6A4F] mr-2"></div>
          <span>Caregivers: 1000k+</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#52B788] mr-2"></div>
          <span>Caregivers: 500k–1000k</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#B7E4C7] mr-2"></div>
          <span>Caregivers: &lt; 500k</span>
        </div>
      </div>

      <div className="relative">
        <ComposableMap projection="geoAlbersUsa" className="w-full h-[500px]">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateData = caregivingData[geo.id];
                const stateColor = getStateColor(stateData);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={stateColor}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#FFD700", outline: "none" },
                      pressed: { fill: "#FFD700", outline: "none" },
                    }}
                    onMouseEnter={() => handleMouseEnter(geo)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {tooltipContent && (
          <div className="absolute top-0 left-0 bg-white p-2 rounded shadow-lg">
            <pre>{tooltipContent}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default StateCaregivingMap;