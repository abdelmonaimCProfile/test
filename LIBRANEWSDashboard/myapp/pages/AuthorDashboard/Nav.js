

import DateTime from "../../ComponentsDate/Date";
import Time from "../../ComponentsDate/Time";
import Logo from "/public/images/whiteLogo.png"
import Image from 'next/image';

function Navbar(){

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
<>
            <div class="bg-black p-4 rounded">

                <nav class="relative select-none bg-grey lg:flex lg:items-stretch w-full ">
                    <div class="flex flex-no-shrink items-stretch h-12 mr-80">
                        <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">
                            <Image alt="image" src={Logo} class="w-32 h-32" property="vv"/>
                        </a>
                        {/* <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Css</a> */}
                        <button class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
                        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                        </button>
                    </div>
                    <div class="text-white flex m-auto ml-80 italic font-bold space-x-6 lg:block">
                        <DateTime/><Time/>
                    </div>
                    <div class="lg:flex lg:flex-no-shrink lg:flex-grow lg:justify-end">
                        <div id="profile" class="space-y-3 flex m-auto">
                            <img
                            src={`data:image/jpeg;base64,${profile && profile.image}`}
                            alt="Avatar user"
                            class="w-10 md:w-16 rounded-full mx-auto"
                            />
                            <div>
                            <h2
                                class="font-medium text-xs md:text-sm text-center text-teal-500"
                            >
                                {profile && profile.username}
                            </h2>
                            </div>
                        </div>
                        <div class="lg:flex lg:items-stretch  ml-auto my-auto">
                            <a href="/" title="Website name" class="text-white flex italic font-bold"> SignOut
                                <i>
                                    <svg class="text-orange-500 h-8 hover:h-9" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path></svg>
                                </i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="p-10 font-semibold text-4xl">

                <div class='lg:grid grid-cols-3 text-center'>
                    <a href="/AuthorDashboard" class='italic p-5 bg-orange-400 hover:bg-orange-500 h-28 rounded shadow-lg w-96 flex ' >My Posts</a>
                    <a href='/AuthorDashboard/CreatePost' class='italic p-5 bg-orange-400 hover:bg-orange-500 h-28 rounded shadow-lg w-96 flex ' >Add Post</a>
                    <a  class='italic p-5 bg-orange-400 hover:bg-orange-500 h-28 rounded shadow-lg w-96 flex ' >Status</a>
                </div>

            </div>
            </>
    )
}

export default Navbar