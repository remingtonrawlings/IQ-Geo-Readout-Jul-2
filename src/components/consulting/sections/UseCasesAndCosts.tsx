import React, { useState } from 'react';
import { readoutData } from '../../../data/iqgeoReadoutData';
import { Badge, BarChart, Boxes, CheckCircle, ChevronDown, ChevronUp, CircleDollarSign, ListChecks, Quote, Scale, Shield, Siren, SlidersHorizontal, User, UserCheck, UserX, XCircle, Users, AlertTriangle, TrendingUp, ShieldCheck, HardHat } from 'lucide-react';

const UseCasesAndCosts: React.FC = () => {
    const [expandedSections, setExpandedSections] = useState({
        useCases: false,
        platformAssessment: false,
        costAnalysis: false,
        technicalSpecs: false,
        advocateReviews: true,
    });
    const [expandedAdvocate, setExpandedAdvocate] = useState<string | null>('salesforce');

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const toggleAdvocate = (advocate: string) => {
        setExpandedAdvocate(expandedAdvocate === advocate ? null : advocate);
    };

    const getPriorityClass = (priority: string) => {
        if (priority.includes('Critical')) return 'bg-red-100 text-red-800 border-red-300';
        if (priority.includes('Medium')) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
        return 'bg-gray-100 text-gray-800 border-gray-300';
    };

    const getRatingIcon = (rating: 'Green' | 'Yellow' | 'Red') => {
        switch (rating) {
            case 'Green': return <CheckCircle className="text-green-500" size={24} />;
            case 'Yellow': return <AlertTriangle className="text-yellow-500" size={24} />;
            case 'Red': return <XCircle className="text-red-500" size={24} />;
            default: return null;
        }
    };
    
    const getRatingBg = (rating: 'Green' | 'Yellow' | 'Red') => {
        switch (rating) {
            case 'Green': return 'bg-green-50 border-green-200';
            case 'Yellow': return 'bg-yellow-50 border-yellow-200';
            case 'Red': return 'bg-red-50 border-red-200';
            default: return 'bg-gray-50';
        }
    };
    
    const data = readoutData.useCasesAndCosts;

    const scorecardThemes = [
        { 
            title: "Financial Control & KKR Compliance", 
            icon: ShieldCheck,
            useCaseRanks: [2, 3, 5] 
        },
        { 
            title: "GTM Scalability & Efficiency", 
            icon: TrendingUp,
            useCaseRanks: [1, 4, 7, 10, 8] 
        },
        { 
            title: "Implementation Risk & Change", 
            icon: HardHat,
            useCaseRanks: [12] 
        },
    ];

    const getThemeRatings = (ranks: number[]) => {
        const ratings = { hubspot: 'Green', salesforce: 'Green' };
        let hsScore = 0;
        let sfScore = 0;

        ranks.forEach(rank => {
            const assessment = data.platformAssessment.find(p => p.rank === rank);
            if(assessment) {
                if(assessment.hubspot.rating === 'Red') hsScore += 2;
                if(assessment.hubspot.rating === 'Yellow') hsScore += 1;
                if(assessment.salesforce.rating === 'Red') sfScore += 2;
                if(assessment.salesforce.rating === 'Yellow') sfScore += 1;
            }
        });

        if (hsScore > ranks.length) ratings.hubspot = 'Red';
        else if (hsScore > 0) ratings.hubspot = 'Yellow';

        if (sfScore > ranks.length) ratings.salesforce = 'Red';
        else if (sfScore > 0) ratings.salesforce = 'Yellow';
        
        return ratings as { hubspot: 'Green' | 'Yellow' | 'Red', salesforce: 'Green' | 'Yellow' | 'Red' };
    };

    const CollapsibleCard: React.FC<{
        title: string;
        sectionKey: keyof typeof expandedSections;
        children: React.ReactNode;
        icon: React.ElementType;
    }> = ({ title, sectionKey, children, icon: Icon }) => (
        <div className="border border-gray-200 rounded-lg">
            <button onClick={() => toggleSection(sectionKey)} className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <Icon className="text-blue-600" size={24} />
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                </div>
                {expandedSections[sectionKey] ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedSections[sectionKey] && (
                <div className="p-6 border-t border-gray-200">
                    {children}
                </div>
            )}
        </div>
    );


    return (
        <section id="use-cases-and-costs" className="scroll-mt-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.title}</h1>
                <p className="text-sm text-gray-500 mb-6">Version: Final | Date: July 10, 2025 | Author: Gemini</p>
                
                {/* --- Executive Dashboard --- */}
                <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8 mb-12">
                    <h2 className="text-2xl font-bold text-center text-slate-800 mb-8">The Path to Scalable Operations: Head-to-Head Analysis</h2>

                    {/* TCO Chart */}
                    <div className="mb-12">
                        <h3 className="font-semibold text-center text-slate-700 mb-4">3-Year Total Cost of Ownership (TCO) Comparison</h3>
                        <div className="space-y-4 max-w-4xl mx-auto">
                            {data.costAnalysis.scenarios.map(scenario => (
                                <div key={scenario.name} className="flex items-center">
                                    <div className="w-48 text-right pr-4 text-sm font-medium text-slate-600 shrink-0">{scenario.name}</div>
                                    <div className="flex-grow bg-slate-200 rounded-full h-8 flex items-center shadow-inner">
                                        {scenario.name.includes("State") && (
                                             <div className="bg-red-400 h-full rounded-l-full flex items-center justify-center text-white text-xs font-bold px-2" style={{width: '75%'}}>Hidden Costs</div>
                                        )}
                                        {scenario.name.includes("Upgrade") && (
                                             <div className="bg-orange-400 h-full rounded-l-full flex items-center justify-center text-white text-xs font-bold px-2" style={{width: '60%'}}></div>
                                        )}
                                         {scenario.name.includes("Transform") && (
                                             <div className="bg-blue-500 h-full rounded-l-full flex items-center justify-center text-white text-xs font-bold px-2" style={{width: '85%'}}></div>
                                        )}
                                    </div>
                                    <div className="w-32 text-left pl-4 text-sm font-bold text-slate-800">{scenario.total.split('-')[0]}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recommendation Scorecard */}
                    <div>
                        <h3 className="font-semibold text-center text-slate-700 mb-4">Recommendation Scorecard</h3>
                        <div className="bg-white rounded-lg shadow-md border border-slate-300">
                            <div className="grid grid-cols-3 font-semibold text-slate-800 border-b border-slate-300">
                                <div className="p-4">Executive Theme</div>
                                <div className="p-4 text-center border-l border-slate-300">HubSpot Enterprise Path</div>
                                <div className="p-4 text-center border-l border-slate-300">Salesforce Transformation</div>
                            </div>
                            {scorecardThemes.map(theme => {
                                const ratings = getThemeRatings(theme.useCaseRanks);
                                const Icon = theme.icon;
                                return (
                                <div key={theme.title} className="grid grid-cols-3 items-center">
                                    <div className="p-4 flex items-center space-x-3">
                                        <Icon className="text-slate-500 w-6 h-6 shrink-0" />
                                        <span className="font-medium text-slate-700">{theme.title}</span>
                                    </div>
                                    <div className="p-4 flex justify-center border-l border-slate-300">{getRatingIcon(ratings.hubspot)}</div>
                                    <div className="p-4 flex justify-center border-l border-slate-300">{getRatingIcon(ratings.salesforce)}</div>
                                </div>
                                );
                            })}
                        </div>
                         <div className="flex justify-center space-x-6 mt-4 text-sm text-slate-600">
                            <div className="flex items-center space-x-2"><CheckCircle className="text-green-500"/> <span>Solves</span></div>
                            <div className="flex items-center space-x-2"><AlertTriangle className="text-yellow-500"/> <span>Partial / Workaround</span></div>
                            <div className="flex items-center space-x-2"><XCircle className="text-red-500"/> <span>Fails to Solve</span></div>
                        </div>
                    </div>
                </div>
                {/* --- End Executive Dashboard --- */}


                {/* Collapsible Detailed Sections */}
                <div className="space-y-6">

                <CollapsibleCard title="Advocate Reviews & Recommendations" sectionKey="advocateReviews" icon={Users}>
                    <div className="space-y-6">
                        {/* Salesforce Advocate */}
                        <div className="border-2 border-blue-300 rounded-lg bg-blue-50">
                             <button onClick={() => toggleAdvocate('salesforce')} className="w-full p-6 text-left hover:bg-blue-100 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <UserCheck className="text-blue-600" size={28}/>
                                        <h3 className="text-2xl font-bold text-blue-800">{data.advocateReviews.salesforce.title}</h3>
                                    </div>
                                    {expandedAdvocate === 'salesforce' ? <ChevronUp size={24} className="text-blue-600"/> : <ChevronDown size={24} className="text-blue-600"/>}
                                </div>
                            </button>
                            {expandedAdvocate === 'salesforce' && (
                                <div className="p-6 bg-white border-t-2 border-blue-300">
                                    <div className="bg-blue-100 border border-blue-200 p-4 rounded-lg mb-6">
                                        <h4 className="font-bold text-blue-900 mb-2">{data.advocateReviews.salesforce.executiveSummary.bluf}</h4>
                                        <div className="space-y-2 text-sm text-blue-900/80">
                                            {data.advocateReviews.salesforce.executiveSummary.reasoning.map((p, i) => <p key={i}>{p}</p>)}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* HubSpot Advocate */}
                        <div className="border-2 border-orange-300 rounded-lg bg-orange-50">
                            <button onClick={() => toggleAdvocate('hubspot')} className="w-full p-6 text-left hover:bg-orange-100 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <UserX className="text-orange-600" size={28}/>
                                        <h3 className="text-2xl font-bold text-orange-800">{data.advocateReviews.hubspot.title}</h3>
                                    </div>
                                    {expandedAdvocate === 'hubspot' ? <ChevronUp size={24} className="text-orange-600"/> : <ChevronDown size={24} className="text-orange-600"/>}
                                </div>
                            </button>
                            {expandedAdvocate === 'hubspot' && (
                               <div className="p-6 bg-white border-t-2 border-orange-300">
                                    <div className="bg-orange-100 border border-orange-200 p-4 rounded-lg mb-6">
                                        <h4 className="font-bold text-orange-900 mb-2">{data.advocateReviews.hubspot.executiveSummary.bluf}</h4>
                                        <div className="space-y-2 text-sm text-orange-900/80">
                                            {data.advocateReviews.hubspot.executiveSummary.reasoning.map((p, i) => <p key={i}>{p}</p>)}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </CollapsibleCard>

                <CollapsibleCard title="Use Case & Requirements Catalog" sectionKey="useCases" icon={ListChecks}>
                    <div className="space-y-6">
                        {data.useCases.map(uc => (
                            <div key={uc.rank} className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-800">Rank {uc.rank}: {uc.title}</h3>
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getPriorityClass(uc.priority)}`}>{uc.priority}</span>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <User className="text-gray-500 mt-1" size={18}/>
                                        <p className="flex-1 text-gray-700"><strong>User Story:</strong> {uc.userStory}</p>
                                    </div>
                                    <blockquote className="bg-red-50 p-4 border-l-4 border-red-500 italic text-gray-700">
                                        <Quote className="text-red-300 w-5 h-5 mb-2"/>
                                        "{uc.currentPain}"
                                    </blockquote>
                                    <div className="flex items-start space-x-3">
                                        <BarChart className="text-gray-500 mt-1" size={18}/>
                                        <p className="flex-1 text-gray-700"><strong>Business Impact:</strong> {uc.businessImpact}</p>
                                    </div>
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800`}>
                                        Consensus: {uc.consensus}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CollapsibleCard>

                <CollapsibleCard title="Platform Capability Assessment" sectionKey="platformAssessment" icon={Scale}>
                     <div className="space-y-4">
                        {data.platformAssessment.map(pa => (
                            <div key={pa.rank} className="border border-gray-200 rounded-lg">
                                <div className="bg-gray-100 p-4 border-b">
                                    <h3 className="text-md font-semibold text-gray-800">Rank {pa.rank}: {pa.title}</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className={`p-6 border-r border-gray-200 ${getRatingBg(pa.hubspot.rating)}`}>
                                        <h4 className="font-semibold text-lg mb-3 text-gray-800">HubSpot Assessment</h4>
                                        <div className="flex items-center space-x-3 mb-3">
                                            {getRatingIcon(pa.hubspot.rating)}
                                            <span className="font-bold text-lg">{pa.hubspot.rating}</span>
                                        </div>
                                        <p className="text-gray-700 text-sm">{pa.hubspot.assessment}</p>
                                    </div>
                                    <div className={`p-6 ${getRatingBg(pa.salesforce.rating)}`}>
                                        <h4 className="font-semibold text-lg mb-3 text-gray-800">Salesforce Assessment</h4>
                                        <div className="flex items-center space-x-3 mb-3">
                                            {getRatingIcon(pa.salesforce.rating)}
                                            <span className="font-bold text-lg">{pa.salesforce.rating}</span>
                                        </div>
                                        <p className="text-gray-700 text-sm">{pa.salesforce.assessment}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CollapsibleCard>

                <CollapsibleCard title="Cost Analysis & 3-Year TCO" sectionKey="costAnalysis" icon={CircleDollarSign}>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-8">
                        {data.costAnalysis.scenarios.map(scenario => (
                            <div key={scenario.name} className="border border-gray-300 rounded-lg bg-white shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-900 p-4 bg-gray-100 border-b border-gray-300 rounded-t-lg">{scenario.name}</h3>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-center">
                                        <div>
                                            <p className="text-sm text-gray-500">3-Yr Licensing</p>
                                            <p className="text-2xl font-bold text-gray-800">{scenario.licensing.split('(')[0]}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Hidden/Additional Costs</p>
                                            <p className="text-2xl font-bold text-red-600">{scenario.hiddenCosts}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Total Estimated Cost</p>
                                            <p className="text-2xl font-bold text-blue-600">{scenario.total}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                            <h4 className="font-semibold text-green-800 mb-2">Pros</h4>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                {scenario.pros.map((pro, i) => <li key={i} className="flex items-start"><CheckCircle className="text-green-500 w-4 h-4 mr-2 mt-0.5 shrink-0"/>{pro}</li>)}
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                            <h4 className="font-semibold text-red-800 mb-2">Cons</h4>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                {scenario.cons.map((con, i) => <li key={i} className="flex items-start"><XCircle className="text-red-500 w-4 h-4 mr-2 mt-0.5 shrink-0"/>{con}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">Key Insights</h4>
                            <ul className="space-y-2 text-gray-700">
                                {data.costAnalysis.insights.map((insight, i) => <li key={i} className="flex items-start"><Badge className="text-blue-500 w-4 h-4 mr-2 mt-0.5 shrink-0"/>{insight}</li>)}
                            </ul>
                        </div>
                    </div>
                </CollapsibleCard>
                
                </div>

            </div>
        </section>
    );
};

export default UseCasesAndCosts;
