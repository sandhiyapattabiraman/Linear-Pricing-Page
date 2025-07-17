import '../App.css'
import NavBar from '../components/navbar'
import Pricing from '../components/pricing'
import PricingComparison from '../components/pricing_comparison'
import LogoCarousel from '../components/logo_carousel'



function pricing_page() {
    return (
        <>
            <div className='bg-black h-auto w-full gap-20'>



                <header className='fixed bg-black z-50'>
                    <NavBar className=" t-0 w-full z-50" />
                </header>

                <main>



                    <section>
                        <div className=' flex flex-col justify-center items-center p-20 pl-70 pr-70 gap-6 pt-40'>
                            <h1 className='text-white text-7xl  font-semibold '>Pricing</h1>
                            <p className='text-gray-400 pl-50 pr-50 text-center'>Use Linear for free with your whole team. Upgrade to enable
                                unlimited issues, enhanced security controls, and additional features.</p>
                        </div>
                    </section>

                    <section>
                        <div className='flex flex-row justify-center items-center pb-20'>
                            <Pricing />
                        </div>
                    </section>


                    <section className='flex flex-col gap-10'>
                        <p className='text-gray-400 text-center font-medium'>Powering the world's best product teams</p>
                        <LogoCarousel />
                    </section>

                    <section className='mt-15'>
                        <PricingComparison />
                    </section>

                    <section>

                        <div className="flex justify-center w-full pt-10">
                            <div className="flex items-center gap-2 bg-[#18181b] px-6 py-3 rounded-full shadow-lg">
                                <span className="inline-flex items-center justify-center w-5 h-5 bg-green-600 rounded-full">
                                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#22C55E" /><path d="M4.5 8.5l2.5 2.5 4.5-4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                                <span className="text-white text-sm">Linear contributes 1% of your subscription to remove CO₂ from the atmosphere through Stripe Climate</span>
                            </div>
                        </div>
                    </section>

                    {/* Hero Section */}
                    <section className="flex flex-col items-center justify-center pt-20 gap-8">
                        <div className="flex flex-row items-center   gap-10 ">
                            <h1 className="text-white text-4xl md:text-4xl font-semibold text-center">Plan the present. Build the future.</h1>
                            <div className="flex flex-row gap-4 ">
                                <button className="bg-[#232329] text-white px-8 py-3 rounded-xl text-lg font-medium shadow hover:bg-[#18181b] transition">Download</button>
                                <button className="bg-gray-200 text-black px-8 py-3 rounded-xl text-lg font-medium shadow hover:bg-white transition">Open app</button>
                            </div>
                        </div>
                    </section>

                </main>

                {/* Footer */}
                <footer className="w-full bg-black border-t border-gray-800 pt-20 pb-20 mt-20">
                    <div className="max-w-5xl mx-auto flex flex-row  items-start px-8 pb-10 gap-8 flex-wrap">
                        <div className="flex flex-row flex-wrap gap-7 w-full justify-between">
                        <div className="flex  items-start min-w-[120px] mb-8">
                            <img src="https://asset.brandfetch.io/iduDa181eM/iduUajoOBW.png" alt="linear logo" className="h-7 w-7 mb-4" />
                        </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className="text-white font-semibold mb-3">Features</h4>
                                <ul className="text-gray-300 space-y-2 text-sm">
                                    <li>Plan</li>
                                    <li>Build</li>
                                    <li>Insights</li>
                                    <li>Customer Requests</li>
                                    <li>Linear Asks</li>
                                    <li>Security</li>
                                    <li>Mobile</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className="text-white font-semibold mb-3">Product</h4>
                                <ul className="text-gray-300 space-y-2 text-sm">
                                    <li className="text-white font-semibold">Pricing</li>
                                    <li>Method</li>
                                    <li>Integrations</li>
                                    <li>Changelog</li>
                                    <li>Documentation</li>
                                    <li>Download</li>
                                    <li>Switch</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className="text-white font-semibold mb-3">Company</h4>
                                <ul className="text-gray-300 space-y-2 text-sm">
                                    <li>About</li>
                                    <li>Customers</li>
                                    <li>Careers</li>
                                    <li>Blog</li>
                                    <li>README</li>
                                    <li>Quality</li>
                                    <li>Brand</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className="text-white font-semibold mb-3">Resources</h4>
                                <ul className="text-gray-300 space-y-2 text-sm">
                                    <li>Developers</li>
                                    <li>Status</li>
                                    <li>Startups</li>
                                    <li>Report vulnerability</li>
                                    <li>DPA</li>
                                    <li>Privacy</li>
                                    <li>Terms</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className="text-white font-semibold mb-3">Connect</h4>
                                <ul className="text-gray-300 space-y-2 text-sm">
                                    <li>Contact us</li>
                                    <li>Community</li>
                                    <li>X (Twitter)</li>
                                    <li>GitHub</li>
                                    <li>YouTube</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>


        </>
    )
}

export default pricing_page;