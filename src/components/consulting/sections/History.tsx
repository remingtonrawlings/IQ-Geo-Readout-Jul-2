import React from 'react';
import { TrendingUp, Users, AlertTriangle } from 'lucide-react';
import { readoutData } from '../../../data/iqgeoReadoutData';

const History: React.FC = () => {
  return (
    <section id="history" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          History: How We Got Here
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {readoutData.history.narrative}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {readoutData.history.summaryPoints.map((point, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-800 font-medium">{point}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="text-red-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Conclusion</h3>
              <p className="text-gray-700">
                {readoutData.history.conclusion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;