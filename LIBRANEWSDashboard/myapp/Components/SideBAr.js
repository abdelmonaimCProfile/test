
import LayoutAuthenticated from "./layout-auth"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


function SideBar(){

    const [profile, setProfile] = useState()
    const router = useRouter()

    useEffect(() => {
        fetchProfile()
    }, [])

    async function fetchProfile() {
        const res = await fetch(`http://localhost:8080/authentication/profile`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + Cookies.get("token")
        }
        })
        if (res.ok) {
        const json = await res.json()
        setProfile(json)
        } else {
        router.push("/")
        }
    }
    return(

        <div class="flex">
        <div class=" p-6 text-white">
            <div
                    id="sidebar"
                    class="bg-black border text-orange-500 rounded-xl border-black h-screen md:block shadow-2xl px-3 md:w-60 w lg:w-72 overflow-x-hidden transition-transform duration-300 ease-in-out "
                    x-show="sidenav"

                >
                <div class="space-y-6 md:space-y-10 mt-10">
                    {/* profile */}
                    <div id="profile" class="space-y-3">
                        <img
                        src={`data:image/jpeg;base64,${profile && profile.user_profile_image}`}
                        alt="Avatar user"
                        class="w-10 md:w-16 rounded-full mx-auto"
                        />
                        <div>
                        <h2
                            class="font-medium text-xs md:text-sm text-center text-teal-500"
                        >
                            {profile && profile.authorities.map(el => el.authority)}
                        </h2>
                        <p class="text-xs text-gray-500 text-center">{profile && profile.username}</p>
                        </div>
                    </div>

                         {/* menu */}
                    <div id="menu" class="flex flex-col space-y-2">
                            <a
                            href="/Dashboard"
                            class="text-sm font-medium py-2 px-2 hover:bg-orange-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                            >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                ></path>
                            </svg>
                            <span class="">Dashboard</span>
                            </a>
                            <a
                            href="/Dashboard/AllPosts"
                            class="text-sm font-medium  py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                ></path>
                            </svg>
                            <span class="">Posts
                            </span>
                            </a>
                            <a
                            href="/Dashboard/CreatePost"
                            class="text-sm font-medium  py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                ></path>
                            </svg>
                            <span class="">ADD Posts</span>
                            </a>
                            <a
                            href="/Dashboard/AllCategories"
                            class="text-sm font-medium  py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                ></path>
                            </svg>
                            <span class="">Categories</span>
                            </a>
                            <a
                            href="/Dashboard/CreateCategorie"
                            class="text-sm font-medium  py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                ></path>
                            </svg>
                            <span class="">ADD Categories</span>
                            </a>
                            <a
                            href="/Dashboard/AllMembers/"
                            class="text-sm font-medium  py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path
                                fillRule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                clipRule="evenodd"
                                ></path>
                            </svg>
                            <span class="">Authors</span>
                            </a>
                            <a
                            href="/Dashboard/CreateAuthor"
                            class="text-sm font-medium  py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                ></path>
                            </svg>
                            <span class="">ADD ADMIN/ Authors</span>
                            </a>
                            <a
                            href="/Dashboard/AllAdmins"
                            class="text-sm font-medium  py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                ></path>
                            </svg>
                            <span class="">Admins</span>
                            </a>

                            {/* <a
                            href=""
                            class="text-sm font-medium  py-2 px-2 hover:bg-orange-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                ></path>
                            </svg>
                            <span class="">Users</span>
                            </a> */}
                    </div>
                </div>
            </div>

        </div>
    </div>

    )
}

export default SideBar