import React, { useState } from 'react';
import { Settings, Workflow, Database, DollarSign, ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Target, Wrench, BarChart3 } from 'lucide-react';

const KeyFindings: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    tech: false,
    process: false,
    data: false,
    strategy: false,
    charts: false,
    major1: false,
    major2: false,
    major3: false,
    major4: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const recommendations = [
    {
      id: 'tech',
      category: 'Technology & Integration',
      icon: Settings,
      color: 'blue',
      actions: [
        '[Technology recommendation 1 - e.g., System integration improvements]',
        '[Technology recommendation 2 - e.g., Tool optimization and configuration]',
        '[Technology recommendation 3 - e.g., Automation implementation]'
      ]
    },
    {
      id: 'process',
      category: 'Process Optimization',
      icon: Workflow,
      color: 'green',
      actions: [
        '[Process recommendation 1 - e.g., Workflow standardization]',
        '[Process recommendation 2 - e.g., Quality control implementation]',
        '[Process recommendation 3 - e.g., Handoff procedure improvement]'
      ]
    },
    {
      id: 'data',
      category: 'Data & Analytics',
      icon: Database,
      color: 'purple',
      actions: [
        '[Data recommendation 1 - e.g., Data quality improvement]',
        '[Data recommendation 2 - e.g., Reporting framework enhancement]',
        '[Data recommendation 3 - e.g., Analytics capability development]'
      ]
    },
    {
      id: 'strategy',
      category: 'Strategy & Organization',
      icon: DollarSign,
      color: 'orange',
      actions: [
        '[Strategic recommendation 1 - e.g., Organizational structure optimization]',
        '[Strategic recommendation 2 - e.g., Resource allocation improvement]'
      ]
    }
  ];

  const majorRecommendations = [
    {
      id: 'major1',
      title: '1. [Major Recommendation Title 1]',
      icon: AlertTriangle,
      color: 'red',
      priority: 'Critical',
      timeline: '[X] days',
      details: [
        '[Specific action item 1 for this major recommendation]',
        '[Specific action item 2 for this major recommendation]',
        '[Specific action item 3 for this major recommendation]',
        '[Specific action item 4 for this major recommendation]'
      ]
    },
    {
      id: 'major2',
      title: '2. [Major Recommendation Title 2]',
      icon: Target,
      color: 'blue',
      priority: 'High',
      timeline: '[X] days',
      details: [
        '[Specific action item 1 for this major recommendation]',
        '[Specific action item 2 for this major recommendation]',
        '[Specific action item 3 for this major recommendation]',
        '[Specific action item 4 for this major recommendation]'
      ]
    },
    {
      id: 'major3',
      title: '3. [Major Recommendation Title 3]',
      icon: Workflow,
      color: 'green',
      priority: 'High',
      timeline: '[X] days',
      details: [
        '[Specific action item 1 for this major recommendation]',
        '[Specific action item 2 for this major recommendation]',
        '[Specific action item 3 for this major recommendation]',
        '[Specific action item 4 for this major recommendation]'
      ]
    },
    {
      id: 'major4',
      title: '4. [Major Recommendation Title 4]',
      icon: Database,
      color: 'purple',
      priority: 'Medium',
      timeline: '[X] days',
      details: [
        '[Specific action item 1 for this major recommendation]',
        '[Specific action item 2 for this major recommendation]',
        '[Specific action item 3 for this major recommendation]',
        '[Specific action item 4 for this major recommendation]'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200',
      green: 'bg-green-50 border-green-200',
      purple: 'bg-purple-50 border-purple-200',
      orange: 'bg-orange-50 border-orange-200',
      red: 'bg-red-50 border-red-200'
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      purple: 'text-purple-500',
      orange: 'text-orange-500',
      red: 'text-red-500'
    };
    return colors[color as keyof typeof colors];
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      Critical: 'bg-red-100 text-red-800',
      High: 'bg-orange-100 text-orange-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      Low: 'bg-green-100 text-green-800'
    };
    return colors[priority as keyof typeof colors];
  };

  const CollapsibleSection = ({ 
    section, 
    isExpanded, 
    onToggle, 
    icon: Icon, 
    title, 
    color, 
    children 
  }: {
    section: string;
    isExpanded: boolean;
    onToggle: () => void;
    icon: React.ElementType;
    title: string;
    color: string;
    children: React.ReactNode;
  }) => (
    <div className={`p-6 rounded-lg border ${getColorClasses(color)}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center space-x-3">
          <Icon className={`${getIconColor(color)}`} size={24} />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        {isExpanded ? 
          <ChevronUp className="text-gray-500" size={20} /> : 
          <ChevronDown className="text-gray-500" size={20} />
        }
      </button>
      
      {isExpanded && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );

  const MajorRecommendationSection = ({ 
    recommendation 
  }: {
    recommendation: typeof majorRecommendations[0];
  }) => {
    const Icon = recommendation.icon;
    const isExpanded = expandedSections[recommendation.id];
    
    return (
      <div className={`p-6 rounded-lg border ${getColorClasses(recommendation.color)}`}>
        <button
          onClick={() => toggleSection(recommendation.id)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-start space-x-4">
            <Icon className={`${getIconColor(recommendation.color)} mt-1`} size={24} />
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{recommendation.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(recommendation.priority)}`}>
                  {recommendation.priority}
                </span>
                <span className="text-sm text-gray-500">({recommendation.timeline})</span>
              </div>
            </div>
          </div>
          {isExpanded ? 
            <ChevronUp className="text-gray-500" size={20} /> : 
            <ChevronDown className="text-gray-500" size={20} />
          }
        </button>
        
        {isExpanded && (
          <div className="mt-6 space-y-4">
            <div className="grid gap-3">
              {recommendation.details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-200">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Key Findings & Recommendations: Actionable Plan for Change
        </h1>
        
        {/* Major Recommendations Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Major Recommendations</h2>
          <p className="text-gray-700 mb-8">
            Four critical focus areas that require immediate attention to address systemic issues and enable sustainable growth.
          </p>
          
          <div className="grid gap-6">
            {majorRecommendations.map((recommendation) => (
              <MajorRecommendationSection 
                key={recommendation.id}
                recommendation={recommendation}
              />
            ))}
          </div>
        </div>

        {/* Charts Section */}
        <CollapsibleSection
          section="charts"
          isExpanded={expandedSections.charts}
          onToggle={() => toggleSection('charts')}
          icon={BarChart3}
          title="Impact Projections & ROI Analysis"
          color="blue"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Projected Impact Over Time</h4>
              <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
                  <span className="text-gray-500">Chart Placeholder - Impact Projections</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Investment vs Expected ROI</h4>
              <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
                  <span className="text-gray-500">Chart Placeholder - ROI Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>
        
        {/* Additional Recommendations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Tactical Recommendations</h2>
          <div className="grid gap-6">
            {recommendations.map((recommendation) => {
              const Icon = recommendation.icon;
              const isExpanded = expandedSections[recommendation.id];
              
              return (
                <CollapsibleSection
                  key={recommendation.id}
                  section={recommendation.id}
                  isExpanded={isExpanded}
                  onToggle={() => toggleSection(recommendation.id)}
                  icon={Icon}
                  title={recommendation.category}
                  color={recommendation.color}
                >
                  <div className="space-y-3">
                    {recommendation.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-start space-x-3">
                        <Wrench className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-medium">Action:</span> {action}
                        </p>
                      </div>
                    ))}
                  </div>
                </CollapsibleSection>
              );
            })}
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-3">Implementation Priority Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-lg font-bold text-red-600 mb-1">Critical ([X] days)</div>
              <div className="text-sm text-gray-600">[Priority category 1]</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-lg font-bold text-orange-600 mb-1">High ([X] days)</div>
              <div className="text-sm text-gray-600">[Priority category 2]</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-lg font-bold text-yellow-600 mb-1">Medium ([X] days)</div>
              <div className="text-sm text-gray-600">[Priority category 3]</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-lg font-bold text-green-600 mb-1">Ongoing</div>
              <div className="text-sm text-gray-600">[Priority category 4]</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Success Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">[X]-Day Milestones</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• [Short-term milestone 1]</li>
                <li>• [Short-term milestone 2]</li>
                <li>• [Short-term milestone 3]</li>
                <li>• [Short-term milestone 4]</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">[X]-Day Outcomes</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• [X]% improvement in [metric 1]</li>
                <li>• [X]% reduction in [metric 2]</li>
                <li>• [X]% increase in [metric 3]</li>
                <li>• [X]% achievement rate for [metric 4]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFindings;