import '../App.css'

function NavBar(classname=""){
    return(
        <>
                <nav >
                    <div className={`p-4 pl-70 pr-70 border-b-1 border-solid border-gray-600  w-full ${classname}`}>
                        <ul className='flex flex-row text-gray-400 text-sm gap-8 items-center justify-between font-medium '>

                        <div className=' text-xl flex flex-row items-center gap-2 mr-10'>
                        
                            <img src="https://asset.brandfetch.io/iduDa181eM/iduUajoOBW.png" alt="linear logo" className='h-5 w-5'/>
                            <span className='text-white'>Linear</span>
                        </div>

                        <div className='flex flex-row items-center gap-6'>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg'>Product</li>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg'>Resources</li>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg'>Pricing</li>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg'>Customers</li>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg'>Blog</li>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg'>Contact</li>
                        </div>

                        <div className='flex flex-row gap-10  items-center ml-10 pr-0'>
                            <p className='text-gray-400 font-medium hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg'>Docs</p>
                            <button className='bg-gray-200 text-black font-medium rounded-lg p-2 text-center hover:bg-white'>Open app</button>
                        </div>
                        </ul>
                    </div>
                </nav>

        </>
    )
}

export default NavBar;