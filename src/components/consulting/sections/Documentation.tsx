import React, { useState } from 'react';
import { FileText, ExternalLink, ChevronDown, ChevronUp, Book } from 'lucide-react';

const Documentation: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const documentationSections = [
    {
      id: 'executive-overview',
      title: '1. Executive Overview',
      subsections: [
        'Integration fundamentals and capabilities',
        'Key benefits for marketing teams',
        'System requirements overview'
      ]
    },
    {
      id: 'technical-architecture',
      title: '2. Technical Architecture & Requirements',
      subsections: [
        'Platform prerequisites and licensing',
        'User permissions and access control',
        'API requirements and limitations',
        'System compatibility'
      ]
    },
    {
      id: 'installation-setup',
      title: '3. Installation & Setup Process',
      subsections: [
        'Pre-installation preparation',
        'Step-by-step installation guide',
        'Initial configuration settings',
        'HubSpot Embed window setup'
      ]
    },
    {
      id: 'data-sync',
      title: '4. Data Synchronization Framework',
      subsections: [
        'Supported objects and field types',
        'Sync triggers and frequency',
        'Field mapping strategies',
        'Custom object synchronization'
      ]
    },
    {
      id: 'marketing-features',
      title: '5. Marketing Hub Specific Features',
      subsections: [
        'Email marketing integration',
        'Lead scoring and lifecycle management',
        'Campaign management across platforms',
        'Form submissions and tracking',
        'Marketing automation workflows'
      ]
    },
    {
      id: 'lead-management',
      title: '6. Lead Management & Qualification',
      subsections: [
        'Lead vs. contact architecture',
        'Marketing qualified lead (MQL) processes',
        'Lead routing and assignment',
        'Lifecycle stage progression'
      ]
    },
    {
      id: 'reporting-analytics',
      title: '7. Reporting & Analytics Integration',
      subsections: [
        'Closed-loop reporting capabilities',
        'Campaign ROI measurement',
        'Attribution models and tracking',
        'Custom dashboard creation'
      ]
    },
    {
      id: 'best-practices',
      title: '8. Implementation Best Practices',
      subsections: [
        'Data governance and cleanup',
        'Team alignment strategies',
        'Change management approach',
        'Security and compliance'
      ]
    },
    {
      id: 'troubleshooting',
      title: '9. Troubleshooting & Error Resolution',
      subsections: [
        'Common sync errors and solutions',
        'API limit management',
        'Performance optimization',
        'Monitoring and maintenance'
      ]
    },
    {
      id: 'advanced-customization',
      title: '10. Advanced Customization',
      subsections: [
        'Custom object scenarios',
        'Complex workflow automation',
        'Advanced field mapping techniques',
        'Enterprise features'
      ]
    },
    {
      id: 'resources',
      title: '11. Resources & Documentation',
      subsections: [
        'Official documentation links',
        'Community resources',
        'Third-party tools',
        'Training materials'
      ]
    }
  ];



  const communityResources = [
    {
      title: 'HubSpot Community - Integrations',
                url: 'https://community.hubspot.com/',
      description: 'Community support and discussions'
    },
    {
      title: 'HubSpot Academy Integration Course',
      url: 'https://academy.hubspot.com/',
      description: 'Comprehensive training and certification'
    },
    {
      title: 'Salesforce Trailhead Integration Modules',
      url: 'https://trailhead.salesforce.com/',
      description: 'Salesforce-focused integration training'
    }
  ];

  return (
    <section id="documentation" className="scroll-mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Documentation: HubSpot-Salesforce Integration Guide
        </h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            This comprehensive documentation section provides complete guidance for implementing and maintaining 
            the HubSpot-Salesforce integration. Use this as your primary reference for technical implementation, 
            troubleshooting, and optimization.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Book className="text-blue-600" size={24} />
            <h2 className="text-xl font-semibold text-blue-800">
              Complete Guide to HubSpot-Salesforce Integration for Marketing Hub
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documentationSections.map((section) => (
              <div
                key={section.id}
                className="bg-white border border-blue-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {section.title}
                  </h3>
                  {expandedSections[section.id] ? 
                    <ChevronUp className="text-blue-500" size={16} /> : 
                    <ChevronDown className="text-blue-500" size={16} />
                  }
                </button>
                
                {expandedSections[section.id] && (
                  <div className="mt-3 pl-2">
                    <ul className="space-y-1">
                      {section.subsections.map((subsection, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs text-gray-600">{subsection}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <FileText className="text-green-600" size={20} />
              <h3 className="font-semibold text-green-800">Integration Scope</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Bi-directional data synchronization</li>
              <li>• Real-time form submission tracking</li>
              <li>• Marketing attribution preservation</li>
              <li>• Custom object support (Enterprise)</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <FileText className="text-orange-600" size={20} />
              <h3 className="font-semibold text-orange-800">Requirements</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• HubSpot Professional or Enterprise</li>
              <li>• Salesforce Professional+ with API</li>
              <li>• System Administrator permissions</li>
              <li>• Adequate API allocation</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <FileText className="text-purple-600" size={20} />
              <h3 className="font-semibold text-purple-800">Key Benefits</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Closed-loop reporting</li>
              <li>• Marketing ROI measurement</li>
              <li>• Lead scoring synchronization</li>
              <li>• Campaign attribution tracking</li>
            </ul>
          </div>
        </div>



        {/* Community Resources */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Community Resources & Training
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {communityResources.map((resource, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  {resource.title}
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  {resource.description}
                </p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink size={14} />
                  <span>Visit Resource</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Note */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <FileText className="text-yellow-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Implementation Best Practice</h3>
              <p className="text-gray-700 mb-4">
                This documentation should be used in conjunction with Phase 2 (Solution Design) of the project approach. 
                The integration setup must align with the broader Salesforce-centric architecture while preserving 
                HubSpot's marketing automation excellence.
              </p>
              <p className="text-gray-700">
                <strong>Critical Success Factor:</strong> Ensure dedicated team members review this complete 
                documentation before beginning implementation to understand the full scope and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;