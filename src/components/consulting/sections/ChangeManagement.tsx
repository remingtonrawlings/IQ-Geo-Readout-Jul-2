import React from 'react';
import { MessageSquare, TrendingUp, AlertTriangle, UserCheck, Briefcase, UsersIcon, Wrench } from 'lucide-react';
import { readoutData } from '../../../data/iqgeoReadoutData';

const iconMap = [MessageSquare, UsersIcon, UserCheck, TrendingUp];

const ChangeManagement: React.FC = () => {
  return (
    <section id="change-management" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Change Management: Ensuring Adoption & Success
        </h1>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm mb-8">
          <div className="flex items-start space-x-4">
            <MessageSquare className="text-gray-600 mt-1" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Guiding Philosophy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {readoutData.changeManagement.guidingPhilosophy}
              </p>
            </div>
          </div>
        </div>

        {/* Risks Section */}
        <div className="mb-12 bg-red-50 border border-red-200 rounded-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="text-red-500" size={28} />
            <h2 className="text-2xl font-semibold text-red-800">
              Critical Risk: Bandwidth & Skillset Limitations
            </h2>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              The ideal scenarios outlined in this blueprint cannot be easily reconciled without full-time, 
              dedicated support. The current team has limited bandwidth and specialized skillsets required 
              to execute enterprise-grade Salesforce implementation while maintaining business continuity.
            </p>
            
            {/* Mermaid Diagram - Risks of No Proper Team */}
            <div className="bg-white border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-center">
                Cascade of Failure: Risks of Inadequate Team Assembly
              </h3>
              
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  {/* Mermaid-style diagram using HTML/CSS */}
                  <div className="flex flex-col space-y-4 text-sm">
                    
                    {/* Level 1: Initial Risk */}
                    <div className="flex justify-center">
                      <div className="bg-red-100 border-2 border-red-400 rounded-lg p-4 text-center max-w-xs">
                        <div className="font-semibold text-red-800">Inadequate Team Assembly</div>
                        <div className="text-red-600 text-xs mt-1">No dedicated resources or expertise</div>
                      </div>
                    </div>
                    
                    {/* Arrow down */}
                    <div className="flex justify-center">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-red-400"></div>
                    </div>
                    
                    {/* Level 2: Immediate Consequences */}
                    <div className="flex justify-center space-x-8">
                      <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-3 text-center max-w-xs">
                        <div className="font-semibold text-orange-800">Implementation Delays</div>
                        <div className="text-orange-600 text-xs mt-1">6-12 month timeline becomes 18+ months</div>
                      </div>
                      <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-3 text-center max-w-xs">
                        <div className="font-semibold text-orange-800">Poor Configuration</div>
                        <div className="text-orange-600 text-xs mt-1">Inadequate system setup due to knowledge gaps</div>
                      </div>
                      <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-3 text-center max-w-xs">
                        <div className="font-semibold text-orange-800">User Resistance</div>
                        <div className="text-orange-600 text-xs mt-1">No champions to drive adoption</div>
                      </div>
                    </div>
                    
                    {/* Arrows down */}
                    <div className="flex justify-center space-x-8">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-orange-400"></div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-orange-400"></div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-orange-400"></div>
                    </div>
                    
                    {/* Level 3: Cascading Failures */}
                    <div className="flex justify-center space-x-4">
                      <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 text-center max-w-44">
                        <div className="font-semibold text-yellow-800">Budget Overruns</div>
                        <div className="text-yellow-600 text-xs mt-1">Extended timeline costs</div>
                      </div>
                      <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 text-center max-w-44">
                        <div className="font-semibold text-yellow-800">Productivity Loss</div>
                        <div className="text-yellow-600 text-xs mt-1">6-12 months of inefficiency</div>
                      </div>
                      <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 text-center max-w-44">
                        <div className="font-semibold text-yellow-800">Data Quality Issues</div>
                        <div className="text-yellow-600 text-xs mt-1">Poor migration & validation</div>
                      </div>
                      <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 text-center max-w-44">
                        <div className="font-semibold text-yellow-800">Leadership Frustration</div>
                        <div className="text-yellow-600 text-xs mt-1">Loss of confidence in project</div>
                      </div>
                    </div>
                    
                    {/* Final arrow down */}
                    <div className="flex justify-center">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-yellow-400"></div>
                    </div>
                    
                    {/* Level 4: Ultimate Failure */}
                    <div className="flex justify-center">
                      <div className="bg-red-200 border-2 border-red-600 rounded-lg p-4 text-center max-w-md">
                        <div className="font-bold text-red-900">PROJECT FAILURE</div>
                        <div className="text-red-700 text-xs mt-1">
                          Abandoned implementation, wasted investment, continued operational crisis
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Change Management Options */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Viable Options for Change Management Execution
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Option 1: In-house Tiger Team */}
              <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <UserCheck className="text-blue-600" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900">1. In-House Tiger Team</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <div className="font-medium text-green-800 text-sm">✓ Pros</div>
                    <ul className="text-xs text-green-700 mt-1 space-y-1">
                      <li>• Deep company knowledge</li>
                      <li>• Long-term ownership</li>
                      <li>• Cost-effective over time</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <div className="font-medium text-red-800 text-sm">✗ Cons</div>
                    <ul className="text-xs text-red-700 mt-1 space-y-1">
                      <li>• Requires 2-3 full-time resources</li>
                      <li>• 6-month Salesforce training required</li>
                      <li>• Risk of knowledge gaps</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Option 2: New Hire Employees */}
              <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Briefcase className="text-green-600" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900">2. New Hire Employees</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <div className="font-medium text-green-800 text-sm">✓ Pros</div>
                    <ul className="text-xs text-green-700 mt-1 space-y-1">
                      <li>• Specialized Salesforce expertise</li>
                      <li>• Immediate impact capability</li>
                      <li>• Permanent team building</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <div className="font-medium text-red-800 text-sm">✗ Cons</div>
                    <ul className="text-xs text-red-700 mt-1 space-y-1">
                      <li>• 3-6 month hiring timeline</li>
                      <li>• Cultural integration required</li>
                      <li>• High salary expectations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Option 3: External Consultancy */}
              <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <UsersIcon className="text-purple-600" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900">3. External Consultancy</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <div className="font-medium text-green-800 text-sm">✓ Pros</div>
                    <ul className="text-xs text-green-700 mt-1 space-y-1">
                      <li>• Immediate expert availability</li>
                      <li>• Proven implementation experience</li>
                      <li>• No long-term commitment</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <div className="font-medium text-red-800 text-sm">✗ Cons</div>
                    <ul className="text-xs text-red-700 mt-1 space-y-1">
                      <li>• High hourly rates</li>
                      <li>• Knowledge transfer required</li>
                      <li>• Limited company context</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Option 4: Combination Approach */}
              <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Wrench className="text-orange-600" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900">4. Combination Approach</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <div className="font-medium text-green-800 text-sm">✓ Pros</div>
                    <ul className="text-xs text-green-700 mt-1 space-y-1">
                      <li>• Best of all worlds</li>
                      <li>• Risk mitigation</li>
                      <li>• Knowledge transfer built-in</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <div className="font-medium text-red-800 text-sm">✗ Cons</div>
                    <ul className="text-xs text-red-700 mt-1 space-y-1">
                      <li>• Complex coordination</li>
                      <li>• Higher initial cost</li>
                      <li>• Multiple relationships to manage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Approach */}
            <div className="mt-8 bg-green-50 border border-green-300 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="text-green-600" size={24} />
                <h4 className="text-lg font-semibold text-green-800">Recommended: Combination Approach</h4>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>
                  <strong>Phase 1 (Immediate):</strong> Engage external Salesforce consulting partner for architecture design and initial configuration.
                </p>
                <p>
                  <strong>Phase 2 (Parallel):</strong> Hire dedicated Salesforce Administrator/Developer as permanent team member.
                </p>
                <p>
                  <strong>Phase 3 (Ongoing):</strong> Train internal champions while external partner provides oversight and knowledge transfer.
                </p>
                <p className="text-green-800 font-medium">
                  This approach ensures immediate progress while building long-term internal capability and minimizing project risk.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Four Pillars of Change Management
          </h2>
          
          {readoutData.changeManagement.pillars.map((pillar, index) => {
            const IconComponent = iconMap[index];
            
            return (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {pillar.objective}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Activities</h4>
                  <ul className="space-y-3">
                    {pillar.keyActivities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{activity}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <TrendingUp className="text-green-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Success Metric</h3>
              <p className="text-gray-700">
                Effective change management should result in 85%+ user adoption within 90 days of go-live, 
                with minimal productivity loss and high confidence scores from all stakeholder groups. 
                This requires proactive investment in the four pillars outlined above and dedicated 
                team resources with appropriate expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangeManagement;
