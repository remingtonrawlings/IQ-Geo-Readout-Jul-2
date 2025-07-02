import React from 'react';
import { Users, Clock, Target, Database, Workflow, BarChart3, Shield, AlertTriangle, Search } from 'lucide-react';
import { readoutData } from '../../../data/iqgeoReadoutData';

const Methodology: React.FC = () => {
  const getAssessmentIcon = (area: string) => {
    if (area.includes('Data')) return Database;
    if (area.includes('User')) return Users;
    if (area.includes('Reporting')) return BarChart3;
    if (area.includes('Efficiency')) return Workflow;
    if (area.includes('Manual')) return AlertTriangle;
    if (area.includes('Risk')) return Shield;
    return Search;
  };

  return (
    <section id="methodology" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Methodology: Our Approach
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white rounded-lg border border-gray-300 shadow-sm">
            <Users className="mx-auto text-gray-600 mb-4" size={48} />
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {readoutData.methodology.interviewCount}
            </div>
            <div className="text-sm text-gray-600">Stakeholder Interviews</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg border border-gray-300 shadow-sm">
            <Clock className="mx-auto text-gray-600 mb-4" size={48} />
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {readoutData.methodology.duration}
            </div>
            <div className="text-sm text-gray-600">Total Duration</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg border border-gray-300 shadow-sm">
            <Target className="mx-auto text-gray-600 mb-4" size={48} />
            <div className="text-3xl font-bold text-gray-800 mb-2">
              6
            </div>
            <div className="text-sm text-gray-600">Assessment Areas</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            {readoutData.methodology.process}
          </p>
        </div>

        {/* GTM Assessment Framework */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Go-to-Market Assessment Framework
          </h2>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <div className="flex items-start space-x-4">
              <Target className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  Assessment Philosophy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {readoutData.methodology.gtmAssessmentFramework.philosophy}
                </p>
              </div>
            </div>
          </div>

          {/* Fixed Assessment Areas Layout - No Lines */}
          <div className="mb-8 bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Six Interconnected Assessment Areas
            </h3>
            
            <div className="relative">
              {/* Central hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Target className="text-white" size={28} />
                </div>
              </div>

              {/* Assessment area nodes in a circle - Fixed positions, no connecting lines */}
              <div className="relative w-full h-96">
                {readoutData.methodology.gtmAssessmentFramework.coreAssessmentAreas.map((area, index) => {
                  const IconComponent = getAssessmentIcon(area.area);
                  const angle = (index * 60) * (Math.PI / 180); // 60 degrees apart
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-32 h-32 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`
                      }}
                    >
                      <div className="w-full h-full bg-white rounded-lg border-2 border-blue-300 shadow-lg flex flex-col items-center justify-center p-3 hover:border-blue-500 transition-colors duration-300 hover:shadow-xl">
                        <IconComponent className="text-blue-600 mb-2" size={24} />
                        <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                          {area.area}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detailed Assessment Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {readoutData.methodology.gtmAssessmentFramework.coreAssessmentAreas.map((area, index) => {
              const IconComponent = getAssessmentIcon(area.area);
              
              return (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <IconComponent className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{area.area}</h4>
                      <p className="text-gray-700 text-sm mb-3">{area.description}</p>
                      <div className="space-y-1">
                        {area.keyQuestions.map((question, qIndex) => (
                          <div key={qIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-xs text-gray-600">{question}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <Workflow className="text-orange-500 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">Interconnected Analysis</h3>
                <p className="text-gray-700">
                  {readoutData.methodology.gtmAssessmentFramework.interconnectedNature}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Interview Groups & Participants
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {readoutData.methodology.interviewGroups.map((group) => (
              <div key={group.groupLetter} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {group.groupLetter}
                  </div>
                  <h4 className="font-semibold text-gray-900">{group.title}</h4>
                </div>
                <div className="space-y-1">
                  {group.participants.map((participant, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">{participant}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;