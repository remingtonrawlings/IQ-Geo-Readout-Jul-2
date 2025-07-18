import React from 'react';
import { Play, Users, Target, CheckCircle } from 'lucide-react';
import { readoutData } from '../../../data/iqgeoReadoutData';

const iconMap = [Play, Users, Target];

const NextSteps: React.FC = () => {
  return (
    <section id="next-steps" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Next Steps: The Path Forward
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            The success of this initiative depends on your team's course of determined action. The following steps 
            must be executed in sequence to maintain momentum and ensure project success.
          </p>
        </div>

        <div className="space-y-6">
          {readoutData.nextSteps.map((step, index) => {
            const IconComponent = iconMap[index];
            
            return (
              <div key={step.step} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-orange-50 p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h2>
                      <p className="text-sm font-medium text-orange-600 mt-1">
                        {step.timeline}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Action Required</h3>
                    <p className="text-gray-700">
                      {step.action}
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <h4 className="font-medium text-green-800 mb-1">Expected Outcome</h4>
                        <p className="text-gray-700 text-sm">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NextSteps;