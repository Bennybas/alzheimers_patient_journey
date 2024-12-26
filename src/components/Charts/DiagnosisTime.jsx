import React from 'react';
import { Clock, Activity, Stethoscope, UserCog, FlaskRound } from 'lucide-react';

const DiagnosisTimeline = () => {
  return (
    <div className="w-full mx-auto bg-slate-50 p-4 rounded-lg shadow-md">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Diagnosis Journey Timeline</h2>
        <div className="mt-1 text-sm text-slate-600">Total Duration: 5.5 Years</div>
      </div>

      {/* Main Timeline */}
      <div className="relative -mt-8">
        {/* Timeline Bar */}
        <div className="absolute left-0 right-0 h-2 top-16 bg-slate-200 rounded-full">
          <div className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full opacity-80"></div>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-4 gap-2">
          {/* Early Symptoms */}
          <div className="relative pt-20">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-blue-700 mb-1">Early Symptoms</h3>
              <div className="text-lg font-semibold text-slate-800 mb-1">3.4 Years</div>
              <p className="text-xs text-slate-600">Initial symptoms often confused with normal aging signs</p>
              <div className="mt-2 flex items-center">
                <Activity className="w-4 h-4 text-blue-500 mr-1" />
                <span className="text-xs text-slate-500">62% of total journey</span>
              </div>
            </div>
          </div>

          {/* GP Assessment */}
          <div className="relative pt-20">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-purple-700 mb-1">GP Assessment</h3>
              <div className="text-lg font-semibold text-slate-800 mb-1">7.5 Months</div>
              <p className="text-xs text-slate-600">Regular medical evaluations and check-ups</p>
              <div className="mt-2 flex items-center">
                <Activity className="w-4 h-4 text-purple-500 mr-1" />
                <span className="text-xs text-slate-500">23% of total journey</span>
              </div>
            </div>
          </div>

          {/* Specialist Care */}
          <div className="relative pt-20">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-md">
              <UserCog className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-indigo-700 mb-1">Specialist Care</h3>
              <div className="text-lg font-semibold text-slate-800 mb-1">2.8 Months</div>
              <p className="text-xs text-slate-600">Specialized consultation and evaluation</p>
              <div className="mt-2 flex items-center">
                <Activity className="w-4 h-4 text-indigo-500 mr-1" />
                <span className="text-xs text-slate-500">15% of total journey</span>
              </div>
            </div>
          </div>

          {/* Diagnostic Tests */}
          <div className="relative pt-20">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-md">
              <FlaskRound className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-pink-700 mb-1">Diagnostic Tests</h3>
              <div className="space-y-1">
                <div className="bg-pink-50 p-2 rounded">
                  <div className="text-xs text-pink-700 mb-1">MRI Score</div>
                  <div className="text-sm font-bold text-pink-900">4.3</div>
                </div>
                <div className="bg-pink-50 p-2 rounded">
                  <div className="text-xs text-pink-700 mb-1">CERAD Score</div>
                  <div className="text-sm font-bold text-pink-900">6.5</div>
                </div>
                <div className="bg-pink-50 p-2 rounded">
                  <div className="text-xs text-pink-700 mb-1">LP Score</div>
                  <div className="text-sm font-bold text-pink-900">8.3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisTimeline;
