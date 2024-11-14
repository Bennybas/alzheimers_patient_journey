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
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const handleActionHover = (actionName) => {
    setHoveredAction(actionName);
  };

  const handleActionLeave = () => {
    setHoveredAction(null);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleInsights = () => {
    setShowInsights(!showInsights);
  };

  // Dynamic insights based on stage
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
          {  mmse: "22/30", moca: "22/30", stage: "Moderate cognitive decline, noticeable issues with memory and daily tasks" },
          {  mmse: "18/30", moca: "18/30", stage: "Moderate dementia, increasing difficulties with communication, orientation" },
          {  mmse: "Below 18", moca: "Below 18", stage: "Severe cognitive decline, advanced stages of dementia, major difficulties in daily life" }
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
    
    switch (stage.number) {
      case 1:
        return (
          <strong>Average Time to Diagnosis
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Time to Diagnosis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {insightsData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.stage}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </strong>
        );
      case 2:
        return (
          <strong>Cognitive Decline Metrics
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MMSE Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MoCA Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage of Cognitive Decline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {insightsData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                 
                  <td className="px-6 py-4 text-sm text-gray-900">{item.mmse}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.moca}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </strong>
        );
      case 3:
        return (
          <strong>ARIA (Amyloid-Related Imaging Abnormalities) in lecanemab
          <table className="w-full"> 
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspect</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantitative Insights</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {insightsData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.aspect}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.insight}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </strong>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full">
      <Card className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 p-6 mb-6 shadow-lg rounded-lg border border-purple-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-md">
              <span className="text-2xl font-bold text-white">{stage.number}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-purple-900">{stage.title}</h2>
              <p className="text-sm text-purple-700">{stage.timeframe}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={toggleInsights}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Insights
              {showInsights ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <p className="text-gray-700 mb-6">{stage.description}</p>

        {/* Action items with hover effect */}
        <div className="flex items-center gap-4 mb-6">
          {stage.actions.map((action, idx) => (
            <React.Fragment key={idx}>
              <div
                className="flex-1 bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg cursor-pointer"
                onMouseEnter={() => handleActionHover(action.name)}
                onMouseLeave={handleActionLeave}
              >
                <div className="text-sm font-medium text-purple-900">{action.name}</div>
              </div>
              {idx < stage.actions.length - 1 && (
                <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Insights Table */}
        {showInsights && (
          <div className="mt-4 bg-white rounded-lg shadow-md overflow-hidden">
            {renderInsightsTable()}
          </div>
        )}

        {/* Hover content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            hoveredAction ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {hoveredAction && (
            <div className="bg-purple-50 p-4 rounded-lg shadow-inner mt-4">
              <h3 className="text-purple-800 font-semibold mb-2">
                {hoveredAction}
              </h3>
              <p className="text-gray-700 text-sm">
                {stage.actions.find(action => action.name === hoveredAction)?.content}
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Grid layout for metrics, barriers, and findings */}
      <div className="grid grid-cols-12 gap-6">
        {/* Key Metrics */}
        <div className="col-span-3">
          <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <LineChart className="w-4 h-4" />
              Key Metrics
            </h3>
            <div className="space-y-3">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-md">
                  <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Barriers */}
        <div className="col-span-6">
          <Card className="h-full p-5 bg-white shadow-lg rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-800">Key Barriers</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => (
                <div
                  key={groupIdx}
                  className={
                    key === 'physician' ? 'bg-red-50 p-3 rounded-lg shadow-md' :
                    key === 'system' ? 'bg-blue-50 p-3 rounded-lg shadow-md' :
                    'bg-green-50 p-3 rounded-lg shadow-md'
                  }
                >
                  <div className="flex items-center gap-2 mb-2">
                    {key === 'physician' && <Stethoscope className="w-4 h-4 text-red-600" />}
                    {key === 'system' && <Building2 className="w-4 h-4 text-blue-600" />}
                    {key === 'patient' && <User className="w-4 h-4 text-green-600" />}
                    <h4 className="text-sm font-semibold capitalize">{key}</h4>
                  </div>
                  <ul className="space-y-2">
                    {barrierGroup.map((barrier, idx) => (
                      <li key={idx} className="text-xs flex items-start gap-1">
                        <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span>{barrier.description}</span>
                          {barrier.subpoints && (
                            <ul className="mt-1 ml-4 text-gray-600 list-disc list-inside">
                              {barrier.subpoints.map((subpoint, subIdx) => (
                                <li key={subIdx} className="text-xs">{subpoint}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Findings */}
        <div className="col-span-3">
          <Card className="h-full p-5 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4" />
              Key Findings
            </h3>
            <div className="space-y-3">
              {findings.map((finding, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-md text-sm text-gray-700 flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>{finding}</span>
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

export default JourneyStage;