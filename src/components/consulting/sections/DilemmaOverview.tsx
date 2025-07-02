import React from 'react';
import { Users, Heart, Brain, Zap, Shield, AlertTriangle, Target } from 'lucide-react';

const DilemmaOverview: React.FC = () => {
  return (
    <section id="dilemma-overview" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Dilemma Overview: The Human Element Behind Technical Decisions
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            While the strategic recommendation appears clear from a technical standpoint, the path forward is 
            complicated by deeply entrenched organizational perspectives. Understanding these competing philosophies 
            is critical to successful implementation, as each represents valid concerns and legitimate business interests.
          </p>
        </div>

        {/* Strategic Tension: Three Competing Perspectives */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            The Strategic Tension: Three Competing Perspectives
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Revenue Protection Advocate */}
            <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-orange-500 text-white p-3 rounded-full shadow-lg">
                  <Heart size={24} />
                </div>
              </div>
              
              <div className="pt-4 text-center">
                <h3 className="text-lg font-bold text-orange-800 mb-2">
                  Revenue Protection Advocate
                </h3>
                <p className="text-sm text-orange-700 mb-4 font-medium">
                  Marketing Excellence Leadership
                </p>
                
                <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <Brain className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                    <p className="text-sm text-gray-700 italic">
                      "You don't fix what's generating revenue. The marketing engine is a finely-tuned asset."
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="bg-white border border-orange-200 rounded-lg p-3">
                    <h4 className="font-semibold text-orange-800 text-sm mb-1">Key Concerns</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Attribution Risk</li>
                      <li>• Website Integration</li>
                      <li>• Workflow Disruption</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Excellence Advocate */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
                  <Shield size={24} />
                </div>
              </div>
              
              <div className="pt-4 text-center">
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                  Operational Excellence Advocate
                </h3>
                <p className="text-sm text-blue-700 mb-4 font-medium">
                  Sales Leadership & Finance
                </p>
                
                <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <Brain className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <p className="text-sm text-gray-700 italic">
                      "Growth without operational scalability is unsustainable and destroys enterprise value."
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="bg-white border border-blue-200 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Key Concerns</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Multi-Currency Crisis</li>
                      <li>• KKR Compliance</li>
                      <li>• Management Visibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Architect's Defense */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-purple-500 text-white p-3 rounded-full shadow-lg">
                  <AlertTriangle size={24} />
                </div>
              </div>
              
              <div className="pt-4 text-center">
                <h3 className="text-lg font-bold text-purple-800 mb-2">
                  Workflow Architect's Defense
                </h3>
                <p className="text-sm text-purple-700 mb-4 font-medium">
                  Digital Marketing & Implementation
                </p>
                
                <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <Brain className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <p className="text-sm text-gray-700 italic">
                      "Years of workflow optimization will be destroyed overnight."
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="bg-white border border-purple-200 rounded-lg p-3">
                    <h4 className="font-semibold text-purple-800 text-sm mb-1">Key Concerns</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Implementation Risk</li>
                      <li>• Knowledge Transfer</li>
                      <li>• Productivity Loss</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Central Tension Points */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Target className="text-red-600" size={24} />
              <h3 className="text-lg font-semibold text-red-800">Core Points of Tension</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white border border-red-200 rounded-lg p-3 text-center">
                <div className="text-red-600 font-semibold text-sm mb-1">Attribution Crisis</div>
                <p className="text-xs text-gray-600">Marketing ROI tracking</p>
              </div>
              <div className="bg-white border border-red-200 rounded-lg p-3 text-center">
                <div className="text-red-600 font-semibold text-sm mb-1">Multi-Currency Crisis</div>
                <p className="text-xs text-gray-600">Global operations reporting</p>
              </div>
              <div className="bg-white border border-red-200 rounded-lg p-3 text-center">
                <div className="text-red-600 font-semibold text-sm mb-1">Workflow Disruption</div>
                <p className="text-xs text-gray-600">Automation complexity</p>
              </div>
              <div className="bg-white border border-red-200 rounded-lg p-3 text-center">
                <div className="text-red-600 font-semibold text-sm mb-1">KKR Compliance</div>
                <p className="text-xs text-gray-600">Financial controls</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          
          {/* The HubSpot Champion Perspective */}
          <div className="border border-orange-200 rounded-lg overflow-hidden">
            <div className="bg-orange-50 p-6 border-b border-orange-200">
              <div className="flex items-center space-x-4 mb-4">
                <Heart className="text-orange-500" size={32} />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    The Revenue Protection Advocate
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Marketing & Demand Generation Leadership Perspective
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-100 border border-orange-200 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Brain className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Core Belief</h3>
                    <p className="text-gray-700 italic">
                      "You don't fix what's generating revenue. The marketing engine is a finely-tuned asset 
                      that should not be sacrificed for operational convenience."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="text-orange-600" size={20} />
                  <h3 className="font-semibold text-gray-900">Strategic Arguments</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Revenue Engine Protection:</strong> Current demand generation produces 85 active deals 
                      with minimal staff - this efficiency should be preserved at all costs.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Attribution Crisis Risk:</strong> Moving deals breaks the lead-to-revenue tracking 
                      that took years to perfect and currently demonstrates clear marketing ROI.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Integration Nightmare:</strong> Website built on HubSpot Marketing Hub with deep 
                      integrations would require complete rebuilding and create manual handoff points.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Training vs. Platform Issues:</strong> Most operational complaints stem from insufficient 
                      training rather than fundamental platform limitations.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="text-red-500" size={20} />
                  <h3 className="font-semibold text-gray-900">Emotional Drivers</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Professional identity and career investment tied to HubSpot expertise and proven results.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Historical trauma from previous "very messy" system integrations that created operational chaos.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Fear of expertise devaluation and loss of control over carefully optimized marketing workflows.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Salesforce Champion Perspective */}
          <div className="border border-blue-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-6 border-b border-blue-200">
              <div className="flex items-center space-x-4 mb-4">
                <Shield className="text-blue-500" size={32} />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    The Operational Excellence Advocate
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Sales Leadership & Finance Perspective
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-100 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Brain className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Core Belief</h3>
                    <p className="text-gray-700 italic">
                      "Growth without operational scalability is unsustainable. IQGeo's trajectory and investor 
                      expectations demand an enterprise-grade backbone that current tools cannot provide."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="text-blue-600" size={20} />
                  <h3 className="font-semibold text-gray-900">Strategic Arguments</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Multi-Currency Crisis:</strong> Regional managers cannot create unified dashboards 
                      across currencies - this is operationally crippling for global sales management.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>KKR Compliance Requirements:</strong> Private equity ownership demands audit-grade 
                      financial controls and sophisticated reporting that current architecture cannot provide.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Management Visibility Crisis:</strong> Sales leadership spends hours weekly on manual 
                      reporting and cannot effectively manage teams due to lack of real-time insights.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Partner Channel Imperative:</strong> Target of 30% revenue through partners requires 
                      enterprise-grade channel management functionality.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="text-red-500" size={20} />
                  <h3 className="font-semibold text-gray-900">Emotional Drivers</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Daily frustration from operational inefficiencies and unreliable data preventing effective leadership.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Intense pressure from investors and board for accurate forecasting and operational metrics.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Professional credibility at stake - inability to coach teams and deliver on commitments due to system limitations.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Marketing Skeptic Perspective */}
          <div className="border border-purple-200 rounded-lg overflow-hidden">
            <div className="bg-purple-50 p-6 border-b border-purple-200">
              <div className="flex items-center space-x-4 mb-4">
                <AlertTriangle className="text-purple-500" size={32} />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    The Workflow Architect's Defense
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Digital Marketing & HubSpot Implementation Expertise
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-100 border border-purple-200 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Brain className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Core Fear</h3>
                    <p className="text-gray-700 italic">
                      "Years of sophisticated workflow optimization will be destroyed overnight, and the complexity 
                      of rebuilding is vastly underestimated by those pushing for change."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="text-purple-600" size={20} />
                  <h3 className="font-semibold text-gray-900">Defensive Arguments</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Website Integration Nightmare:</strong> Entire website built on HubSpot with hundreds 
                      of forms and deep content integrations that cannot be easily recreated.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Workflow Sophistication:</strong> 15+ complex automation workflows handling nuanced 
                      lead nurturing that took years to perfect and optimize.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Attribution Tracking Destruction:</strong> Current attribution models demonstrate 
                      clear marketing ROI - severing this connection creates accountability gaps.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>Historical Trauma:</strong> Previous system transitions resulted in "very messy" 
                      operational disruption and lost functionality.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="text-red-500" size={20} />
                  <h3 className="font-semibold text-gray-900">Professional Concerns</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Career identity tied to HubSpot expertise - platform change could devalue professional skills and knowledge.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Fear of becoming internal support person for complex new platform without adequate expertise or training.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Concern about productivity loss during transition affecting team performance and marketing results.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <Users className="text-yellow-500 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">The Change Management Challenge</h3>
              <p className="text-gray-700 mb-4">
                Each perspective represents legitimate business concerns and personal stakes. Success requires 
                acknowledging all viewpoints as valid while building a solution that addresses core concerns 
                from each stakeholder group.
              </p>
              <p className="text-gray-700">
                <strong>The Path Forward:</strong> The recommended Salesforce-centric architecture with HubSpot 
                marketing preservation directly addresses these competing concerns by preserving marketing 
                excellence while solving operational crises. However, implementation success depends entirely 
                on change management that honors these human elements and builds confidence through transparency, 
                training, and demonstrated quick wins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DilemmaOverview;