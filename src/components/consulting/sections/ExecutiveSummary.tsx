import React, { useState } from 'react';
import { Zap, BarChart2, Book, Database, Settings, DollarSign, Target, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, BarChart3, Users, Shield } from 'lucide-react';
import { readoutData } from '../../../data/iqgeoReadoutData';

const iconMap = {
  Zap,
  BarChart2,
  Book
};

const ExecutiveSummary: React.FC = () => {
  const [isArchitectureExpanded, setIsArchitectureExpanded] = useState(false);

  const toggleArchitecture = () => {
    setIsArchitectureExpanded(!isArchitectureExpanded);
  };

  return (
    <section id="executive-summary" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Executive Summary
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            {readoutData.executiveSummary.introduction}
          </p>
        </div>

        {/* Collapsible Architecture Section */}
        <div className="mb-8 bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200 rounded-lg overflow-hidden">
          <button
            onClick={toggleArchitecture}
            className="w-full p-6 text-left bg-blue-100 hover:bg-blue-150 transition-colors duration-200 border-b border-blue-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Database className="text-blue-600" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Recommended Architecture: HubSpot + Salesforce Integration
                </h2>
              </div>
              {isArchitectureExpanded ? 
                <ChevronUp className="text-blue-600" size={24} /> : 
                <ChevronDown className="text-blue-600" size={24} />
              }
            </div>
          </button>
          
          {isArchitectureExpanded && (
            <div className="p-8">
              <div className="max-w-6xl mx-auto">
                
                {/* Architecture Diagram */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  
                  {/* HubSpot Marketing Section */}
                  <div className="bg-white rounded-xl border-2 border-orange-300 shadow-lg overflow-hidden min-h-[500px]">
                    <div className="bg-orange-500 text-white p-6">
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="text-white" size={32} />
                        <div>
                          <h3 className="text-xl font-bold">HubSpot Marketing Hub</h3>
                          <p className="text-orange-100 text-sm">Marketing Excellence Preserved</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 space-y-6">
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <Users className="text-orange-600" size={20} />
                          <h4 className="font-semibold text-orange-800 text-base">Website & Content</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">Forms, Landing Pages, Blog, Content Management</p>
                      </div>
                      
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <Target className="text-orange-600" size={20} />
                          <h4 className="font-semibold text-orange-800 text-base">Lead Generation</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">Email Marketing, Social Media, Paid Advertising</p>
                      </div>
                      
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <BarChart2 className="text-orange-600" size={20} />
                          <h4 className="font-semibold text-orange-800 text-base">Lead Nurturing</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">Automated Workflows, Email Sequences, Scoring</p>
                      </div>
                      
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <BarChart3 className="text-orange-600" size={20} />
                          <h4 className="font-semibold text-orange-800 text-base">Analytics & Attribution</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">Marketing ROI, Campaign Performance, Attribution</p>
                      </div>
                    </div>
                  </div>

                  {/* Integration Flow */}
                  <div className="flex flex-col items-center justify-center lg:py-12">
                    <div className="bg-white rounded-lg border-2 border-blue-300 p-8 shadow-lg text-center mb-6 min-w-[200px]">
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <ArrowRight className="text-blue-500" size={28} />
                        <ArrowLeft className="text-blue-500" size={28} />
                      </div>
                      <h4 className="font-semibold text-blue-800 text-base mb-2">Bi-directional Sync</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Real-time data flow between systems</p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-300 rounded-lg p-6 text-center min-w-[200px]">
                      <Shield className="text-green-600 mx-auto mb-3" size={24} />
                      <h5 className="font-medium text-green-800 text-base mb-2">Lead Attribution</h5>
                      <p className="text-sm text-gray-600 leading-relaxed">Preserved & Enhanced Throughout Journey</p>
                    </div>
                  </div>

                  {/* Salesforce Sales Section */}
                  <div className="bg-white rounded-xl border-2 border-blue-300 shadow-lg overflow-hidden min-h-[500px]">
                    <div className="bg-blue-500 text-white p-6">
                      <div className="flex items-center space-x-3">
                        <Database className="text-white" size={32} />
                        <div>
                          <h3 className="text-xl font-bold">Salesforce Sales Cloud</h3>
                          <p className="text-blue-100 text-sm">Enterprise Sales Operations</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <Database className="text-blue-600" size={20} />
                          <h4 className="font-semibold text-blue-800 text-base">Deal Management</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">Multi-currency Support, Advanced Forecasting</p>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <Settings className="text-blue-600" size={20} />
                          <h4 className="font-semibold text-blue-800 text-base">CPQ & Pricing</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">Automated Quotes, Approval Workflows</p>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <DollarSign className="text-blue-600" size={20} />
                          <h4 className="font-semibold text-blue-800 text-base">Financial Reporting</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">KKR Compliance, Commission Automation</p>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <Users className="text-blue-600" size={20} />
                          <h4 className="font-semibold text-blue-800 text-base">Partner Management</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">Partner Portal, Channel Sales, Territory Mgmt</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits Summary */}
                <div className="bg-green-50 border border-green-300 rounded-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Best of Both Worlds Solution</h3>
                    <p className="text-base text-gray-600">Leveraging each platform's strengths while eliminating critical operational gaps</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-green-600 font-semibold mb-2 text-base">✓ Marketing ROI Preserved</div>
                      <p className="text-sm text-gray-600 leading-relaxed">HubSpot automation & attribution maintained with enhanced tracking</p>
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-green-600 font-semibold mb-2 text-base">✓ Enterprise Sales Enabled</div>
                      <p className="text-sm text-gray-600 leading-relaxed">Multi-currency reporting & advanced forecasting capabilities</p>
                    </div>
                    <div className="bg-white border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-green-600 font-semibold mb-2 text-base">✓ Financial Crisis Solved</div>
                      <p className="text-sm text-gray-600 leading-relaxed">Automated CPQ & KKR compliance reporting infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Strategic Recommendation Section */}
        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start space-x-4">
            <Target className="text-green-600 mt-1" size={28} />
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-3">
                {readoutData.executiveSummary.strategicRecommendation.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {readoutData.executiveSummary.strategicRecommendation.rationale}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {readoutData.executiveSummary.strategicRecommendation.coreTechnologyStack.map((component, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-1">{component.component}</h4>
                    <p className="text-sm font-medium text-green-700 mb-2">{component.solution}</p>
                    <p className="text-xs text-gray-600 mb-2">{component.rationale}</p>
                    <div className="flex flex-wrap gap-1">
                      {component.keyFeatures.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Critical Problems Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Critical Problems Requiring Resolution
          </h2>
          
          {readoutData.executiveSummary.criticalProblemsRequiringResolution.map((problem, index) => {
            const getColorClass = (consensus: number) => {
              if (consensus >= 90) return 'bg-red-50 border-red-200';
              if (consensus >= 80) return 'bg-orange-50 border-orange-200';
              return 'bg-yellow-50 border-yellow-200';
            };

            const getPercentColor = (consensus: number) => {
              if (consensus >= 90) return 'text-red-800 bg-red-100';
              if (consensus >= 80) return 'text-orange-800 bg-orange-100';
              return 'text-yellow-800 bg-yellow-100';
            };
            
            return (
              <div key={index} className={`p-6 rounded-lg border mb-4 ${getColorClass(problem.consensusPercent)}`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {problem.category}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPercentColor(problem.consensusPercent)}`}>
                    {problem.consensusPercent}% consensus
                  </span>
                </div>
                <ul className="space-y-2">
                  {problem.issues.map((issue, issueIndex) => (
                    <li key={issueIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{issue}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Three Strategic Points of Change
          </h2>
          
          {readoutData.executiveSummary.pointsOfChange.map((point, index) => {
            const IconComponent = iconMap[point.icon as keyof typeof iconMap];
            
            return (
              <div key={point.id} className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="text-gray-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {index + 1}. {point.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            High-Level Implementation Process
          </h3>
          <div className="flex items-center justify-between">
            {readoutData.executiveSummary.highLevelProcess.map((step, index) => (
              <React.Fragment key={step}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2 mx-auto">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{step}</p>
                </div>
                {index < readoutData.executiveSummary.highLevelProcess.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;