import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import LayoutAuthenticated from './../Components/layout-auth';

export default function User() {
    const [content, setContent] = useState(null)
    const router = useRouter()

    console.log(content)

    useEffect(() => {
        fetchContent()
    }, [])


    async function fetchContent() {
        const res = await fetch(`http://localhost:8080/users`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + Cookies.get("token")
        }
        })
        if (res.ok) {
        const text = await res.text()
        setContent(text)
        }
    }

    return (
        <LayoutAuthenticated>
        <div >
            fiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        </div>
       </LayoutAuthenticated>
    )
}