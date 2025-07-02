export const readoutData = {
  "projectName": "IQgeo Operational Excellence Readout",
  "version": "1.0",
  "status": "FINAL_BLUEPRINT",
  "executiveSummary": {
    "introduction": "Based on comprehensive stakeholder analysis and technical assessment of 26 interviews, I recommend migrating deal management to Salesforce while preserving HubSpot's marketing automation excellence. This hybrid approach addresses IQGeo's critical operational constraints while maintaining proven revenue-generating capabilities. The core issue is clear: HubSpot fundamentally cannot support enterprise financial operations at scale, while Salesforce lacks HubSpot's marketing sophistication.",
    "strategicRecommendation": {
      "title": "Salesforce-Centric Architecture with HubSpot Marketing Preservation",
      "rationale": "The solution requires a best-of-breed architecture that leverages each platform's strengths while addressing the operational crisis preventing scalable growth.",
      "coreTechnologyStack": [
        {
          "component": "Primary CRM",
          "solution": "Salesforce Sales Cloud Enterprise",
          "rationale": "Only platform capable of handling multi-currency enterprise requirements, advanced validation, and complex partner management",
          "keyFeatures": ["Deal management", "Forecasting", "Territory management", "Mobile functionality"]
        },
        {
          "component": "Marketing Automation",
          "solution": "HubSpot Marketing Hub (Preserved)",
          "rationale": "Proven marketing automation excellence with deep website integration",
          "keyFeatures": ["Bi-directional sync with Salesforce", "Lead handoff", "Closed-loop reporting"]
        },
        {
          "component": "Configure-Price-Quote",
          "solution": "Salesforce CPQ",
          "rationale": "Eliminates Excel price book dependency, provides approval workflows, handles partner pricing",
          "keyFeatures": ["Automated pricing", "Quote accuracy", "Contract amendments", "Renewal management"]
        },
        {
          "component": "Financial Reporting",
          "solution": "Enhanced Solver Cloud + Power BI",
          "rationale": "Maintains current FPA capabilities while adding real-time Salesforce integration",
          "keyFeatures": ["Multi-currency dashboards", "Commission automation", "KKR reporting"]
        }
      ]
    },
    "criticalProblemsRequiringResolution": [
      {
        "category": "Financial Operations Crisis",
        "consensusPercent": 95,
        "issues": [
          "Scalable Leadership reporting in HubSpot - inability to get reporting insights to run the business",
          "Manual revenue recognition requiring thousands of Excel rows monthly",
          "Daily sync failures between HubSpot and Salesforce disrupting operations",
          "Commission calculation chaos with no transparency for sales teams"
        ]
      },
      {
        "category": "Data Quality & Integration Breakdown",
        "consensusPercent": 90,
        "issues": [
          "Weak validation rules in HubSpot leading to downstream cleanup burden",
          "Three-system data entry (Excel → HubSpot → Ironclad) creating errors",
          "Historical data loss when deals close and move to Salesforce",
          "Duplicate account management with 30,000+ contacts requiring manual cleanup"
        ]
      },
      {
        "category": "Operational Scalability Constraints",
        "consensusPercent": 85,
        "issues": [
          "Excel dependency epidemic for pricing, forecasting, and reporting",
          "Manual ACV adjustments using 'fake product codes'",
          "Quote accuracy problems due to manual processes across regions, excel focused",
          "Mobile application inadequacy for enterprise field operations"
        ]
      }
    ],
    "pointsOfChange": [
      {
        "id": "technical-modernization",
        "title": "Technical Modernization",
        "description": "Implementing Salesforce Sales Cloud Enterprise as the primary CRM while preserving HubSpot's marketing automation excellence through strategic integration.",
        "icon": "Zap"
      },
      {
        "id": "process-optimization",
        "title": "Process Optimization",
        "description": "Eradicating spreadsheet-driven processes through Salesforce CPQ implementation, automated pricing workflows, and integrated financial reporting.",
        "icon": "BarChart2"
      },
      {
        "id": "recognition-of-needs",
        "title": "Recognition of Business Needs",
        "description": "Investing in enterprise-grade systems that support real-time reporting access (self serve leadership reporting), complex global sales, robust financial controls, and a thriving partner channel.",
        "icon": "Book"
      }
    ],
    "highLevelProcess": [
      "Align Process",
      "Create Change Project",
      "Add Team",
      "Execution"
    ]
  },
  "history": {
    "narrative": "IQGeo's current operational challenges are a direct result of its successful growth and evolution. The company began with a straightforward SMB process characterized by low deal volume and high price points. As the company grew, it acquired other businesses that used HubSpot as a core part of their sales and marketing operations. This led to a strategic decision to transition the full sales team into HubSpot, with the goal of making it the primary CRM.\n\nHowever, as new platforms were built and customer bases were merged, the business model itself bifurcated. This created two distinct and conflicting sales motions operating within the same system: a long-cycle, high-value enterprise sales process and a high-velocity, user-priced sales process.\n\nTo manage this increasing complexity, a series of manual workarounds were introduced. Critical functions like pricing, multi-currency deal reviews, financial reporting, and partner management were moved into Excel spreadsheets. The invoicing process became disconnected, with customer success reporting that it is potentially broken. Quoting and currency conversions are handled manually, creating errors and inefficiencies. This has left the company at a crucial crossroads: either lean heavily into a complex optimization of HubSpot or connect HubSpot's marketing engine to an enterprise-grade Salesforce instance to act as the central sales CRM.\n\nThe accumulation of these issues has made it nearly impossible for leadership to get a clear, accurate view of the business, leading to the commissioning of this audit.",
    "summaryPoints": [
      "SMB Process: Low Volume, High Price",
      "Acquisitions & Technology Changes",
      "Manual Processes Introduced via Scaling",
      "Major Decisions to Make",
      "Difficulty of Understanding Technical Ramifications"
    ],
    "conclusion": "These circumstances led to the audit we performed."
  },
   "methodology": {
    "interviewCount": 26,
    "duration": "2.5 weeks",
    "process": "Conducted targeted interviews based on 10 core themes, with questions customized for each role. All findings were then synthesized to identify patterns, validate consensus levels on key problems, and create a holistic view of the organization's operational state.",
    "gtmAssessmentFramework": {
      "philosophy": "Our GTM (Go-to-Market) assessment methodology focuses on identifying the critical elements that either enable or inhibit business clarity and operational efficiency. We examine the interconnected web of people, processes, and technology to understand where operational friction creates strategic risk.",
      "coreAssessmentAreas": [
        {
          "area": "Data Integrity & Flow",
          "description": "Examining how data moves through systems, where it breaks down, and what impact poor data quality has on decision-making",
          "keyQuestions": ["Is data accurate and complete?", "Do systems sync reliably?", "Can leadership trust the numbers?"]
        },
        {
          "area": "User Workflows & Experience",
          "description": "Understanding how people actually work within systems versus how systems were designed to be used",
          "keyQuestions": ["Are processes intuitive?", "Where do users create workarounds?", "What causes daily frustration?"]
        },
        {
          "area": "Reporting & Visibility",
          "description": "Assessing whether leadership has the insights needed to make strategic decisions and manage operational performance",
          "keyQuestions": ["Can managers see what they need?", "Is reporting automated or manual?", "Are metrics reliable?"]
        },
        {
          "area": "Operational Efficiency",
          "description": "Identifying bottlenecks, redundancies, and process inefficiencies that slow growth and increase costs",
          "keyQuestions": ["Where is time wasted?", "What processes scale poorly?", "What breaks under pressure?"]
        },
        {
          "area": "Manual Process Dependencies",
          "description": "Cataloging where spreadsheets, manual data entry, and human intervention create operational risk",
          "keyQuestions": ["What happens if key people leave?", "Where do errors occur?", "What processes don't scale?"]
        },
        {
          "area": "Risk & Compliance Elements",
          "description": "Understanding regulatory, financial, and operational risks that could inhibit business growth or create legal exposure",
          "keyQuestions": ["What keeps leadership awake at night?", "Where could the business fail an audit?", "What are the hidden risks?"]
        }
      ],
      "interconnectedNature": "These six areas are deeply interconnected. Poor data quality affects reporting, which impacts decision-making, which leads to manual workarounds, which create more risk. Our methodology maps these relationships to find the highest-impact interventions."
    },
    "interviewGroups": [
      {"groupLetter": "A", "title": "SVP Leadership", "participants": ["Jay", "Raf", "Christian"]},
      {"groupLetter": "B", "title": "VP Sales", "participants": ["Simon", "Rich", "Adrian"]},
      {"groupLetter": "C", "title": "Sales Directors/Managers", "participants": ["Marina", "Jim", "Sudipt", "Chihiro"]},
      {"groupLetter": "D", "title": "Marketing", "participants": ["Steve", "Kelly", "Summaiya"]},
      {"groupLetter": "E", "title": "Finance - Reporting Leads", "participants": ["Claire", "Jennifer"]},
      {"groupLetter": "F", "title": "Finance - NA Team", "participants": ["Eric", "Allison"]},
      {"groupLetter": "G", "title": "Customer Success", "participants": ["Matt", "Kevin", "James", "Jeff"]},
      {"groupLetter": "H", "title": "Sales Enablement", "participants": ["Mike", "Nate"]},
      {"groupLetter": "I", "title": "Systems & Operations", "participants": ["Lee"]},
      {"groupLetter": "J", "title": "Demand Gen & Ops", "participants": ["Andrew"]},
      {"groupLetter": "K", "title": "Partners", "participants": ["Fred"]},
      {"groupLetter": "L", "title": "Bid Managers", "participants": ["Julia", "Bert"]}
    ]
  },
  "gapsInProcess": [
    {"rank": 1, "title": "Financial Operations Crisis", "consensusPercent": 95, "problemStatement": "Misalignments in data making reporting impossible in HubSpot - regional managers cannot create unified dashboards. Manual revenue recognition requiring thousands of Excel rows monthly.", "keyQuotes": [{"speaker": "Eric Stopnik", "text": "We have at least two to three times a week. We have an issue where Salesforce and HubSpot really. HubSpot has not synced into Salesforce... every time I run a report in Salesforce, I'm. I know that it's not a hundred percent accurate."}]},
    {"rank": 2, "title": "Data Quality & Integration Breakdown", "consensusPercent": 90, "problemStatement": "Weak validation rules in HubSpot leading to downstream cleanup burden. Three-system data entry creating errors and duplicate account management with 30,000+ contacts requiring manual cleanup.", "keyQuotes": [{"speaker": "Christian Wirth", "text": "In North America, the head of sales in North America can't run a dashboard that has Canadian dollars and US dollars in it, which is a massive problem."}]},
    {"rank": 3, "title": "Operational Scalability Constraints", "consensusPercent": 85, "problemStatement": "Excel dependency epidemic for pricing, forecasting, and reporting. Manual ACV adjustments using 'fake product codes' and quote accuracy problems.", "keyQuotes": [{"speaker": "Lee Hughes", "text": "We have no pricing or price books or any kind of pricing in our CRM. It's all handled by Excel and it's all handled by a macro driven Excel."}]},
    {"rank": 4, "title": "System Fragmentation & Dual-CRM Complexity", "consensusPercent": 80, "problemStatement": "Operating two CRMs creates confusion, inefficiency, and 'black holes' in visibility.", "keyQuotes": [{"speaker": "Jay Cadman", "text": "We can't grow at the rate we're growing and even manage the pipeline we've got right now with the state of HubSpot as it is."}]},
    {"rank": 5, "title": "Commission Calculation Chaos", "consensusPercent": 75, "problemStatement": "Commission calculation chaos with no transparency for sales teams and complex manual processes.", "keyQuotes": [{"speaker": "Simon Orosz", "text": "I've been asking for such simple things and I still can't get it right... it takes me three hours to modify to get it into the shape that I need."}]},
    {"rank": 6, "title": "Invoicing & Financial Process Gaps", "consensusPercent": 70, "problemStatement": "Manual invoicing processes with no payment tracking or automated workflows.", "keyQuotes": [{"speaker": "Jeff Cito", "text": "I will say one word. Confidence. I have zero confidence in it... That's the scariest thing to me, because that's the cash register, right?"}]},
    {"rank": 7, "title": "Quote Accuracy Problems", "consensusPercent": 65, "problemStatement": "Quote accuracy problems with 10+ errors in 6 months and manual pricing processes.", "keyQuotes": [{"speaker": "Lee Hughes", "text": "The HubSpot validation is not very good and not necessarily configured."}]},
    {"rank": 8, "title": "Complex Deal & Renewal Management", "consensusPercent": 60, "problemStatement": "Cumbersome processes for managing renewals, ACV adjustments, and complex deal structures.", "keyQuotes": [{"speaker": "Matt Durham", "text": "Current renewal process requires 'giant and very complicated workflow.'"}]},
    {"rank": 9, "title": "Mobile & Field Operations Limitations", "consensusPercent": 55, "problemStatement": "Mobile application inadequacy for enterprise field operations affecting sales productivity.", "keyQuotes": [{"speaker": "Jim Aiello", "text": "I wish that there was a little bit better mobile application too... when I'm mobile... I have no idea if it's keeping track of that."}]},
    {"rank": 10, "title": "Change Management & Training Challenges", "consensusPercent": 50, "problemStatement": "Concerns about productivity loss and user adoption during any system transition.", "keyQuotes": [{"speaker": "Andrew Coulter", "text": "6-12 months of lost productivity and incomplete reporting... Sales rep resistance after just adopting HubSpot workflows."}]}
  ],
  "idealSituation": {
    "philosophy": "The ideal solution for IQGeo is implementing a Salesforce-centric architecture with HubSpot marketing preservation. This best-of-breed approach leverages each platform's strengths while addressing the operational crisis preventing scalable growth.",
    "recommendedSolution": {
      "title": "Salesforce-Centric Architecture with HubSpot Marketing Preservation",
      "components": [
        {
          "name": "Primary CRM: Salesforce Sales Cloud Enterprise",
          "purpose": "Deal management, forecasting, territory management, mobile functionality",
          "justification": "Only platform capable of handling complex enterprise reporting requirements, advanced validation, and complex partner management"
        },
        {
          "name": "Marketing Automation: HubSpot Marketing Hub (Preserved)",
          "purpose": "Marketing automation, website integration, lead nurturing",
          "justification": "Proven marketing automation excellence with deep website integration and established ROI"
        },
        {
          "name": "Configure-Price-Quote: Salesforce CPQ",
          "purpose": "Automated pricing, quote accuracy, contract amendments, renewal management",
          "justification": "Eliminates Excel price book dependency, provides approval workflows, handles partner pricing"
        },
        {
          "name": "Financial Reporting: Enhanced Solver Cloud + Power BI",
          "purpose": "Enterprise dashboards, commission automation, KKR reporting",
          "justification": "Maintains current FPA capabilities while adding real-time Salesforce integration"
        }
      ]
    },
    "identifiedGapsToClose": [
      "Multi-currency reporting and financial operations",
      "Automated pricing and quoting (CPQ)",
      "Commission calculation transparency",
      "Data quality and validation",
      "Partner channel management (PRM)",
      "Mobile field operations capability",
      "Integrated financial reporting for KKR compliance",
      "Elimination of Excel dependency epidemic"
    ]
  },
  "projectApproach": [
    {
      "phase": 0,
      "title": "Prerequisite: Assemble the Change & Execution Team",
      "objective": "To establish the dedicated resources, expertise, and executive authority required for success before implementation begins.",
      "activities": [
        "Appoint Executive Sponsor(s) to champion the project and enforce decisions.",
        "Assign a dedicated internal or external Project Lead with Salesforce enterprise implementation experience.",
        "Select Departmental Champions from each key business unit to assist with testing and drive adoption.",
        "Onboard a certified Salesforce implementation partner with CPQ and enterprise integration expertise."
      ],
      "keyDeliverable": "Chartered Project Team"
    },
    {
      "phase": 1,
      "title": "Discovery & Use Case Alignment",
      "objective": "To move beyond anecdotal evidence and create a definitive, universally agreed-upon map of IQGeo's current state and future needs.",
      "activities": [
        "Conduct Process Mapping Workshops for Lead-to-Cash, Quote-to-Invoice, Renewals, and Partner motions.",
        "Perform 'Pain Chain' Analysis on each process map to document every manual step, system limitation, and data sync error.",
        "Formalize and rank all critical use cases to create a data-driven priority list.",
        "Validate the Salesforce-centric architecture recommendation with detailed technical requirements."
      ],
      "keyDeliverable": "Business Requirements Document (BRD) - The undisputed source of truth for the project."
    },
    {
      "phase": 2,
      "title": "Solution Design & Technical Planning",
      "objective": "To translate the strategic recommendation into detailed technical implementation plans.",
      "activities": [
        "Design the Salesforce Sales Cloud Enterprise configuration including multi-currency setup and validation rules.",
        "Plan the HubSpot-Salesforce integration architecture maintaining marketing attribution while enabling deal migration.",
        "Configure Salesforce CPQ implementation roadmap to eliminate Excel pricing dependency.",
        "Design enhanced financial reporting integration between Salesforce, Solver Cloud, and Power BI."
      ],
      "keyDeliverable": "Solution Design Document (SDD) & Detailed Project Plan"
    },
    {
      "phase": 3,
      "title": "Execution & Implementation",
      "objective": "To build, test, and deploy the Salesforce-centric solution while preserving HubSpot marketing capabilities.",
      "activities": [
        "Configure Salesforce Sales Cloud Enterprise with multi-currency support and advanced validation.",
        "Implement Salesforce CPQ to eliminate Excel pricing dependencies.",
        "Build and test HubSpot-Salesforce integration maintaining marketing attribution.",
        "Migrate deal data and establish new financial reporting workflows.",
        "Conduct rigorous User Acceptance Testing (UAT) with Departmental Champions."
      ],
      "keyDeliverable": "Fully Configured and Tested Production Environment"
    }
  ],
  "changeManagement": {
    "guidingPhilosophy": "Shift the narrative from 'Tool vs. Tool' to 'One IQGeo'. This is about building the operational foundation for our next phase of growth. Every communication and action must reinforce this shared goal.",
    "pillars": [
      {"title": "Consistent & Transparent Communication", "objective": "To eliminate uncertainty, address fears head-on, and ensure every employee understands the 'why' behind the change.", "keyActivities": ["Develop a core narrative delivered by Executive Sponsors.", "Create a formal communication plan with a steady drumbeat of updates.", "Tailor all messages to the 'What's In It For Me?' (WIIFM) for each specific department."]},
      {"title": "Visible & Aligned Sponsorship", "objective": "To demonstrate unwavering commitment from the top down and empower champions at every level.", "keyActivities": ["Form a cross-functional Steering Committee of VPs/SVPs who speak with one voice.", "Empower Departmental Champions by involving them in design/testing and giving them authority.", "Leadership must actively manage dissent and lead the change."]},
      {"title": "Comprehensive Enablement & Support", "objective": "To equip every user with the skills, tools, and confidence to be successful in the new environment.", "keyActivities": ["Develop role-based 'Playbooks' that detail new end-to-end processes.", "Conduct 'Day-in-the-Life' training that simulates real-world scenarios.", "Establish a Hypercare 'War Room' for instant post-launch support to build confidence."]},
      {"title": "Feedback Loops & Quick Wins", "objective": "To make users feel heard, demonstrate progress, and build momentum by celebrating early successes.", "keyActivities": ["Establish formal feedback channels like Office Hours and surveys.", "Track and publicize adoption metrics to show momentum.", "Showcase quick wins (like a working dashboard in UAT) to make benefits tangible early."]}
    ]
  },
  "documentationArticles": [
    {"category": "Strategic", "title": "The IQGeo Salesforce-Centric Architecture: Single Source of Truth", "audience": ["Executive Leadership", "VPs"]},
    {"category": "Sales", "title": "Migrating from HubSpot to Salesforce: A Sales Rep's Complete Guide", "audience": ["Account Executives", "Sales Directors"]},
    {"category": "Marketing", "title": "Preserving Marketing Attribution: HubSpot-Salesforce Integration Guide", "audience": ["Marketing", "Demand Gen", "SDRs"]},
    {"category": "Finance & CS", "title": "Multi-Currency Reporting and Automated Commission Calculations", "audience": ["Finance", "Customer Success", "Sales"]},
    {"category": "Technical", "title": "Salesforce CPQ Implementation: Eliminating Excel Dependencies", "audience": ["Systems & Operations", "Sales Enablement"]}
  ],
  "faq": [
    {"category": "High-Level", "question": "Why are we moving deals to Salesforce instead of optimizing HubSpot?", "answer": "After comprehensive analysis, HubSpot fundamentally cannot support enterprise financial operations at scale. The 95% consensus on financial operations crisis - including impossible multi-currency reporting and manual revenue recognition requiring thousands of Excel rows - makes this a non-negotiable business requirement. Salesforce Sales Cloud Enterprise is the only platform capable of handling these requirements while we preserve HubSpot's proven marketing excellence."},
    {"category": "High-Level", "question": "What happens to our HubSpot investment and marketing workflows?", "answer": "We're preserving HubSpot Marketing Hub entirely. This is a best-of-breed approach that maintains your marketing automation excellence while solving the operational crisis. The integration will preserve lead-to-revenue attribution and all existing marketing workflows. You're not losing HubSpot - you're gaining enterprise-grade sales operations."},
    {"category": "Tactical", "question": "How will this solve our multi-currency reporting problems?", "answer": "Salesforce Sales Cloud Enterprise provides native multi-currency support with real-time currency conversion, unified global dashboards, and automated financial reporting. Regional managers will finally be able to create dashboards combining USD, CAD, EUR, and other currencies - something impossible in HubSpot. This addresses the 90% consensus problem that's currently crippling sales management."},
    {"category": "Tactical", "question": "What about our Excel pricing and commission chaos?", "answer": "Salesforce CPQ will eliminate the Excel dependency epidemic entirely. Automated pricing, quote accuracy, contract amendments, and transparent commission calculations will replace the current manual processes. No more 'fake product codes' for ACV adjustments, no more macro-driven Excel sheets, and no more commission calculation mysteries for sales teams."}
  ],
  "nextSteps": [
    {
      "step": 1,
      "title": "Formalize the Salesforce-Centric Decision & Secure the Mandate",
      "timeline": "Immediate: Next 2 Weeks",
      "action": "The executive leadership team must convene to review this strategic recommendation, formally accept the Salesforce-centric architecture with HubSpot marketing preservation, and secure the budget and resources for enterprise-grade implementation.",
      "outcome": "A single, unified, and non-negotiable directive that empowers the organization to move forward with confidence in the strategic direction."
    },
    {
      "step": 2,
      "title": "Assemble the Salesforce Implementation Team",
      "timeline": "Next 30 Days",
      "action": "Appoint the dedicated Project Lead with Salesforce enterprise experience, identify cross-functional Departmental Champions, and begin selection of a certified Salesforce implementation partner with CPQ and enterprise integration expertise.",
      "outcome": "A dedicated and accountable team with the specialized expertise to execute the Salesforce-centric transformation."
    },
    {
      "step": 3,
      "title": "Commission the Project & Initiate Discovery Phase",
      "timeline": "Next 45 Days",
      "action": "Officially charter the Salesforce implementation project, allocate the enterprise-grade budget, and authorize the team to begin detailed discovery focused on multi-currency requirements, CPQ configuration, and HubSpot integration architecture.",
      "outcome": "The project is formally underway with clear focus on solving the 95% consensus financial operations crisis through Salesforce Sales Cloud Enterprise implementation."
    }
  ],
  "sections": [
    { "id": "executive-summary", "title": "Executive Summary" },
    { "id": "history", "title": "History" },
    { "id": "methodology", "title": "Methodology" },
    { "id": "qualitative-analysis", "title": "Qualitative Analysis" },
    { "id": "ideal-situation", "title": "Ideal Situation" },
    { "id": "dilemma-overview", "title": "Dilemma Overview" },
    { "id": "project-approach", "title": "Project Approach" },
    { "id": "change-management", "title": "Change Management" },
    { "id": "documentation", "title": "Documentation" },
    { "id": "documentation-articles", "title": "Documentation Articles" },
    { "id": "faq", "title": "FAQ" },
    { "id": "next-steps", "title": "Next Steps" }
  ]
};