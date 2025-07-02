import React from 'react';
import { Map } from 'lucide-react';
import { readoutData } from '../data/iqgeoReadoutData';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <Map className="text-gray-600" size={32} />
      <div>
        <span className="font-bold text-xl text-gray-800 tracking-tight block">
          IQgeo Operations
        </span>
        <span className="text-sm text-gray-600">
          Readout & Blueprint
        </span>
      </div>
    </div>
  );
};

export default Logo;