import React from 'react';
import { readoutData } from '../../data/iqgeoReadoutData';
import Logo from '../Logo';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="w-80 bg-gray-100 text-gray-800 flex-shrink-0 h-screen overflow-y-auto fixed left-0 top-0 border-r border-gray-300">
      <div className="p-6 border-b border-gray-300 bg-gray-200">
        <Logo />
        <p className="text-sm text-gray-600 mt-2">Final Blueprint & Implementation Plan</p>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {readoutData.sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left p-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-white text-gray-900 shadow-lg border border-gray-300'
                    : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;