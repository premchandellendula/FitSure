import { Link } from "react-router-dom"
import liftingImg from "/images/LandingAbout/liftingImg.png"
import equipmentImg from "/images/LandingAbout/equipmentImg.png"
import machineImg from "/images/LandingAbout/machine.png"
import girlImg from "/images/LandingAbout/girlImg.png"
import redCircle from "/images/LandingAbout/redCircle.svg"

const cardList = [
    {
        img: liftingImg,
        title: "professional trainers"
    },
    {
        img: equipmentImg,
        title: "modern equipments"
    },
    {
        img: machineImg,
        title: "fancy gym machines"
    }
]

export const LandingAbout = () => {

    return <div className="bg-gray-200 pb-10">
        <div className="w-[90%] m-auto grid grid-cols-2 gap-10">
            <LeftAbout />
            <RightAbout />
        </div>
    </div>
}

function LeftAbout(){
    return <div>
        <h2 className="uppercase text-lg font-bold my-5">who we are</h2>
        <h2 className="text-4xl font-bold my-7">Take Your Health And Body To Next Level</h2>
        <p className="text-gray-700 text-xl mt-5">Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
        <div className="flex justify-between my-7">
            {cardList.map((card, idx) => <LeftAboutCard key={idx} img={card.img} title={card.title} />)}
        </div>
        <Link to="/classes">
            <button className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none font-medium rounded-full text-lg px-5 py-2.5 uppercase">Take a Tour</button>
        </Link>
    </div>
}

interface CardInputs {
    img: string,
    title: string
}

function LeftAboutCard({img, title} : CardInputs){
    return <div className="flex flex-col justify-center items-center my-4 border-b mx-2 border-gray-800">
        <img src={img} alt="hello" className="w-14 h-auto"/>
        <h2 className="text-xl text-center font-bold uppercase">{title}</h2>
    </div>
}

function RightAbout(){
    return <div className="relative">
        <div className="ml-60">
            <img src={redCircle} alt="hello" />
        </div>

        <div className="absolute bottom-10 left-5">
            <img src={girlImg} alt="" />
        </div>
    </div>
}