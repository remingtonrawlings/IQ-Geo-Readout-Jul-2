import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { readoutData } from '../../../data/iqgeoReadoutData';

const FAQ: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'High-Level': 'bg-gray-100 text-gray-800 border-gray-200',
      'Tactical': 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <section id="faq" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          FAQ: Addressing Common Concerns
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            Based on our stakeholder interviews, these are the most frequently asked questions and 
            concerns that need to be addressed during the change management process.
          </p>
        </div>

        <div className="space-y-4">
          {readoutData.faq.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="text-gray-600 mt-1 flex-shrink-0" size={20} />
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(faq.category)}`}>
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-left">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  {expandedFaq === index ? 
                    <ChevronUp className="text-gray-400 flex-shrink-0" size={20} /> : 
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  }
                </div>
              </button>
              
              {expandedFaq === index && (
                <div className="p-6 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <HelpCircle className="text-green-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Communication Strategy</h3>
              <p className="text-gray-700">
                These FAQs should be prominently featured in all project communications, town halls, 
                and training materials. Proactively addressing concerns builds trust and reduces 
                resistance to change throughout the organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;