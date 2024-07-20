import { Link } from "react-router-dom"

export const NavList = () => {
    return <div className="flex flex-col justify-center">
        <ul className="flex justify-between text-white">
            <Link to={"/"}>
                <li className="px-5 text-lg hover:text-yellow-400 ease-in font-medium">Home</li>
            </Link>

            <Link to={"/about"}>
                <li className="px-5 text-lg hover:text-yellow-400 ease-in font-medium">About</li>
            </Link>

            <Link to={"/gallery"}>
                <li className="px-5 text-lg hover:text-yellow-400 ease-in font-medium">Gallery</li>
            </Link>

            <Link to={"/schedule"}>
                <li className="px-5 text-lg hover:text-yellow-400 ease-in font-medium">Schedule</li>
            </Link>

            <Link to={"/pricing"}>
                <li className="px-5 text-lg hover:text-yellow-400 ease-in font-medium">Pricing</li>
            </Link>

            <Link to={"/classes"}>
                <li className="px-5 text-lg hover:text-yellow-400 ease-in font-medium">Classes</li>
            </Link>

            <Link to={"/contact"}>
                <li className="px-5 text-lg hover:text-yellow-400 ease-in font-medium">Contact</li>
            </Link>

        </ul>
    </div>
}