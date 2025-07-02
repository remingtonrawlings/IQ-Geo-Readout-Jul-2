import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/consulting/Sidebar';
import ExecutiveSummary from '../components/consulting/sections/ExecutiveSummary';
import History from '../components/consulting/sections/History';
import Methodology from '../components/consulting/sections/Methodology';
import GapsInProcess from '../components/consulting/sections/GapsInProcess';
import IdealSituation from '../components/consulting/sections/IdealSituation';
import DilemmaOverview from '../components/consulting/sections/DilemmaOverview';
import ProjectApproach from '../components/consulting/sections/ProjectApproach';
import ChangeManagement from '../components/consulting/sections/ChangeManagement';
import Documentation from '../components/consulting/sections/Documentation';
import DocumentationArticles from '../components/consulting/sections/DocumentationArticles';
import FAQ from '../components/consulting/sections/FAQ';
import NextSteps from '../components/consulting/sections/NextSteps';
import { readoutData } from '../data/iqgeoReadoutData';

const ConsultingReadoutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `${readoutData.projectName} | Readout`;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0.1 }
    );

    const sections = mainContentRef.current?.querySelectorAll('section[id]');
    sections?.forEach((section) => observer.observe(section));

    return () => {
      sections?.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} />
      <main ref={mainContentRef} className="flex-1 ml-80 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto space-y-16">
          <ExecutiveSummary />
          <History />
          <Methodology />
          <GapsInProcess />
          <IdealSituation />
          <DilemmaOverview />
          <ProjectApproach />
          <ChangeManagement />
          <Documentation />
          <DocumentationArticles />
          <FAQ />
          <NextSteps />
        </div>
      </main>
    </div>
  );
};

export default ConsultingReadoutPage;