// import Head from 'next/head';
// import Link from 'next/link';
import Logo from "/public/images/whiteLogo.png"// import DateTime from "../../ComponentsDate/Date";
// import Time from "../../ComponentsDate/Time";
import  Image  from 'next/image';
import DateTime from "../../ComponentsDate/Date";
import Time from "../../ComponentsDate/Time";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        };
        return (
        <>
        <nav className="flex items-center justify-between flex-wrap bg-black p-6 rounded-md lg:h-32 mb-5">
            <div className="flex items-center flex-shrink-0 text-white lg:mr-96 lg:ml-36 ">
                                <Image alt="image" src={Logo} class="w-32 h-28" property="vv"/>
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
                <div className=" lg:flex-grow lg:space-x-80 font-bold text-xl">
                    <div class="lg:inline-block ">
                        <Link href="/"

                            class="block mt-4 lg:mt-0 text-gray-300 hover:text-white mr-4"
                            onClick={toggleMenu}>
                            <DateTime/><Time/>
                        </Link>
                    </div>
                    <div class="lg:inline-block">
                        <p
                            class="lg:flex mt-4  lg:mt-0 text-gray-300 hover:text-white mr-4  lg:my-auto"
                            onClick={toggleMenu}>
                                <img
                                src="https://pbs.twimg.com/profile_images/1467997254929854470/mDYbXoVl_400x400.jpg"
                                alt="Avatar user"
                                class="w-10 md:w-16 rounded-full lg:mx-auto"
                                />hello
                        </p>
                    </div>
                    <div class="lg:inline-block">
                        <Link href="/"
                            class="block mt-4 lg:mt-0 text-gray-300 hover:text-white mr-4 hover:h-9"
                            onClick={toggleMenu}>SignOut
                            <svg class="h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

        <div class="lg:p-10 font-semibold text-4xl">

            <div class='lg:grid grid-cols-3 text-center'>
                <a href="/AuthorDashboard" class='italic p-5 bg-orange-400 hover:bg-orange-500 h-28 rounded shadow-lg lg:w-96 w-56 ' >My Posts</a>
                <a href='/AuthorDashboard/CreatePost' class='italic p-5 bg-orange-400 hover:bg-orange-500 h-28 rounded shadow-lg w-56 lg:w-96  ' >Add Post</a>
                <a  class='italic p-5 bg-orange-400 hover:bg-orange-500 h-28 rounded shadow-lg w-56 lg:w-96 ' >Status</a>
            </div>

        </div>
        </>
        );
    }