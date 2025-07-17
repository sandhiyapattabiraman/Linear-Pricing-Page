import React from 'react'
import '../App.css'

// Plan metadata
const plans = [
    { key: 'free', name: 'Free', highlight: false },
    { key: 'basic', name: 'Basic', highlight: false },
    { key: 'business', name: 'Business', highlight: true },
    { key: 'enterprise', name: 'Enterprise', highlight: false },
];

// Feature matrix
const featureSections = [
    {
        section: '',
        features: [
            { label: <><b>Unlimited</b> members</>, values: [true, true, true, true] },
            { label: <><b>10MB</b> file uploads</>, values: [true, false, false, false] },
            { label: <><b>Unlimited</b> file uploads</>, values: [false, true, true, true] },
            { label: <><b>250</b> issues</>, values: [true, false, false, false] },
            { label: <><b>Unlimited</b> issues</>, values: [false, true, true, true] },
            { label: <><b>2</b> teams</>, values: [true, false, false, false] },
            { label: <><b>5</b> teams</>, values: [false, true, false, false] },
            { label: <><b>Unlimited</b> teams</>, values: [false, false, true, true] },
        ],
    },
    {
        section: 'Core Features',
        features: [
            { label: <><b>Issues, projects, cycles, and initiatives</b></>, values: [true, true, true, true] },
            { label: <>Customer requests</>, values: [true, true, true, true] },
            { label: <>Integrations</>, values: [true, true, true, true] },
            { label: <>API and webhook access</>, values: [true, true, true, true] },
            { label: <>Import and export</>, values: [true, true, true, true] },
            { label: <>Triage</>, values: [true, true, true, true] },
            { label: <>Issue sync</>, values: [true, true, true, true] },
            { label: <>Support integrations</>, values: [false, false, true, true] },
            { label: <>Triage responsibility</>, values: [false, false, true, true] },
            { label: <>Linear Asks</>, values: [false, false, true, false] },
            { label: <><b>Advanced Linear Asks</b></>, values: [false, false, false, true] },
            { label: <>Triage routing</>, values: [false, false, false, true] },
            { label: <>Sub-initiatives</>, values: [false, false, false, true] },
            { label: <>Issue SLAs</>, values: [false, false, false, true] },
        ],
    },
    {
        section: 'Team management',
        features: [
            { label: <>Sub-teams</>, values: [false, false, true, true] },
            { label: <>Private teams</>, values: [false, false, true, true] },
            { label: <>Guest accounts</>, values: [false, false, true, true] },
        ],
    },
    {
        section: 'Analytics & Reporting',
        features: [
            { label: <><b>Progress reports</b></>, values: [true, true, true, true] },
            { label: <>Insights</>, values: [false, false, true, true] },
            { label: <>Data warehouse sync</>, values: [false, false, false, true] },
        ],
    },
    {
        section: 'Security',
        features: [
            { label: <>Google SSO</>, values: [true, true, true, false] },
            { label: <>Google SSO + SAML</>, values: [false, false, false, true] },
            { label: <>Admin roles</>, values: [false, true, true, true] },
            { label: <>Advanced authentication</>, values: [false, false, true, true] },
            { label: <>IP restrictions</>, values: [false, false, false, true] },
            { label: <>SCIM provisioning</>, values: [false, false, false, true] },
            { label: <>Domain claiming</>, values: [false, false, false, true] },
            { label: <>Audit log</>, values: [false, false, false, true] },
            { label: <>Third-party app management</>, values: [false, false, false, true] },
            { label: <>HIPAA compliance</>, values: [false, false, false, true] },
        ],
    },
    {
        section: 'Support',
        features: [
            { label: <>Priority support</>, values: [false, false, false, true] },
            { label: <>Account manager</>, values: [false, false, false, true] },
            { label: <>Custom terms</>, values: [false, false, false, true] },
            { label: <>Uptime SLA</>, values: [false, false, false, true] },
        ],
    },
];

const Check = () => (
    <svg className="w-5 h-5 text-indigo-400 inline mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
);

const PricingComparison = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center py-12 px-2">
            <div className="w-full max-w-6xl">
                {/* Render each section */}
                {featureSections.map((section, sIdx) => (
                    <div key={section.section + sIdx} className="w-full max-w-6xl mx-auto mt-8">
                        {section.section && (
                            <div className="text-white text-xl font-semibold mb-4 mt-8">{section.section}</div>
                        )}
                        <div className="grid grid-cols-4 gap-0 rounded-2xl overflow-hidden ">
                            {plans.map((plan, pIdx) => (
                                <div
                                    key={plan.name + '-' + section.section}
                                    className={`flex flex-col ${plan.highlight ? 'bg-zinc-950' + (sIdx === 0 ? ' rounded-t-4xl' : '') + (sIdx === featureSections.length - 1 ? ' rounded-b-4xl' : '') + ' shadow-2xl z-10 scale-105' : ''} px-6 py-8`}
                                >
                                    <div className={sIdx === 0 ? 'mb-6' : ''}>
                                        {sIdx === 0 && (
                                            <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                                        )}
                                    </div>
                                    <div className="space-y-5">
                                        {section.features.filter(f => f.values[pIdx]).map((feature, i) => (
                                            <div key={i} className="flex items-center text-gray-300 text-base">
                                                <Check />
                                                <span className="ml-1">{feature.label}</span>
                                            </div>
                                        ))}
                                        {section.features.filter(f => !f.values[pIdx]).map((feature, i) => (
                                            <div key={i + 'x'} className="flex items-center text-base text-gray-500 opacity-60">
                                                <span className="w-5 h-5 inline-block mr-2 align-middle">&#10005;</span>
                                                <span className="ml-1">{feature.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Action buttons for Support section */}
                                    {section.section === 'Support' && (
                                        <div className="mt-auto flex flex-col items-center">
                                            {plan.name === 'Business' ? (
                                                <>
                                                    <button className="w-full bg-white text-black font-semibold py-3 rounded-xl mb-2">Get Started</button>
                                                    <span className="text-gray-400 text-sm">or <a href="#" className="underline">contact sales</a></span>
                                                </>
                                            ) : plan.name === 'Enterprise' ? (
                                                <button className="w-full bg-[#232329] text-white font-semibold py-3 rounded-xl mb-2">Request trial</button>
                                            ) : (
                                                <button className={`w-full ${plan.highlight ? 'bg-white text-black' : 'bg-[#232329] text-white'} font-semibold py-3 rounded-xl`}>Get started</button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingComparison;