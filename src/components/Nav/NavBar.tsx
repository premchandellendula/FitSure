import { Link } from "react-router-dom"
import { NavList } from "./NavList"
import { useEffect, useState } from "react"

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll =() => {
            if(window.scrollY > 25){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return <div className={`fixed w-full flex justify-between px-8 py-4 ${scrolled ? "bg-black" : "bg-transparent"} transition-colors duration-300 z-50`}>
        <Link to={"/home"} className="flex flex-col justify-center text-2xl font-semibold cursor-pointer">
            <div className="text-white text-3xl">
                Fit<span className="text-yellow-400">Sure</span>
            </div>
        </Link>

        <NavList />

        <div>
            <Link to={"/signup"}>                
                <button type="button" className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-6">Sign Up</button>
            </Link>
            <Link to={"/signin"}>
                <button type="button" className="text-gray-900 bg-gray-300 hover:bg-gray-400 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-6">Sign In</button>
            </Link>
        </div>
    </div>
}