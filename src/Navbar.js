import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        /*<nav className="navbar">
        <h1>NSX Technology</h1>
        <div className="links">
            <Link to="/" className={'dark:text-white'}>Home</Link>
            <Link to="/create" style={{
                color: "white",
                backgroundColor: "#3554f1",
                borderRadius: "8px"
            }}>New Blog</Link>
        </div>
        </nav>*/
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                {/*h2 element*/}
                                <h2 className={'text-2xl font-bold text-white'}>NSX Technology</h2>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to="/" className={'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'}>Home</Link>


                                    <Link
                                        to="/demo"
                                        className={'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>
                                        Demo Page
                                    </Link>

                                </div>
                            </div>
                        </div>

                        {/*  <div className="-mr-2 flex md:hidden">
                        <button type="button"
                                className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>*/}
                    </div>
                </div>

                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">

                        <Link to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to="/demo" className={"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}>Demo Page</Link>
                    </div>

                </div>
            </nav>
        </div>

    );
}

export default Navbar;
