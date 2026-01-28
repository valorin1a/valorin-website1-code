import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, AlertCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

// Data Models
type Section = {
  id: string;
  title: string;
  questions: Question[];
};

type Question = {
  id: string;
  text: string;
};

const SECTIONS: Section[] = [
  {
    id: 'A',
    title: 'Fraud & Money Safety',
    questions: [
      { id: 'F1', text: 'Dual approval for bank payments exists and is always used.' },
      { id: 'F2', text: 'One person cannot create vendor + approve payment.' },
      { id: 'F3', text: 'Vendor bank detail changes require independent verification.' },
      { id: 'F4', text: 'Manual journal entries require approval + attachments.' },
      { id: 'F5', text: 'Credit notes/write-offs need independent approval.' },
      { id: 'F6', text: 'Fraud would be detected within 7 days through controls/alerts.' },
    ]
  },
  {
    id: 'B',
    title: 'Internal Controls & Process Discipline',
    questions: [
      { id: 'C1', text: 'Approval limits (DOA) are written and followed.' },
      { id: 'C2', text: 'Key finance processes are documented (AP/AR/Payroll/Inventory).' },
      { id: 'C3', text: 'Overrides are logged and reviewed.' },
      { id: 'C4', text: 'Exceptions (price overrides, GRN mismatch, rush payments) are reviewed.' },
      { id: 'C5', text: 'Controls still work if a key finance person is absent.' },
    ]
  },
  {
    id: 'C',
    title: 'Cash Flow & Working Capital',
    questions: [
      { id: 'W1', text: '13-week cash forecast exists and is updated at least weekly.' },
      { id: 'W2', text: 'Collections process exists with escalation and dispute log.' },
      { id: 'W3', text: 'Customer credit limits are set and monitored.' },
      { id: 'W4', text: 'Inventory aging/slow moving is reviewed monthly with actions.' },
      { id: 'W5', text: 'AP due dates are planned (no surprise payments).' },
    ]
  },
  {
    id: 'D',
    title: 'Reporting & Decision Visibility',
    questions: [
      { id: 'R1', text: 'Month-end close is achieved within defined timeline.' },
      { id: 'R2', text: 'Management reports are consistent each month (definitions don’t change).' },
      { id: 'R3', text: 'Gross margin visibility exists by product/customer/project.' },
      { id: 'R4', text: 'Variance analysis is done with owners and deadlines.' },
      { id: 'R5', text: 'CEO receives “early warnings” not late surprises.' },
    ]
  },
  {
    id: 'E',
    title: 'Finance Team Effectiveness',
    questions: [
      { id: 'T1', text: 'Finance team proactively flags risks, not just books entries.' },
      { id: 'T2', text: 'Errors are detected internally before auditor/tax authority.' },
      { id: 'T3', text: 'Work is not dependent on one person (backup exists).' },
      { id: 'T4', text: 'Finance can challenge operations with data (credibility exists).' },
    ]
  },
  {
    id: 'F',
    title: 'Systems, Data & Confidentiality',
    questions: [
      { id: 'S1', text: 'ERP is the single source of truth (no parallel “shadow” spreadsheets).' },
      { id: 'S2', text: 'User access is role-based and reviewed periodically.' },
      { id: 'S3', text: 'Sensitive folders (payroll/banking/tax) are access-restricted.' },
      { id: 'S4', text: 'Backups exist and recovery is tested.' },
      { id: 'S5', text: 'Incident plan exists for fraud suspicion or data leak.' },
    ]
  }
];

type Answer = {
  exists: boolean | null;
  score: number | null; // 1-5
};

type LeadData = {
  name: string;
  email: string;
  company?: string;
  sector?: string;
  size?: string;
  erp?: string;
  consent: boolean;
};

type Status = 'Strong' | 'Stable' | 'At Risk' | 'Critical';

type AssessmentResult = {
  indexes: {
    FRI: number;
    DRI: number;
    FEI: number;
  };
  classifications: {
    FRI: Status;
    DRI: Status;
    FEI: Status;
  };
  criticalFlags: string[];
  topActions: { qid: string; text: string; action: string }[];
  strongAreas: { qid: string; text: string }[];
};

// Action Mappings (Part 3)
const QUESTION_ACTIONS: Record<string, string> = {
    // Fraud & Money Safety
    'F1': 'Enforce dual approval for all bank releases and lock token access to authorized roles only.',
    'F2': 'Separate vendor creation from payment approval; restrict vendor master edits and log all changes.',
    'F3': 'Implement independent verification for vendor bank changes (call-back + approval evidence).',
    'F4': 'Require approval + attachments for all manual journals; review a monthly journal exception report.',
    'F5': 'Introduce independent approval for credit notes/write-offs with monthly leakage review.',
    'F6': 'Set weekly control alerts: unusual payments, new vendors, duplicate invoices, override logs.',

    // Internal Controls & Process Discipline
    'C1': 'Publish a written approval matrix (DOA) and enforce it across purchasing, discounts, and payments.',
    'C2': 'Document AP/AR/payroll/inventory SOPs and train backups to reduce key-person risk.',
    'C3': 'Create an override log and review exceptions weekly with management sign-off.',
    'C4': 'Introduce an exceptions dashboard: GRN mismatches, rush payments, price overrides, credit note spikes.',
    'C5': 'Assign backups for all key finance roles; test continuity with monthly rotation.',

    // Cash Flow & Working Capital
    'W1': 'Deploy a rolling 13-week cash forecast updated weekly with AR/AP/inventory inputs.',
    'W2': 'Create collections cadence: aging review, dispute log, escalation ladder, weekly targets.',
    'W3': 'Set credit limits, enforce approvals for exceptions, and review top exposures weekly.',
    'W4': 'Review slow-moving inventory monthly; agree liquidation/production stops and provisioning rules.',
    'W5': 'Implement a payment plan with due-date visibility and avoid surprise cash drains.',

    // Reporting & Decision Visibility
    'R1': 'Set close timeline and reconcile key balance sheets monthly (bank/AR/AP/inventory/intercompany).',
    'R2': 'Standardize MIS definitions and lock templates so numbers remain consistent month to month.',
    'R3': 'Build margin reporting by product/customer/project; validate costing and discount governance.',
    'R4': 'Run monthly variance review with owners and deadlines; track closure of actions.',
    'R5': 'Create early-warning indicators: AR overdue, margin drops, inventory aging, cash forecast variance.',

    // Finance Team Effectiveness
    'T1': 'Define finance weekly risk report: cash, AR, margin, exceptions, control breaches.',
    'T2': 'Introduce internal review checkpoints before filing returns/audits; track recurring errors.',
    'T3': 'Reduce dependency: train backups, document processes, and move critical tasks into ERP workflows.',
    'T4': 'Create a finance-to-operations KPI cadence with shared ownership and data-based accountability.',

    // Systems, Data & Confidentiality
    'S1': 'Make ERP the primary source; eliminate parallel spreadsheets or introduce governance and version control.',
    'S2': 'Review user access quarterly; enforce maker-checker and remove dormant users immediately.',
    'S3': 'Restrict finance folders and confidential files; implement least privilege access controls.',
    'S4': 'Test backups and recovery quarterly; document recovery steps.',
    'S5': 'Create a fraud/data incident response checklist with roles, escalation and evidence preservation steps.'
};

const FinanceHealthCheckupAssessment = () => {
  const { toast } = useToast();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>({
    name: '',
    email: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [results, setResults] = useState<AssessmentResult | null>(null);

  // Helper to get score
  const getScore = (qid: string, currentAnswers: Record<string, Answer>) => {
    const ans = currentAnswers[qid];
    if (!ans) return 1; // Default to 1 if missing
    if (ans.exists === false) return 1;
    return ans.score || 1;
  };

  const calculateResults = (currentAnswers: Record<string, Answer>): AssessmentResult => {
      // 1. Calculate Section Averages
      const sectionAvgs: Record<string, number> = {};
      SECTIONS.forEach(section => {
          const total = section.questions.reduce((sum, q) => sum + getScore(q.id, currentAnswers), 0);
          sectionAvgs[section.id] = Number((total / section.questions.length).toFixed(1));
      });

      // 2. Compute Indexes
      const FRI = Number(((sectionAvgs['A'] * 0.45) + (sectionAvgs['B'] * 0.30) + (sectionAvgs['F'] * 0.25)).toFixed(1));
      const DRI = Number(((sectionAvgs['D'] * 0.45) + (sectionAvgs['C'] * 0.35) + (sectionAvgs['F'] * 0.20)).toFixed(1));
      const FEI = Number(((sectionAvgs['E'] * 0.40) + (sectionAvgs['B'] * 0.30) + (sectionAvgs['D'] * 0.30)).toFixed(1));

      // 3. Classifications
      const getStatus = (score: number): Status => {
          if (score >= 4.0) return 'Strong';
          if (score >= 3.2) return 'Stable';
          if (score >= 2.4) return 'At Risk';
          return 'Critical';
      };

      // 4. Critical Flags
      const criticalFlags: string[] = [];
      const criticalQs = ['F1', 'F2', 'F3'];
      const hasCriticalGap = criticalQs.some(qid => getScore(qid, currentAnswers) === 1);
      if (hasCriticalGap) {
          criticalFlags.push("Critical Money Safety Gap");
      }

      // 5. Top Actions (Lowest Scores)
      const allQsWithScores = SECTIONS.flatMap(s => s.questions.map(q => ({
          ...q,
          score: getScore(q.id, currentAnswers)
      })));
      
      const sortedByScore = [...allQsWithScores].sort((a, b) => a.score - b.score);
      const top5Lowest = sortedByScore.slice(0, 5);
      
      const topActions = top5Lowest.map(q => ({
          qid: q.id,
          text: q.text,
          action: QUESTION_ACTIONS[q.id] || `Improvement needed: ${q.text}`
      }));

      // 6. Strong Areas
      const strongAreas = allQsWithScores
          .filter(q => q.score >= 4)
          .slice(0, 3) // Top 3
          .map(q => ({ qid: q.id, text: q.text }));

      return {
          indexes: { FRI, DRI, FEI },
          classifications: {
              FRI: getStatus(FRI),
              DRI: getStatus(DRI),
              FEI: getStatus(FEI)
          },
          criticalFlags,
          topActions,
          strongAreas
      };
  };

  // Flatten questions for easier navigation if doing 1 by 1, but section based is better for context
  // Let's do Section by Section as it's cleaner to group related questions.
  // The user said "one question per screen (recommended) or max 3".
  // Let's do 1 question at a time for the "Mobile-first" feel.
  
  const allQuestions = SECTIONS.flatMap(s => s.questions.map(q => ({ ...q, sectionTitle: s.title })));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = allQuestions[currentQuestionIndex];
  
  const progress = ((currentQuestionIndex) / allQuestions.length) * 100;

  const handleAnswer = (exists: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        exists,
        score: exists ? (prev[currentQuestion.id]?.score || null) : 1 // Auto-set score to 1 if No
      }
    }));
  };

  const handleScore = (score: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        score
      }
    }));
  };

  const canProceed = () => {
    const ans = answers[currentQuestion.id];
    if (!ans) return false;
    if (ans.exists === false) return true; // No -> Score 1 (auto)
    if (ans.exists === true && ans.score) return true; // Yes + Score selected
    return false;
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const prevQuestion = () => {
    if (showLeadForm) {
      setShowLeadForm(false);
    } else if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const submitAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadData.consent) {
        toast({
            title: "Consent Required",
            description: "Please agree to be contacted to proceed.",
            variant: "destructive"
        });
        return;
    }
    
    setIsSubmitting(true);

    try {
        const calculatedResults = calculateResults(answers);
        
        // Prepare email params
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_ASSESSMENT || "";
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ASSESSMENT || "";
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_ASSESSMENT || "";

        const answersFormatted = Object.entries(answers).map(([qid, ans]) => {
            return `${qid}: Exists=${ans.exists ? 'Yes' : 'No'}, Score=${ans.score}`;
        }).join('\n');

        const resultsSummary = `
Indexes:
FRI: ${calculatedResults.indexes.FRI} (${calculatedResults.classifications.FRI})
DRI: ${calculatedResults.indexes.DRI} (${calculatedResults.classifications.DRI})
FEI: ${calculatedResults.indexes.FEI} (${calculatedResults.classifications.FEI})

Critical Flags: ${calculatedResults.criticalFlags.join(', ') || 'None'}
        `;

        const emailParams = {
            to_email: "advisory@valorin.uk",
            reply_to: leadData.email,
            name: leadData.name,
            company: leadData.company || "N/A",
            email: leadData.email,
            phone: "N/A",
            role: "N/A",
            revenue_range: leadData.size || "N/A",
            nda_text: "",
            submitted_at: new Date().toISOString(),
            source_url: window.location.href,
            assessment_data: answersFormatted + "\n\n=== RESULTS ===\n" + resultsSummary,
            sector: leadData.sector,
            erp: leadData.erp
        };

        await emailjs.send(serviceId, templateId, emailParams, { publicKey });

        setResults(calculatedResults);
        toast({
            title: "Assessment Completed",
            description: "Your results are ready.",
        });

    } catch (error) {
        console.error("Submission error:", error);
        toast({
            title: "Submission Failed",
            description: "Please try again later.",
            variant: "destructive"
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  if (results) {
    const STATUS_TEXT = {
        FRI: {
            Strong: "Core money controls appear disciplined and difficult to bypass.",
            Stable: "Controls exist, but consistency and monitoring should be strengthened.",
            'At Risk': "There are gaps that can allow misuse without early detection.",
            Critical: "Immediate control fixes are recommended to protect cash and data."
        },
        DRI: {
            Strong: "You are positioned to make fast decisions with reliable visibility.",
            Stable: "You have visibility, but some decisions may rely on delayed numbers.",
            'At Risk': "Decisions are likely being made with late or incomplete information.",
            Critical: "Limited visibility increases surprises and slows response to issues."
        },
        FEI: {
            Strong: "Finance function appears proactive, structured, and scalable.",
            Stable: "Basic execution is present, but effectiveness depends on key people.",
            'At Risk': "Execution appears reactive; risk control and reporting discipline need upgrades.",
            Critical: "High dependency and weak routines may expose the business to errors and loss."
        }
    };

    const STATUS_COLORS = {
        Strong: "text-green-600 bg-green-50 border-green-200",
        Stable: "text-blue-600 bg-blue-50 border-blue-200",
        'At Risk': "text-amber-600 bg-amber-50 border-amber-200",
        Critical: "text-red-600 bg-red-50 border-red-200"
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 animate-in fade-in duration-500">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-serif mb-2">Your Finance Health Snapshot</h2>
                <p className="text-muted-foreground">Submitted successfully. Your results below are generated instantly from your inputs.</p>
            </div>

            {/* Critical Flags */}
            {results.criticalFlags.length > 0 && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-bold text-red-800">Critical Attention Required</h3>
                        <ul className="list-disc list-inside text-red-700 mt-1">
                            {results.criticalFlags.map((flag, i) => (
                                <li key={i}>{flag}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* FRI Card */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg">Fraud-Resistance</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${STATUS_COLORS[results.classifications.FRI]}`}>
                            {results.classifications.FRI.toUpperCase()}
                        </span>
                    </div>
                    <div className="text-4xl font-bold font-serif mb-4 text-primary">
                        {results.indexes.FRI}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {STATUS_TEXT.FRI[results.classifications.FRI]}
                    </p>
                </div>

                {/* DRI Card */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg">Decision Readiness</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${STATUS_COLORS[results.classifications.DRI]}`}>
                            {results.classifications.DRI.toUpperCase()}
                        </span>
                    </div>
                    <div className="text-4xl font-bold font-serif mb-4 text-primary">
                        {results.indexes.DRI}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {STATUS_TEXT.DRI[results.classifications.DRI]}
                    </p>
                </div>

                {/* FEI Card */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg">Finance Execution</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${STATUS_COLORS[results.classifications.FEI]}`}>
                            {results.classifications.FEI.toUpperCase()}
                        </span>
                    </div>
                    <div className="text-4xl font-bold font-serif mb-4 text-primary">
                        {results.indexes.FEI}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {STATUS_TEXT.FEI[results.classifications.FEI]}
                    </p>
                </div>
            </div>

            {/* Top 5 Actions */}
            <div className="mb-12">
                <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Your Top Priority Actions (Next 30 Days)
                </h3>
                <div className="space-y-4">
                    {results.topActions.map((item, i) => (
                        <div key={i} className="bg-card border border-border p-4 rounded-lg flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                                {i + 1}
                            </span>
                            <div>
                                <p className="font-medium text-foreground mb-1">{item.action}</p>
                                <p className="text-xs text-muted-foreground">Related to: {item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Areas Under Control */}
            {results.strongAreas.length > 0 && (
                <div className="mb-12">
                    <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        Areas That Look Strong
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {results.strongAreas.map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-lg">
                                <p className="text-sm text-white font-medium">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center mb-8">
                <h3 className="text-2xl font-bold font-serif mb-2">Want this converted into a practical improvement plan?</h3>
                <p className="text-muted-foreground mb-6">We can translate these findings into a 30/60/90-day control + MIS improvement plan.</p>
                <a href="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3 rounded-lg">
                    Request Confidential CFO Review (NDA-ready) <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-center text-muted-foreground max-w-xl mx-auto">
                This diagnostic provides management insight only and does not guarantee fraud prevention, audit outcomes, or legal compliance.
            </p>
        </div>
    );
  }

  if (showLeadForm) {
    return (
        <div className="max-w-xl mx-auto py-12 px-4">
            <button onClick={prevQuestion} className="text-sm text-muted-foreground hover:text-primary mb-6 flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Back to questions
            </button>
            
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold font-serif mb-2">Almost Done!</h2>
                <p className="text-muted-foreground mb-6">Enter your details to generate your comprehensive report.</p>
                
                <form onSubmit={submitAssessment} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
                        <input 
                            required
                            type="text" 
                            className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-1 focus:ring-primary outline-none"
                            value={leadData.name}
                            onChange={e => setLeadData({...leadData, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address <span className="text-red-500">*</span></label>
                        <input 
                            required
                            type="email" 
                            className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-1 focus:ring-primary outline-none"
                            value={leadData.email}
                            onChange={e => setLeadData({...leadData, email: e.target.value})}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Company Name</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-1 focus:ring-primary outline-none"
                                value={leadData.company}
                                onChange={e => setLeadData({...leadData, company: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Sector</label>
                            <select 
                                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-1 focus:ring-primary outline-none"
                                value={leadData.sector}
                                onChange={e => setLeadData({...leadData, sector: e.target.value})}
                            >
                                <option value="">Select...</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Trading">Trading</option>
                                <option value="Services">Services</option>
                                <option value="Mixed">Mixed</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                         <div>
                            <label className="block text-sm font-medium mb-1">Company Size</label>
                            <select 
                                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-1 focus:ring-primary outline-none"
                                value={leadData.size}
                                onChange={e => setLeadData({...leadData, size: e.target.value})}
                            >
                                <option value="">Select...</option>
                                <option value="1-10">1–10 employees</option>
                                <option value="11-50">11–50 employees</option>
                                <option value="51-200">51–200 employees</option>
                                <option value="200+">200+ employees</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">ERP/System</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Odoo, Xero"
                                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-1 focus:ring-primary outline-none"
                                value={leadData.erp}
                                onChange={e => setLeadData({...leadData, erp: e.target.value})}
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-2 pt-2">
                        <input 
                            type="checkbox" 
                            id="consent"
                            className="mt-1"
                            checked={leadData.consent}
                            onChange={e => setLeadData({...leadData, consent: e.target.checked})}
                        />
                        <label htmlFor="consent" className="text-sm text-muted-foreground">
                            I agree to be contacted regarding my assessment results.
                        </label>
                    </div>

                    <button 
                        disabled={isSubmitting}
                        className="w-full btn-gold py-3 rounded-lg font-medium text-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Submitting..." : "Get My Results"}
                    </button>
                </form>
            </div>
        </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 md:py-12 px-4 min-h-[500px] md:min-h-[600px] flex flex-col">
      {/* Header / Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>{currentQuestion.sectionTitle}</span>
            <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Effectiveness Scale Helper */}
      <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
        <details className="group">
            <summary className="flex items-center justify-between cursor-pointer font-medium text-primary text-sm">
                <span>Guide: Effectiveness Scale (1–5)</span>
                <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground pl-4 border-l-2 border-primary/20">
                <li><strong className="text-foreground">1</strong> = Not in place</li>
                <li><strong className="text-foreground">2</strong> = Exists but weak</li>
                <li><strong className="text-foreground">3</strong> = Defined but inconsistent</li>
                <li><strong className="text-foreground">4</strong> = Working well</li>
                <li><strong className="text-foreground">5</strong> = Strong & monitored</li>
            </ul>
        </details>
      </div>

      {/* Question Card */}
      <div className="flex-1 flex flex-col">
        <div className="mb-8">
            <span className="text-sm font-medium text-primary/80 mb-2 block">Question {currentQuestionIndex + 1} of {allQuestions.length}</span>
            <h2 className="text-2xl font-serif font-bold text-foreground leading-tight">
                {currentQuestion.text}
            </h2>
        </div>

        <div className="space-y-6">
            {/* Part 1: Existence */}
            <div>
                <label className="block text-sm font-medium mb-3">Does this exist in your business?</label>
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={() => handleAnswer(true)}
                        className={`p-4 rounded-xl border-2 transition-all text-center font-medium ${
                            answers[currentQuestion.id]?.exists === true 
                            ? 'border-primary bg-primary/10 text-primary' 
                            : 'border-border hover:border-primary/50'
                        }`}
                    >
                        Yes
                    </button>
                    <button 
                        onClick={() => handleAnswer(false)}
                        className={`p-4 rounded-xl border-2 transition-all text-center font-medium ${
                            answers[currentQuestion.id]?.exists === false 
                            ? 'border-primary bg-primary/10 text-primary' 
                            : 'border-border hover:border-primary/50'
                        }`}
                    >
                        No
                    </button>
                </div>
            </div>

            {/* Part 2: Effectiveness (Only if Yes) */}
            {answers[currentQuestion.id]?.exists === true && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                    <label className="block text-sm font-medium mb-3">How effective is it? (1-5)</label>
                    <div className="grid grid-cols-5 gap-2">
                        {[1, 2, 3, 4, 5].map(score => (
                            <button
                                key={score}
                                onClick={() => handleScore(score)}
                                className={`h-12 rounded-lg border-2 transition-all font-medium flex items-center justify-center ${
                                    answers[currentQuestion.id]?.score === score
                                    ? 'border-primary bg-primary text-primary-foreground'
                                    : 'border-border hover:border-primary/50'
                                }`}
                            >
                                {score}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
                        <span>Weak</span>
                        <span>Strong</span>
                    </div>
                </div>
            )}
            
            {answers[currentQuestion.id]?.exists === false && (
                 <div className="p-3 bg-muted/50 rounded-lg flex items-center gap-2 text-sm text-muted-foreground animate-in fade-in">
                    <AlertCircle className="w-4 h-4" />
                    <span>Score automatically set to 1 (Not in place)</span>
                 </div>
            )}
        </div>

        {/* Navigation */}
        <div className="mt-auto pt-8 flex items-center justify-between">
            <button 
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className="text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 px-4 py-2"
            >
                <ArrowLeft className="w-4 h-4" /> Back
            </button>

            <button
                onClick={nextQuestion}
                disabled={!canProceed()}
                className="btn-gold px-8 py-3 rounded-full flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {currentQuestionIndex === allQuestions.length - 1 ? 'Finish' : 'Next'} 
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceHealthCheckupAssessment;
