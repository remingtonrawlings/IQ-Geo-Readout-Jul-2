import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/consulting/Sidebar';
import ExecutiveSummary from '../components/consulting/sections/ExecutiveSummary';
import History from '../components/consulting/sections/History';
import Methodology from '../components/consulting/sections/Methodology';
import QualitativeAnalysis from '../components/consulting/sections/QualitativeAnalysis';
import IdealSituation from '../components/consulting/sections/IdealSituation';
import DilemmaOverview from '../components/consulting/sections/DilemmaOverview';
import ProjectApproach from '../components/consulting/sections/ProjectApproach';
import ChangeManagement from '../components/consulting/sections/ChangeManagement';
import Documentation from '../components/consulting/sections/Documentation';
import DocumentationArticles from '../components/consulting/sections/DocumentationArticles';
import FAQ from '../components/consulting/sections/FAQ';
import NextSteps from '../components/consulting/sections/NextSteps';
import { readoutData } from '../data/iqgeoReadoutData';
import UseCasesAndCosts from '../components/consulting/sections/UseCasesAndCosts';

const ConsultingReadoutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `${readoutData.projectName} | Readout`;
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Get the entry with the highest intersection ratio (most visible)
          const mostVisible = visibleEntries.reduce((prev, current) => 
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          setActiveSection(mostVisible.target.id);
        } else {
          // If no sections are intersecting, find the closest one to the viewport
          const sections = Array.from(mainContentRef.current?.querySelectorAll('section[id]') || []);
          if (sections.length > 0) {
            const scrollTop = window.scrollY;
            let closestSection = sections[0];
            let minDistance = Math.abs(sections[0].getBoundingClientRect().top);
            
            sections.forEach((section) => {
              const distance = Math.abs(section.getBoundingClientRect().top);
              if (distance < minDistance) {
                minDistance = distance;
                closestSection = section;
              }
            });
            
            setActiveSection(closestSection.id);
          }
        }
      },
      { 
        rootMargin: '-20% 0px -60% 0px', 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] 
      }
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
          <QualitativeAnalysis />
          <IdealSituation />
          <DilemmaOverview />
          <ProjectApproach />
          <ChangeManagement />
          <Documentation />
          <DocumentationArticles />
          <FAQ />
          <UseCasesAndCosts />
          <NextSteps />
        </div>
      </main>
    </div>
  );
};

export default ConsultingReadoutPage;
