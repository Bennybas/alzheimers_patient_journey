import React from 'react';
import JourneyStage from '../JourneyStage/JourneyStage';
import EconomicImpact from '../EconomicImpact/EconomicImpact';
import { journeyData } from '../../data/journeyData';

const AlzheimersJourneyFlow = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Alzheimer's Disease Patient Journey</h1>
        <p className="text-gray-600">Comprehensive analysis of diagnosis, treatment, and care pathway challenges</p>
      </div>

      <div className="space-y-12">
        {journeyData.map((stage, idx) => (
          <JourneyStage 
            key={idx}
            stage={stage}
            metrics={stage.metrics}
            barriers={stage.barriers}
            findings={stage.findings}
          />
        ))}
      </div>

      <EconomicImpact />
    </div>
  );
};

export default AlzheimersJourneyFlow;