import { TopBanner } from "../components/Banner/TopBanner"
import Footer from "../components/Footer/Footer"

import pic1 from "/images/Gallery/asset 2.jpeg"
import pic2 from "/images/Gallery/asset 3.jpeg"
import pic3 from "/images/Gallery/asset 5.jpeg"
import pic4 from "/images/Gallery/asset 6.jpeg"
import pic5 from "/images/Gallery/asset 7.jpeg"
import pic6 from "/images/Gallery/asset 57.jpeg"
import pic7 from "/images/Gallery/asset 58.jpeg"
import pic8 from "/images/Gallery/asset 59.jpeg"
import pic9 from "/images/Gallery/meditation.jpeg"


export const Gallery = () => {
    return <div>
        <TopBanner page={"Gallery"} />
        <Images />
        <Footer />
    </div>
}

function Images(){
    return <div className="grid grid-cols-3 gap-5 w-[90%] m-auto p-10 my-10">
        <img src={pic1} alt="" className="w-96 h-96"/>
        <img src={pic2} alt="" className="w-96 h-96"/>
        <img src={pic3} alt="" className="w-96 h-96"/>
        <img src={pic4} alt="" className="w-96 h-96"/>
        <img src={pic5} alt="" className="w-96 h-96"/>
        <img src={pic6} alt="" className="w-96 h-96"/>
        <img src={pic7} alt="" className="w-96 h-96"/>
        <img src={pic8} alt="" className="w-96 h-96"/>
        <img src={pic9} alt="" className="w-96 h-96"/>
    </div>
}