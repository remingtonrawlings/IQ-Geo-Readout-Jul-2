import React, { useState } from 'react';
import { TrendingUp, Target, Users, Settings, ChevronDown, ChevronUp, BarChart3 } from 'lucide-react';

const InsightMap: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    metrics: false,
    trends: false,
    analysis: false,
    gaps: false
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
    
    const getColorClasses = (color: string) => {
      const colors = {
        blue: 'bg-blue-50 border-blue-200',
        green: 'bg-green-50 border-green-200',
        purple: 'bg-purple-50 border-purple-200',
        orange: 'bg-orange-50 border-orange-200'
      };
      return colors[color as keyof typeof colors];
    };

    const getIconColor = (color: string) => {
      const colors = {
        blue: 'text-blue-500',
        green: 'text-green-500',
        purple: 'text-purple-500',
        orange: 'text-orange-500'
      };
      return colors[color as keyof typeof colors];
    };
    
    return (
      <div className={`p-6 rounded-lg border ${getColorClasses(color)}`}>
        <button
          onClick={() => toggleSection(id)}
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
          <div className="mt-6 space-y-4">
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
          Analysis & Insights: Connecting the Dots
        </h1>
        
        <div className="grid gap-6">
          <CollapsibleSection
            id="metrics"
            title="Performance Metrics Analysis"
            icon={BarChart3}
            color="blue"
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Key Performance Indicators</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">[X]%</div>
                    <div className="text-sm text-gray-600">Metric 1</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">[X]%</div>
                    <div className="text-sm text-gray-600">Metric 2</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">[X]%</div>
                    <div className="text-sm text-gray-600">Metric 3</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-2xl font-bold text-red-600 mb-1">[X]%</div>
                    <div className="text-sm text-gray-600">Metric 4</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h4 className="font-medium text-gray-900 mb-4">Performance Trends</h4>
                <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
                    <span className="text-gray-500">Chart Placeholder - Performance Over Time</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            id="trends"
            title="Trend Analysis"
            icon={TrendingUp}
            color="green"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Identified Trends</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-800 mb-2">Positive Trends</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• [Positive trend 1 placeholder]</li>
                      <li>• [Positive trend 2 placeholder]</li>
                      <li>• [Positive trend 3 placeholder]</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h5 className="font-medium text-red-800 mb-2">Concerning Trends</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• [Concerning trend 1 placeholder]</li>
                      <li>• [Concerning trend 2 placeholder]</li>
                      <li>• [Concerning trend 3 placeholder]</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h4 className="font-medium text-gray-900 mb-4">Historical Data Comparison</h4>
                <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
                    <span className="text-gray-500">Chart Placeholder - Historical Comparison</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            id="analysis"
            title="Root Cause Analysis"
            icon={Target}
            color="purple"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Primary Root Causes</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h5 className="font-medium text-purple-800 mb-2">Root Cause 1</h5>
                    <p className="text-gray-700 text-sm mb-2">[Description of root cause and its impact]</p>
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">Contributing factors:</span> [Factor 1], [Factor 2], [Factor 3]
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h5 className="font-medium text-purple-800 mb-2">Root Cause 2</h5>
                    <p className="text-gray-700 text-sm mb-2">[Description of root cause and its impact]</p>
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">Contributing factors:</span> [Factor 1], [Factor 2], [Factor 3]
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h5 className="font-medium text-purple-800 mb-2">Root Cause 3</h5>
                    <p className="text-gray-700 text-sm mb-2">[Description of root cause and its impact]</p>
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">Contributing factors:</span> [Factor 1], [Factor 2], [Factor 3]
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h4 className="font-medium text-gray-900 mb-4">Impact Assessment</h4>
                <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
                    <span className="text-gray-500">Chart Placeholder - Root Cause Impact Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            id="gaps"
            title="Gap Analysis"
            icon={Settings}
            color="orange"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Identified Gaps</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Current State</h5>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-lg border border-orange-200">
                        <span className="text-gray-700">[Current capability/process 1]</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-200">
                        <span className="text-gray-700">[Current capability/process 2]</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-200">
                        <span className="text-gray-700">[Current capability/process 3]</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Desired State</h5>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-lg border border-orange-200">
                        <span className="text-gray-700">[Target capability/process 1]</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-200">
                        <span className="text-gray-700">[Target capability/process 2]</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-orange-200">
                        <span className="text-gray-700">[Target capability/process 3]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h4 className="font-medium text-gray-900 mb-4">Gap Priority Matrix</h4>
                <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <BarChart3 className="mx-auto text-gray-400 mb-2" size={48} />
                    <span className="text-gray-500">Chart Placeholder - Gap Priority Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
};

export default InsightMap;