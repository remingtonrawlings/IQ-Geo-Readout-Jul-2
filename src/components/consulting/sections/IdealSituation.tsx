import React from 'react';
import { Target, CheckCircle, Lightbulb, Database, Settings, DollarSign, BarChart3 } from 'lucide-react';
import { readoutData } from '../../../data/iqgeoReadoutData';

const IdealSituation: React.FC = () => {
  const getComponentIcon = (componentName: string) => {
    if (componentName.includes('CRM')) return Database;
    if (componentName.includes('Marketing')) return BarChart3;
    if (componentName.includes('Configure')) return Settings;
    if (componentName.includes('Financial')) return DollarSign;
    return Target;
  };

  return (
    <section id="ideal-situation" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Ideal Situation: The Strategic Solution
        </h1>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <div className="flex items-start space-x-4">
            <Lightbulb className="text-gray-600 mt-1" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Strategic Philosophy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {readoutData.idealSituation.philosophy}
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Solution Architecture */}
        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="text-green-600" size={28} />
            <h2 className="text-2xl font-semibold text-green-800">
              {readoutData.idealSituation.recommendedSolution.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {readoutData.idealSituation.recommendedSolution.components.map((component, index) => {
              const IconComponent = getComponentIcon(component.name);
              
              return (
                <div key={index} className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <IconComponent className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {component.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Purpose:</span> {component.purpose}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Justification:</span> {component.justification}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="text-gray-600" size={24} />
            <h2 className="text-2xl font-semibold text-gray-900">
              Critical Gaps to Close
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {readoutData.idealSituation.identifiedGapsToClose.map((gap, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-300 shadow-sm">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="font-medium text-gray-800">{gap}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <Target className="text-green-600 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Strategic Advantage</h3>
              <p className="text-gray-700">
                This best-of-breed architecture solves the 95% consensus financial operations crisis while 
                preserving HubSpot's proven marketing excellence. By implementing Salesforce Sales Cloud Enterprise 
                with native multi-currency support and Salesforce CPQ, we eliminate the Excel dependency epidemic 
                and provide the enterprise-grade foundation required for sustainable growth and KKR compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealSituation;