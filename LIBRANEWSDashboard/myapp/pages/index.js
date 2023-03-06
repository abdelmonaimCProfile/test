


import Image from "next/image"
import Logo from "../public/images/whiteLogo.png"
import { useRouter } from "next/router"
import { useState } from "react"
import jwt from 'jsonwebtoken'
import Cookies from "js-cookie" ;

function SignIn() {
    const router = useRouter()

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        const copy = { ...state }
        copy[e.target.name] = e.target.value
        setState(copy)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await fetch(`http://localhost:8080/authentication`, {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
            "Content-Type": "application/json"
        }
        })

        if (res.ok) {
        const json = await res.json()
        //localStorage.setItem("token", json.token)
        Cookies.set("token",json.token)
        const decodedToken = jwt.decode(json.token)
        console.log(json);

        console.log(decodedToken)

        if (json.role.includes("ROLE_ADMIN")) {
            router.push("/Dashboard");
            } else if (json.role.includes("ROLE_AUTHOR")) {
            router.push("/AuthorDashboard");
            } else {
            alert("Bad credentials");
            }
        }
    }

        return (
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="bg-black p-20">
                <Image src={Logo} alt="image" className="" priority='image' />
            </div>
            <div class="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">
                <div class="w-fit m-auto mt-72 space-y-12 bg-black p-16 rounded-xl shadow-2xl bg-gradient-to-r from-black via-slate-900 to-slate-800">
                <form onSubmit={handleSubmit} class="space-y-6">
                    <div className="flex justify-center">
                    <input type='text' name='email' placeholder="Email" class="rounded-xl w-60 md:w-80 h-10 text-center" value={state.user_email_adresse} onChange={handleChange} required />
                    </div>
                    <div class="flex justify-center">
                    <input type='password' name='password' placeholder="Password" class="rounded-xl w-60 md:w-80 h-10 text-center" value={state.user_password} onChange={handleChange} />
                    </div>
                    <div class="flex justify-center">
                    <button id="submit" type="submit" class="rounded-xl w-60 md:w-80 h-10 bg-orange-600 text-white text-center hover:bg-orange-500">Sign In</button>
                    </div>
                </form>
                </div>
            </div>
        </div>

)
}

export default SignIn

