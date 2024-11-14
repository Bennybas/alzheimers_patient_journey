
import React from 'react';
import { Card } from '../ui/card';

const EconomicImpact = () => (
  <Card className="mt-12 p-6 bg-purple-50">
    <h3 className="font-bold mb-4">Economic Impact & Future Projections</h3>
    <div className="grid grid-cols-3 gap-4">
      {[
        { value: "33%", label: "Potential Cost Reduction with Early Diagnosis" },
        { value: "44%", label: "Out-of-Pocket Payments Reduction" },
        { value: "$360 billion", label: "National Care Cost" },
        { value: "$346.6 billion", label: "Caregiving Valuation" },
        { value: "$7 trillion", label: "Projected Cost Savings from Early Diagnosis" },
        { value: "13.8 million", label: "Projected AD Cases by 2050" }
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg">
          <div className="text-xl font-bold text-purple-600">{item.value}</div>
          <div className="text-sm text-gray-600">{item.label}</div>
        </div>
      ))}
    </div>
  </Card>
);

export default EconomicImpact;