
// export default Navbar
// import Head from 'next/head';
// import Link from 'next/link';
import Logo from "../public/images/whiteLogo.png"// import DateTime from "../../ComponentsDate/Date";
// import Time from "../../ComponentsDate/Time";
import  Image  from 'next/image';

import { useState } from 'react';
import Link from 'next/link';
import DateTime from './../ComponentsDate/Date';
import Time from './../ComponentsDate/Time';
import LayoutAuthenticated from './layout-auth';
import { useRouter } from 'next/router';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        };



        const router = useRouter()
        function logout() {
            localStorage.removeItem("token")
            router.push("/")
        }
        return (
            <>

        <nav className="flex items-center justify-between flex-wrap bg-black p-5 rounded-md lg:h-32">

            <div class="flex items-center flex-shrink-0 text-white lg:mr-96  mb-10">
                    <Image alt="image" src={Logo} class="w-32 h-28 my-auto" property="vv"/>
            </div>

            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
                    onClick={toggleMenu}
                >
                    <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
            className={`${
                menuOpen ? 'block' : 'hidden'
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className=" lg:flex-grow lg:space-x-80 font-bold text-xl lg:ml-72">
                    <div class="lg:flex lg:space-x-60 space">
                    <Link href="/"
                        class="block mt-4 lg:mt-0 text-gray-300 hover:text-white mr-4"
                        onClick={toggleMenu}>
                        <div class="flex"><DateTime/> <p>/</p><Time/></div>
                    </Link>

                    <Link href='#'
                            class="mt-4 lg:mt-0 text-gray-300 hover:text-white mr-4 lg:mb-8 flex"
                            onClick={logout}>SignOut

                            <svg class="h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                            </svg>
                    </Link>
                    </div>
                </div>
            </div>
        </nav>

</>

        );
    }