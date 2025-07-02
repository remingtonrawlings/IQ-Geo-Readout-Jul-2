import React from 'react';
import { MapPin, Target, Users, Zap } from 'lucide-react';
import { readoutData } from '../../../data/iqgeoReadoutData';

const iconMap = {
  0: Users,
  1: Target,
  2: MapPin,
  3: Zap
};

const ProjectApproach: React.FC = () => {
  // Sort phases so Phase 0 comes first
  const sortedPhases = [...readoutData.projectApproach].sort((a, b) => a.phase - b.phase);

  return (
    <section id="project-approach" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Project Approach: Strategic Implementation Framework
        </h1>
        
        <div className="space-y-8">
          {sortedPhases.map((phase, index) => {
            const IconComponent = iconMap[phase.phase as keyof typeof iconMap];
            const isPhaseZero = phase.phase === 0;
            
            return (
              <div key={phase.phase} className={`border rounded-lg overflow-hidden ${
                isPhaseZero ? 'border-red-300 bg-red-50' : 'border-gray-200'
              }`}>
                <div className={`p-6 border-b ${
                  isPhaseZero ? 'bg-red-100 border-red-200' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isPhaseZero ? 'bg-red-500 text-white' : 'bg-gray-600 text-white'
                    }`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <h2 className="text-xl font-bold text-gray-900">
                          Phase {phase.phase}: {phase.title}
                        </h2>
                        {isPhaseZero && (
                          <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                            PREREQUISITE
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mt-1">
                        {phase.objective}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Key Activities</h3>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{activity}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${
                    isPhaseZero ? 'bg-red-100 border border-red-200' : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <h4 className="font-medium text-gray-900 mb-2">Key Deliverable</h4>
                    <p className="text-gray-700 font-medium">{phase.keyDeliverable}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <Target className="text-orange-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-orange-800 mb-2">Critical Success Factor</h3>
              <p className="text-gray-700">
                <strong>Phase 0 is non-negotiable.</strong> Attempting to proceed without proper team assembly, 
                executive sponsorship, and resource allocation will result in project failure. Historical 
                evidence shows that 70% of CRM implementations fail due to inadequate change management 
                and leadership commitment, not technical issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectApproach;