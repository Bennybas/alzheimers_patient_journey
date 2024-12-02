import React from 'react';
import JourneyStage from '../JourneyStage/JourneyStage';
import EconomicImpact from '../EconomicImpact/EconomicImpact';
import { journeyData } from '../../data/journeyData';
import { ArrowLeft } from 'lucide-react';
import {  Pill } from 'lucide-react'
import { useState } from 'react';

const AlzheimersJourneyFlow = () => {
  
  const [isLoading, setIsLoading] = useState(false);  
  const handleBackClick = () => {
    setIsLoading(true);
    window.location.href = 'https://chryselys-pj-landing.onrender.com';
  }
  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="flex items-center mb-4">
      <button 
          onClick={handleBackClick} 
          className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center"
          aria-label="Go back"
        >
          <ArrowLeft className="text-gray-700 w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold ml-4">Alzheimer's Disease Patient Journey</h1>
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
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 flex items-center justify-center z-50">
          <div className="text-white text-3xl flex items-center space-x-4">
            <Pill className="animate-spin w-12 h-12" /> {/* Use the rotating Pill icon */}
            <span>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlzheimersJourneyFlow;
