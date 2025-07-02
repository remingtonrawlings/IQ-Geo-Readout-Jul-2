import React, { useState, useEffect } from 'react';
import { Users, Search, MessageSquare, ChevronDown, ChevronUp, BarChart3 } from 'lucide-react';

const CurrentStateAssessment: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    stakeholder: false,
    analysis: false,
    interviews: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const CollapsibleSection = ({ 
    id, 
    title, 
    icon: Icon, 
    color, 
    children 
  }: {
    id: string;
    title: string;
    icon: React.ElementType;
    color: string;
    children: React.ReactNode;
  }) => {
    const isExpanded = expandedSections[id];
    
    return (
      <div className={`bg-${color}-50 p-6 rounded-lg border border-${color}-200`}>
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-start space-x-3">
            <Icon className={`text-${color}-500 mt-1`} size={24} />
            <h3 className={`text-xl font-semibold text-${color}-800`}>{title}</h3>
          </div>
          {isExpanded ? 
            <ChevronUp className={`text-${color}-500`} size={20} /> : 
            <ChevronDown className={`text-${color}-500`} size={20} />
          }
        </button>
        
        {isExpanded && (
          <div className="mt-4 space-y-4">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Current State Assessment: Where We Are Today
        </h1>
        
        <div className="grid gap-6">
          <CollapsibleSection
            id="stakeholder"
            title="Stakeholder Analysis"
            icon={Users}
            color="blue"
          >
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Key Stakeholders Interviewed:</h4>
              <p className="text-gray-700 mb-4">
                [Placeholder: List of stakeholders and their roles - e.g., Sales Leadership, Account Executives, Sales Development Reps, Operations Team, etc.]
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Primary Themes Identified:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>[Theme 1: Process inefficiencies and bottlenecks]</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>[Theme 2: Technology and tool utilization gaps]</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>[Theme 3: Resource allocation and capacity issues]</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h4 className="font-medium text-gray-900 mb-4">Performance Metrics Overview</h4>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
                  <span className="text-gray-500">Chart Placeholder - Current Performance Data</span>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            id="analysis"
            title="Analysis Framework"
            icon={Search}
            color="purple"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Methodology Applied:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>[Analysis method 1 - e.g., Process mapping and workflow analysis]</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>[Analysis method 2 - e.g., Performance benchmarking and gap analysis]</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>[Analysis method 3 - e.g., Technology stack assessment]</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h4 className="font-medium text-gray-900 mb-4">Key Areas of Focus</h4>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
                    <span className="text-gray-500">Chart Placeholder - Analysis Results</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            id="interviews"
            title="Key Insights & Feedback"
            icon={MessageSquare}
            color="red"
          >
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Main Challenges Identified:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-800 mb-2">Process Issues</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• [Challenge 1 placeholder]</li>
                      <li>• [Challenge 2 placeholder]</li>
                      <li>• [Challenge 3 placeholder]</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-800 mb-2">Technology Gaps</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• [Technology issue 1 placeholder]</li>
                      <li>• [Technology issue 2 placeholder]</li>
                      <li>• [Technology issue 3 placeholder]</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-800 mb-2">Resource Constraints</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• [Resource issue 1 placeholder]</li>
                      <li>• [Resource issue 2 placeholder]</li>
                      <li>• [Resource issue 3 placeholder]</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-800 mb-2">Training & Development</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• [Training need 1 placeholder]</li>
                      <li>• [Training need 2 placeholder]</li>
                      <li>• [Training need 3 placeholder]</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Key Stakeholder Quotes:</h4>
              <div className="space-y-3 mb-6">
                <blockquote className="bg-white p-4 border-l-4 border-red-500 italic text-gray-700">
                  "[Placeholder quote 1 from stakeholder interview highlighting key issue or concern]"
                  <cite className="block text-sm text-gray-500 mt-2">- [Role/Title]</cite>
                </blockquote>
                <blockquote className="bg-white p-4 border-l-4 border-red-500 italic text-gray-700">
                  "[Placeholder quote 2 from stakeholder interview highlighting key issue or concern]"
                  <cite className="block text-sm text-gray-500 mt-2">- [Role/Title]</cite>
                </blockquote>
                <blockquote className="bg-white p-4 border-l-4 border-red-500 italic text-gray-700">
                  "[Placeholder quote 3 from stakeholder interview highlighting key issue or concern]"
                  <cite className="block text-sm text-gray-500 mt-2">- [Role/Title]</cite>
                </blockquote>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-red-200">
              <h4 className="font-medium text-gray-900 mb-4">Feedback Analysis Summary</h4>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
                  <span className="text-gray-500">Chart Placeholder - Sentiment/Feedback Analysis</span>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
};

export default CurrentStateAssessment;