import { TopBanner } from "../components/Banner/TopBanner"
import Footer from "../components/Footer/Footer"

export const Gallery = () => {
    return <div>
        <TopBanner page={"Gallery"} />
        <Images />
        <Footer />
    </div>
}

function Images(){
    return <div className="grid grid-cols-3 gap-5 w-[90%] m-auto p-10 my-10">
        <img src="/public/images/asset 2.jpeg" alt="" className="w-96 h-96"/>
        <img src="/public/images/asset 3.jpeg" alt="" className="w-96 h-96"/>
        <img src="/public/images/asset 5.jpeg" alt="" className="w-96 h-96"/>
        <img src="/public/images/asset 6.jpeg" alt="" className="w-96 h-96"/>
        <img src="/public/images/asset 7.jpeg" alt="" className="w-96 h-96"/>
        <img src="/public/images/asset 50.jpeg" alt="" className="w-96 h-96"/>
        <img src="/public/images/asset 57.jpeg" alt="" className="w-96 h-96"/>
        <img src="/public/images/asset 58.jpeg" alt="" className="w-96 h-96"/>
        <img src="/public/images/asset 59.jpeg" alt="" className="w-96 h-96"/>
    </div>
}