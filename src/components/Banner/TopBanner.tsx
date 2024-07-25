import { NavBar } from "../Nav/NavBar"
import topBanner from "/images/TopBanner/topBanner.jpeg"

export const TopBanner = ({page}: {page: string}) => {
    return <div className="relative">
        <div>
            <img src={topBanner} alt="" className="h-72 w-full object-cover"/>
        </div>
        <div className="absolute inset-0">
            <NavBar />
        </div>
        <div className="absolute inset-0 text-3xl text-white font-bold left-[45%] top-[77%]">
            {page}
        </div>
    </div>
}