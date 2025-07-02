import React from 'react';
import { FileText, Users } from 'lucide-react';
import { readoutData } from '../../../data/iqgeoReadoutData';

const DocumentationArticles: React.FC = () => {
  const getCategoryColor = (category: string) => {
    const colors = {
      Strategic: 'bg-purple-50 border-purple-200 text-purple-800',
      Sales: 'bg-blue-50 border-blue-200 text-blue-800',
      Marketing: 'bg-gray-50 border-gray-200 text-gray-800',
      'Finance & CS': 'bg-orange-50 border-orange-200 text-orange-800',
      Technical: 'bg-yellow-50 border-yellow-200 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-50 border-gray-200 text-gray-800';
  };

  return (
    <section id="documentation-articles" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Documentation Articles: Knowledge Transfer Plan
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            To ensure sustainable success, comprehensive documentation must be created for each major 
            process and system component. These articles will serve as the foundation for training, 
            troubleshooting, and knowledge transfer across the organization.
          </p>
        </div>

        <div className="space-y-4">
          {readoutData.documentationArticles.map((article, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <FileText className="text-gray-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Users className="text-gray-400" size={16} />
                        <span className="text-sm text-gray-600">
                          {article.audience.join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <FileText className="text-green-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Implementation Note</h3>
              <p className="text-gray-700">
                These documentation articles should be created during Phase 2 (Solution Design) and 
                refined during Phase 3 (Implementation). Each article should include step-by-step 
                processes, screenshots, troubleshooting guides, and contact information for additional support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationArticles;