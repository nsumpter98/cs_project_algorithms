import {Link} from 'react-router-dom';

const Navbar = () => {
    return (

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




                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">

                        <Link to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                    </div>

                </div>
            </nav>
        </div>

    );
}

export default Navbar;
