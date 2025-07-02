import React from 'react';
import { Users, Headphones, Building, Calendar } from 'lucide-react';

const ImplementationPlan: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Implementation Plan: Making It Happen
        </h1>
        
        <div className="grid gap-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="text-green-500" size={24} />
              <h3 className="text-xl font-semibold text-green-800">Project Team & Responsibilities</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-1">[Team Member 1]</h4>
                <p className="text-sm text-gray-600">[Role/Responsibility]</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-1">[Team Member 2]</h4>
                <p className="text-sm text-gray-600">[Role/Responsibility]</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-1">[Team Member 3]</h4>
                <p className="text-sm text-gray-600">[Role/Responsibility]</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <Headphones className="text-blue-500" size={24} />
              <h3 className="text-xl font-semibold text-blue-800">External Support & Services</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">[External Service 1]</h4>
                <p className="text-gray-700">
                  [Description of external service or consulting support needed for implementation]
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">[External Service 2]</h4>
                <p className="text-gray-700">
                  [Description of external service or consulting support needed for implementation]
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="text-purple-500" size={24} />
              <h3 className="text-xl font-semibold text-purple-800">Key Milestones</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-purple-200">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-purple-600">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">[Phase 1 Title]: [Timeline]</h4>
                  <p className="text-gray-600">[Description of phase 1 activities and deliverables]</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-purple-200">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-purple-600">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">[Phase 2 Title]: [Timeline]</h4>
                  <p className="text-gray-600">[Description of phase 2 activities and deliverables]</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-purple-200">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-purple-600">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">[Phase 3 Title]: [Timeline]</h4>
                  <p className="text-gray-600">[Description of phase 3 activities and deliverables]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Building className="text-gray-500" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">Success Metrics</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Short-term ([X] days)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• [Short-term success metric 1]</li>
                  <li>• [Short-term success metric 2]</li>
                  <li>• [Short-term success metric 3]</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Long-term ([X] days)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• [X]% improvement in [metric 1]</li>
                  <li>• [X]% reduction in [metric 2]</li>
                  <li>• [X]% increase in [metric 3]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationPlan;