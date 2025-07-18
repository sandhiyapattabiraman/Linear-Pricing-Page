import '../App.css'

function Pricing() {
    return (
        <div className="w-full flex justify-center items-start  py-10">
            <div className="flex flex-row gap-0 bg-[#111112] rounded-2xl shadow-lg border border-gray-800">
                {/* Free Plan */}
                <div className="border-r border-gray-800 rounded-l-2xl flex flex-col text-white w-[270px] bg-[#18181b]">
                    <div className="p-8 pb-4">
                        <h1 className="text-2xl font-semibold">Free</h1>
                        <span className="text-2xl font-bold">$0</span>
                    </div>
                    <div className="border-y border-gray-800">
                        <p className="p-6 text-gray-300">Free for everyone</p>
                    </div>
                    <div className="p-6 pb-16">
                        <ul className="space-y-3 text-[15px]">
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Unlimited members</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> 2 teams</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> 250 issues</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> <span className="underline">Slack</span> and <span className="underline">GitHub</span></li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> API access</li>
                        </ul>
                    </div>
                    <div className="p-6 mt-auto">
                        <button className="w-full border border-gray-800 bg-[#232329] p-3 rounded-lg font-semibold text-lg">Get started</button>
                    </div>
                </div>

                {/* Basic Plan */}
                <div className="flex flex-col text-white border-r border-gray-800 w-[270px] bg-[#18181b]">
                    <div className="p-8 pb-4">
                        <h1 className="text-2xl font-semibold">Basic</h1>
                        <span className="text-2xl font-bold">$8</span> <span className="text-base text-gray-400">per user/month</span>
                    </div>
                    <div className="border-y border-gray-800 flex items-center px-6 py-3 gap-2">
                        <span className="inline-flex items-center gap-2">
                            <span className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                                <span className="w-3 h-3 bg-[#6366f1] rounded-full"></span>
                            </span>
                            <span className="text-gray-300">Billed yearly</span>
                        </span>
                    </div>
                    <div className="p-6 pb-16">
                        <ul className="space-y-3 text-[15px]">
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> All Free features +</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> 5 teams</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Unlimited issues</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Unlimited file uploads</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Admin roles</li>
                        </ul>
                    </div>
                    <div className="p-6 mt-auto">
                        <button className="w-full border border-gray-800 bg-[#232329] p-3 rounded-lg font-semibold text-lg">Get started</button>
                    </div>
                </div>

                {/* Business Plan */}
                <div className="flex flex-col text-white border-r border-gray-800 w-[270px] bg-[#232329] z-10 shadow-2xl scale-105 rounded-2xl mx-[-8px]">
                    <div className="p-8 pb-4">
                        <h1 className="text-2xl font-semibold">Business</h1>
                        <span className="text-2xl font-bold">$14</span> <span className="text-base text-gray-400">per user/month</span>
                    </div>
                    <div className="border-y border-gray-800 flex items-center px-6 py-3 gap-2">
                        <span className="inline-flex items-center gap-2">
                            <span className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                                <span className="w-3 h-3 bg-[#6366f1] rounded-full"></span>
                            </span>
                            <span className="text-gray-300">Billed yearly</span>
                        </span>
                    </div>
                    <div className="p-6 pb-10">
                        <ul className="space-y-3 text-[15px]">
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> All Basic features +</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> <span className="underline">Linear Asks</span></li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Unlimited teams</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Private teams and guests</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> <span className="underline">Linear Insights</span></li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Triage responsibility</li>
                            <li><span className="text-[#6366f1]">✔</span>
                                <span className="underline">Zendesk</span><br/>
                                and <span className="underline">Intercom</span> integrations
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 mt-auto flex flex-col items-center">
                        <button className="w-full border border-gray-800 bg-white text-black p-3 rounded-lg font-semibold text-lg">Get started</button>
                        <p className="text-sm text-center mt-2">or <a href="#" className="underline">contact sales</a></p>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="flex flex-col text-white rounded-r-2xl w-[270px] bg-[#18181b]">
                    <div className="p-8 pb-4">
                        <h1 className="text-2xl font-semibold">Enterprise</h1>
                        <span className="text-2xl font-bold">Contact us</span>
                    </div>
                    <div className="border-y border-gray-800 flex items-center px-6 py-3">
                        <span className="text-gray-300">Annual billing only</span>
                    </div>
                    <div className="p-6 pb-16">
                        <ul className="space-y-3 text-[15px]">
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> All Business features +</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Advanced <span className="underline">Linear Asks</span></li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Issue SLAs</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> <span className="underline">SAML</span> and <span className="underline">SCIM</span></li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Advanced security</li>
                            <li className="flex items-center gap-2"><span className="text-[#6366f1]">✔</span> Migration and onboarding support</li>
                        </ul>
                    </div>
                    <div className="p-6 mt-auto">
                        <button className="w-full border border-gray-800 bg-[#232329] p-3 rounded-lg font-semibold text-lg">Request trial</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;