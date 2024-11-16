import React, { useState } from 'react';
import { Card } from '../ui/card';
import {
  ArrowRight,
  Stethoscope,
  Building2,
  User,
  LineChart,
  ClipboardCheck,
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const JourneyStage = ({ stage, metrics, barriers, findings }) => {
  const [hoveredAction, setHoveredAction] = useState(null);
  const [showInsights, setShowInsights] = useState(false);

  const handleActionHover = (actionName) => {
    setHoveredAction(actionName);
  };

  const handleActionLeave = () => {
    setHoveredAction(null);
  };

  const toggleInsights = () => {
    setShowInsights(!showInsights);
  };

  // Dynamic insights based on stage (kept the same)
  const getInsightsData = () => {
    switch (stage.number) {
      case 1:
        return [
          { stage: "Preclinical AD", time: "Up to 10+ years before symptoms appear" },
          { stage: "Mild Cognitive Impairment (MCI) Due to AD", time: "2-4 years from the onset of MCI symptoms" },
          { stage: "Dementia Due to AD - Mild", time: "1-3 years after MCI diagnosis" },
          { stage: "Dementia Due to AD - Moderate", time: "2-5 years after moderate stage" },
          { stage: "Dementia Due to AD - Severe", time: "1-3 years after moderate stage" }
        ];
      case 2:
        return [
          { mmse: "28/30", moca: "28/30", stage: "Normal cognitive function, may show minor signs of decline" },
          { mmse: "26/30", moca: "26/30", stage: "Mild cognitive impairment (MCI), slight decline in memory, attention" },
          { mmse: "22/30", moca: "22/30", stage: "Moderate cognitive decline, noticeable issues with memory and daily tasks" },
          { mmse: "18/30", moca: "18/30", stage: "Moderate dementia, increasing difficulties with communication, orientation" },
          { mmse: "Below 18", moca: "Below 18", stage: "Severe cognitive decline, advanced stages of dementia, major difficulties in daily life" }
        ];
      case 3:
        return [
          { aspect: "Incidence of ARIA-E (Edema)", insight: "15-25% of patients experience ARIA-E (brain edema) during treatment with lecanemab." },
          { aspect: "Incidence of ARIA-H (Hemorrhage)", insight: "5-10% of patients experience ARIA-H (microhemorrhages) during treatment with lecanemab." },
          { aspect: "Symptomatic ARIA", insight: "5-10% of patients may experience symptomatic ARIA, requiring clinical intervention." },
          { aspect: "Age Factor", insight: "Older patients (typically ≥65 years) are at increased risk of developing ARIA." },
          { aspect: "ARIA Resolution Rate", insight: "80-90% of ARIA cases (both ARIA-E and ARIA-H) resolve over a period of weeks to months." }
        ];
      default:
        return [];
    }
  };

  const renderInsightsTable = () => {
    const insightsData = getInsightsData();
    
    const tableClasses = "w-full border-collapse overflow-hidden rounded-lg";
    const headerClasses = "bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider px-6 py-3";
    const cellClasses = "px-6 py-4 text-sm text-gray-800 border-t border-gray-200";
    
    switch (stage.number) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Average Time to Diagnosis</h3>
            <table className={tableClasses}>
              <thead>
                <tr>
                  <th className={headerClasses}>Stage</th>
                  <th className={headerClasses}>Average Time to Diagnosis</th>
                </tr>
              </thead>
              <tbody>
                {insightsData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className={cellClasses}>{item.stage}</td>
                    <td className={cellClasses}>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Cognitive Decline Metrics</h3>
            <table className={tableClasses}>
              <thead>
                <tr>
                  <th className={headerClasses}>MMSE Score</th>
                  <th className={headerClasses}>MoCA Score</th>
                  <th className={headerClasses}>Stage of Cognitive Decline</th>
                </tr>
              </thead>
              <tbody>
                {insightsData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className={cellClasses}>{item.mmse}</td>
                    <td className={cellClasses}>{item.moca}</td>
                    <td className={cellClasses}>{item.stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">ARIA in Lecanemab Treatment</h3>
            <table className={tableClasses}>
              <thead>
                <tr>
                  <th className={headerClasses}>Aspect</th>
                  <th className={headerClasses}>Quantitative Insights</th>
                </tr>
              </thead>
              <tbody>
                {insightsData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className={`${cellClasses} font-medium`}>{item.aspect}</td>
                    <td className={cellClasses}>{item.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full">
      <Card className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 p-6 mb-6 shadow-lg rounded-lg border border-purple-200 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-md transform transition-transform hover:scale-105">
              <span className="text-2xl font-bold text-white">{stage.number}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-purple-900">{stage.title}</h2>
              <p className="text-sm text-purple-700 mt-1">{stage.timeframe}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={toggleInsights}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg active:transform active:scale-95"
            >
              Insights
              {showInsights ? (
                <ChevronUp className="w-4 h-4 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform" />
              )}
            </button>
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{stage.description}</p>

        <div className="flex items-center gap-4 mb-6">
          {stage.actions.map((action, idx) => (
            <React.Fragment key={idx}>
              <div
                className="flex-1 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-purple-50 cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => handleActionHover(action.name)}
                onMouseLeave={handleActionLeave}
              >
                <div className="text-sm font-medium text-purple-900">{action.name}</div>
              </div>
              {idx < stage.actions.length - 1 && (
                <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0 animate-pulse" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className={`transition-all duration-500 ease-in-out ${
          showInsights ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {renderInsightsTable()}
          </div>
        </div>

        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          hoveredAction ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {hoveredAction && (
            <div className="bg-purple-50 p-4 rounded-lg shadow-inner mt-4 border border-purple-100">
              <h3 className="text-purple-800 font-semibold mb-2">
                {hoveredAction}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {stage.actions.find(action => action.name === hoveredAction)?.content}
              </p>
            </div>
          )}
        </div>
      </Card>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <LineChart className="w-4 h-4" />
              Key Metrics
            </h3>
            <div className="space-y-3">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="col-span-6">
          <Card className="h-full p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Key Barriers
            </h3>
            <KeyBarriers barriers={barriers} />
          </Card>
        </div>

        <div className="col-span-3">
          <Card className="h-full p-5 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4" />
              Key Findings
            </h3>
            <div className="space-y-3">
              {findings.map((finding, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-sm text-gray-700 flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>{finding}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-purple-200" />
    </div>
  );
};

const KeyBarriers = ({ barriers }) => {
  const [expandedBarrier, setExpandedBarrier] = useState(null);

  const toggleBarrier = (key) => {
    setExpandedBarrier(expandedBarrier === key ? null : key);
  };

  return (
    <div className="space-y-4">
      {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => (
        <div key={groupIdx} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <button
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            onClick={() => toggleBarrier(key)}
          >
            <div className="flex items-center gap-2">
              {key === 'physician' && <Stethoscope className="w-4 h-4 text-red-600" />}
              {key === 'system' && <Building2 className="w-4 h-4 text-blue-600" />}
              {key === 'patient' && <User className="w-4 h-4 text-green-600" />}
              <h4 className="text-sm font-semibold capitalize">{key}</h4>
            </div>
            <div className="transform transition-transform duration-200">
              {expandedBarrier === key ? (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </div>
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            expandedBarrier === key ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="p-4 border-t border-gray-200">
              <ul className="space-y-3">
                {barrierGroup.map((barrier, idx) => (
                  <li key={idx} className="text-sm">
                    <div className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <span className="text-gray-800 font-medium">{barrier.description}</span>
                        {barrier.subpoints && (
                          <ul className="ml-4 space-y-1">
                            {barrier.subpoints.map((subpoint, subIdx) => (
                              <li key={subIdx} className="text-gray-600 flex items-center gap-2 before:content-['•'] before:text-purple-400">
                                <span className="text-xs leading-relaxed">{subpoint}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JourneyStage;