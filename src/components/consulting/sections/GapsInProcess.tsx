import React, { useState } from 'react';
import { AlertTriangle, BarChart3, Quote, ChevronDown, ChevronUp, Workflow, ArrowRight, ArrowDown } from 'lucide-react';
import { readoutData } from '../../../data/iqgeoReadoutData';

const GapsInProcess: React.FC = () => {
  const [isProcessFlowExpanded, setIsProcessFlowExpanded] = useState(false);

  const toggleProcessFlow = () => {
    setIsProcessFlowExpanded(!isProcessFlowExpanded);
  };

  const getConsensusColor = (percent: number) => {
    if (percent >= 90) return 'bg-red-100 text-red-800 border-red-200';
    if (percent >= 75) return 'bg-orange-100 text-orange-800 border-orange-200';
    if (percent >= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getRankColor = (rank: number) => {
    if (rank <= 3) return 'bg-red-500 text-white';
    if (rank <= 6) return 'bg-orange-500 text-white';
    if (rank <= 8) return 'bg-yellow-500 text-white';
    return 'bg-gray-500 text-white';
  };

  const top5Gaps = readoutData.gapsInProcess.slice(0, 5);
  const allGaps = readoutData.gapsInProcess;

  return (
    <section id="qualitative-analysis" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Qualitative Analysis: Critical Issues Identified
        </h1>
        
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Through our comprehensive stakeholder interviews, we identified and ranked the top operational gaps 
            by consensus level and business impact. These issues are ranked by the percentage of stakeholders 
            who identified them as critical problems.
          </p>
        </div>

        {/* Collapsible Process Flow Diagram */}
        <div className="mb-12 bg-blue-50 border border-blue-200 rounded-lg overflow-hidden">
          <button
            onClick={toggleProcessFlow}
            className="w-full p-6 text-left hover:bg-blue-100 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Workflow className="text-blue-600" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Business Process Flow & Problem Impact Analysis
                </h2>
              </div>
              {isProcessFlowExpanded ? 
                <ChevronUp className="text-blue-600" size={24} /> : 
                <ChevronDown className="text-blue-600" size={24} />
              }
            </div>
          </button>
          
          {isProcessFlowExpanded && (
            <div className="p-8 bg-white border-t border-blue-200">
              <div className="overflow-x-auto">
                <div className="min-w-[1600px] space-y-8">
                  
                  {/* Marketing Operations */}
                  <div>
                    <div className="text-sm font-medium text-blue-800 mb-3">Marketing Operations</div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3 text-center min-w-[130px]">
                        <div className="font-medium text-blue-800 text-sm">Marketing Campaigns</div>
                      </div>
                      <ArrowRight className="text-blue-500" size={16} />
                      <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3 text-center min-w-[130px]">
                        <div className="font-medium text-blue-800 text-sm">Lead Generation</div>
                      </div>
                      <ArrowRight className="text-blue-500" size={16} />
                      <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3 text-center min-w-[130px]">
                        <div className="font-medium text-blue-800 text-sm">Lead Qualification</div>
                      </div>
                      <ArrowRight className="text-blue-500" size={16} />
                      <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3 text-center min-w-[130px]">
                        <div className="font-medium text-blue-800 text-sm">MQL to SQL Conversion</div>
                      </div>
                    </div>
                  </div>

                  {/* Sales Operations */}
                  <div>
                    <div className="text-sm font-medium text-green-800 mb-3">Sales Operations</div>
                    <div className="flex items-center space-x-2 flex-wrap">
                      <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-green-800 text-sm">Opportunity Creation</div>
                      </div>
                      <ArrowRight className="text-green-500" size={16} />
                      <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-green-800 text-sm">Pipeline Management</div>
                      </div>
                      <ArrowRight className="text-green-500" size={16} />
                      <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-green-800 text-sm">Quote & Pricing Process</div>
                      </div>
                      <ArrowRight className="text-green-500" size={16} />
                      <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-green-800 text-sm">Proposal Generation</div>
                      </div>
                      <ArrowRight className="text-green-500" size={16} />
                      <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-green-800 text-sm">Deal Negotiation</div>
                      </div>
                      <ArrowRight className="text-green-500" size={16} />
                      <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-green-800 text-sm">Contract Execution</div>
                      </div>
                      <ArrowRight className="text-green-500" size={16} />
                      <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-green-800 text-sm">Deal Closure</div>
                      </div>
                    </div>
                  </div>

                  {/* Post-Sale Operations */}
                  <div>
                    <div className="text-sm font-medium text-purple-800 mb-3">Post-Sale Operations</div>
                    <div className="flex items-center space-x-2 flex-wrap">
                      <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-purple-800 text-sm">Order Processing</div>
                      </div>
                      <ArrowRight className="text-purple-500" size={16} />
                      <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-purple-800 text-sm">Customer Onboarding</div>
                      </div>
                      <ArrowRight className="text-purple-500" size={16} />
                      <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-purple-800 text-sm">Customer Success Mgmt</div>
                      </div>
                      <ArrowRight className="text-purple-500" size={16} />
                      <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-purple-800 text-sm">Renewal Management</div>
                      </div>
                      <ArrowRight className="text-purple-500" size={16} />
                      <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 text-center min-w-[120px]">
                        <div className="font-medium text-purple-800 text-sm">Upsell/Cross-sell</div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <div className="flex items-center space-x-2">
                        <div className="text-xs text-purple-600">↑ Feeds back to Pipeline Management</div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Operations Flow */}
                  <div>
                    <div className="text-sm font-medium text-orange-800 mb-3">Financial Operations Flow</div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-3 text-center min-w-[130px]">
                        <div className="font-medium text-orange-800 text-sm">Revenue Recognition</div>
                      </div>
                      <ArrowRight className="text-orange-500" size={16} />
                      <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-3 text-center min-w-[130px]">
                        <div className="font-medium text-orange-800 text-sm">Invoicing & Billing</div>
                      </div>
                      <ArrowRight className="text-orange-500" size={16} />
                      <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-3 text-center min-w-[130px]">
                        <div className="font-medium text-orange-800 text-sm">Payment Processing</div>
                      </div>
                      <ArrowRight className="text-orange-500" size={16} />
                      <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-3 text-center min-w-[130px]">
                        <div className="font-medium text-orange-800 text-sm">Financial Reporting</div>
                      </div>
                    </div>
                  </div>

                  {/* Commission Flow */}
                  <div>
                    <div className="text-sm font-medium text-indigo-800 mb-3">Commission Flow</div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-indigo-100 border-2 border-indigo-300 rounded-lg p-3 text-center min-w-[140px]">
                        <div className="font-medium text-indigo-800 text-sm">Commission Calculation</div>
                      </div>
                      <ArrowRight className="text-indigo-500" size={16} />
                      <div className="bg-indigo-100 border-2 border-indigo-300 rounded-lg p-3 text-center min-w-[140px]">
                        <div className="font-medium text-indigo-800 text-sm">Commission Payment</div>
                      </div>
                    </div>
                  </div>

                  {/* System Infrastructure Problems */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-sm font-medium text-gray-800 mb-3">System Infrastructure & Dependencies</div>
                    <div className="flex items-center justify-center space-x-8 mb-6">
                      <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
                        <div className="font-medium text-blue-800">HubSpot CRM</div>
                        <div className="text-xs text-gray-600 mt-1">Marketing & Early Sales</div>
                      </div>
                      
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-0.5 bg-red-400"></div>
                          <div className="text-xs text-red-600 font-medium">Sync Issues</div>
                          <div className="w-4 h-0.5 bg-red-400"></div>
                        </div>
                        <div className="bg-red-100 border border-red-300 rounded-lg p-2 text-center">
                          <div className="font-medium text-red-800 text-sm">System Fragmentation</div>
                          <div className="text-xs text-red-600">80% Consensus</div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
                        <div className="font-medium text-blue-800">Salesforce CRM</div>
                        <div className="text-xs text-gray-600 mt-1">Financial & Reporting</div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="text-gray-400" size={16} />
                        <div className="text-xs text-gray-600">Dependencies</div>
                        <ArrowRight className="text-gray-400" size={16} />
                      </div>
                      
                      <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 text-center">
                        <div className="font-medium text-red-800">Excel Dependencies</div>
                        <div className="text-xs text-red-600 mt-1">Manual Workarounds</div>
                      </div>
                    </div>
                  </div>

                  {/* Problem Areas Connected to Process Steps */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                      Critical Issues Impact Points
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      
                      {/* Financial Crisis - Connected to Revenue Recognition → Financial Reporting */}
                      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
                          <div className="font-semibold text-red-800 text-sm">Financial Crisis</div>
                          <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">95%</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <strong>Impacts:</strong> Revenue Recognition → Financial Reporting
                        </div>
                        <div className="text-xs text-gray-700">Manual processes, currency issues, sync failures</div>
                      </div>

                      {/* Data Quality Issues - Connected to Lead Generation → Opportunity Creation */}
                      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
                          <div className="font-semibold text-red-800 text-sm">Data Quality Issues</div>
                          <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">90%</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <strong>Impacts:</strong> Lead Generation → Opportunity Creation
                        </div>
                        <div className="text-xs text-gray-700">Weak validation, duplicate accounts, manual cleanup</div>
                      </div>

                      {/* Excel Dependencies - Connected to Quote & Pricing Process → All Operations */}
                      <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
                          <div className="font-semibold text-orange-800 text-sm">Excel Dependencies</div>
                          <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">85%</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <strong>Impacts:</strong> Quote & Pricing → Revenue Recognition → Commission Calc → Financial Reporting
                        </div>
                        <div className="text-xs text-gray-700">Manual pricing, fake product codes, scalability issues</div>
                      </div>

                      {/* System Fragmentation - Impacts All Process Steps */}
                      <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs">4</div>
                          <div className="font-semibold text-orange-800 text-sm">System Fragmentation</div>
                          <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">80%</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <strong>Impacts:</strong> All Process Steps (HubSpot ↔ Salesforce)
                        </div>
                        <div className="text-xs text-gray-700">Dual CRM complexity, sync issues, visibility gaps</div>
                      </div>

                      {/* Commission Chaos - Connected to Commission Calculation → Commission Payment */}
                      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-xs">5</div>
                          <div className="font-semibold text-yellow-800 text-sm">Commission Chaos</div>
                          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">75%</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <strong>Impacts:</strong> Commission Calculation → Commission Payment
                        </div>
                        <div className="text-xs text-gray-700">No transparency, manual processes, accuracy issues</div>
                      </div>

                      {/* Invoice & Payment Gaps - Connected to Invoicing & Billing → Payment Processing */}
                      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-xs">6</div>
                          <div className="font-semibold text-yellow-800 text-sm">Invoice & Payment Gaps</div>
                          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">70%</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <strong>Impacts:</strong> Invoicing & Billing → Payment Processing
                        </div>
                        <div className="text-xs text-gray-700">Manual invoicing, no payment tracking</div>
                      </div>

                      {/* Quote Accuracy - Connected to Quote & Pricing Process */}
                      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-xs">7</div>
                          <div className="font-semibold text-yellow-800 text-sm">Quote Accuracy</div>
                          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">65%</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <strong>Impacts:</strong> Quote & Pricing Process
                        </div>
                        <div className="text-xs text-gray-700">Manual errors, regional inconsistencies</div>
                      </div>

                      {/* Deal Management Issues - Connected to Renewal Management */}
                      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-xs">8</div>
                          <div className="font-semibold text-gray-800 text-sm">Deal Management Issues</div>
                          <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">60%</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <strong>Impacts:</strong> Renewal Management
                        </div>
                        <div className="text-xs text-gray-700">Complex renewal processes, ACV adjustments</div>
                      </div>

                      {/* Mobile Limitations - Connected to Pipeline Management → Deal Negotiation */}
                      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-xs">9</div>
                          <div className="font-semibold text-gray-800 text-sm">Mobile Limitations</div>
                          <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">55%</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <strong>Impacts:</strong> Pipeline Management → Deal Negotiation
                        </div>
                        <div className="text-xs text-gray-700">Field operations inadequacy</div>
                      </div>

                      {/* Change Management - Connected to System Infrastructure */}
                      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-xs">10</div>
                          <div className="font-semibold text-gray-800 text-sm">Change Management</div>
                          <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">50%</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          <strong>Impacts:</strong> System Infrastructure (HubSpot & Salesforce)
                        </div>
                        <div className="text-xs text-gray-700">Training concerns, adoption challenges</div>
                      </div>

                    </div>

                    {/* Legend */}
                    <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Impact Severity Legend</h4>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-red-500 rounded"></div>
                          <span className="text-sm text-gray-700">Critical (90%+ consensus)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-orange-500 rounded"></div>
                          <span className="text-sm text-gray-700">High (75-89% consensus)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                          <span className="text-sm text-gray-700">Medium (60-74% consensus)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-gray-500 rounded"></div>
                          <span className="text-sm text-gray-700">Lower (50-59% consensus)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Top 5 Gaps Summary */}
        <div className="mb-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="text-red-500" size={24} />
                <h3 className="text-lg font-semibold text-red-800">Highest Impact Issues</h3>
              </div>
              <div className="text-lg font-semibold text-blue-800">% Consensus</div>
            </div>
            
            <div className="space-y-3">
              {top5Gaps.map((gap) => (
                <div key={gap.rank} className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-200">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${getRankColor(gap.rank)}`}>
                      {gap.rank}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{gap.title}</h4>
                      <p className="text-sm text-gray-600">{gap.problemStatement}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full border text-sm font-medium ml-4 ${getConsensusColor(gap.consensusPercent)}`}>
                    {gap.consensusPercent}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <BarChart3 className="text-orange-500 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">Critical Insight</h3>
                <p className="text-gray-700">
                  The top 3 gaps (85%+ consensus) represent systemic failures that require immediate attention. 
                  These are not isolated issues but interconnected problems that compound each other's impact 
                  on business operations and growth potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gaps Deep Dive */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Gaps Deep Dive: Detailed Analysis
          </h2>
          
          <div className="space-y-6">
            {allGaps.map((gap) => (
              <div key={gap.rank} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${getRankColor(gap.rank)}`}>
                        {gap.rank}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {gap.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {gap.problemStatement}
                        </p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getConsensusColor(gap.consensusPercent)}`}>
                      {gap.consensusPercent}% consensus
                    </div>
                  </div>
                </div>
                
                {gap.keyQuotes && gap.keyQuotes.length > 0 && (
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Quote className="text-gray-400" size={16} />
                      <span className="text-sm font-medium text-gray-600">Key Stakeholder Quote</span>
                    </div>
                    {gap.keyQuotes.map((quote, index) => (
                      <blockquote key={index} className="bg-red-50 p-4 border-l-4 border-red-500 italic text-gray-700">
                        "{quote.text}"
                        <cite className="block text-sm text-gray-500 mt-2 not-italic">
                          — {quote.speaker}
                        </cite>
                      </blockquote>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="text-red-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Strategic Imperative</h3>
              <p className="text-gray-700">
                The convergence of these gaps creates a perfect storm of operational inefficiency. Without decisive 
                action, these issues will compound and potentially compromise IQGeo's ability to scale effectively 
                and meet investor expectations. The 95% consensus on financial operations crisis makes this a 
                non-negotiable priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapsInProcess;