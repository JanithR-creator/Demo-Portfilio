import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/16/solid";
import {Dialog, DialogPanel} from "@headlessui/react";

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const iconClickEvent = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="h-auto w-full lg:bg-bg-nav">
                <div className="flex lg:hidden justify-end p-3">
                    <button
                        type="button"
                        className="-m-2 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className="hidden lg:flex justify-center">
                    <Link to='/'
                          className='my-3 mr-1 rounded-sm px-2 hover:bg-nav-link focus:bg-nav-link text-white'>Home</Link>
                    <Link to='/Portfolio'
                          className='my-3 mr-1 rounded-sm px-2 hover:bg-nav-link focus:bg-nav-link text-white'>Portfolio</Link>
                    <Link to='/Experiences'
                          className='my-3 mr-1 rounded-sm px-2 hover:bg-nav-link focus:bg-nav-link text-white'>Experiences</Link>
                    <Link to='/About-me'
                          className='my-3 mr-1 rounded-sm px-2 hover:bg-nav-link focus:bg-nav-link text-white'>About</Link>
                    <Link to='/Contact'
                          className='my-3 mr-1 rounded-sm px-2 hover:bg-nav-link focus:bg-nav-link text-white'>Contact</Link>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 top-0"/>
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-1/2 md:w-1/4 bg-bg-nav">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="">
                            <div className="space-y-2 py-6 flex flex-col">
                                <Link
                                    to="/"
                                    className="mx-2 mb-1 rounded-b-sm text-center hover:bg-nav-link focus:bg-nav-link text-white"
                                    onClick={iconClickEvent}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/Portfolio"
                                    className="mx-2 mb-1 rounded-b-sm text-center hover:bg-nav-link focus:bg-nav-link text-white"
                                    onClick={iconClickEvent}
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    to="/Experiences"
                                    className="mx-2 mb-1 rounded-b-sm text-center hover:bg-nav-link focus:bg-nav-link text-white"
                                    onClick={iconClickEvent}
                                >
                                    Experiences
                                </Link>
                                <Link
                                    to="/About-me"
                                    className="mx-2 mb-1 rounded-b-sm text-center hover:bg-nav-link focus:bg-nav-link text-white"
                                    onClick={iconClickEvent}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/Contact"
                                    className="mx-2 mb-1 rounded-b-sm text-center hover:bg-nav-link focus:bg-nav-link text-white"
                                    onClick={iconClickEvent}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>)
}

export default Navbar;