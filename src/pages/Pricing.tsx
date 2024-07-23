import { TopBanner } from "../components/Banner/TopBanner"
import beginnerImg from "../.../../images/asset 41.jpeg"
import intermediateImg from "../.../../images/asset 42.jpeg"
import proImg from "../.../../images/asset 43.jpeg"
import Footer from "../components/Footer/Footer"

export const Pricing = () => {
    const pricingCard = [
        {
            img: beginnerImg,
            name: "Beginner",
            cost: "499",

        },
        {
            img: intermediateImg,
            name: "Intermediate",
            cost: "899",
            
        },
        {
            img: proImg,
            name: "Pro",
            cost: "1299",
            
        }
    ]
    return <div>
        <TopBanner page={"Pricing"} />
        <div className="bg-gray-100 py-20">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-4xl font-semibold my-5">Exclusice Pricing Plan</h2>
                <p className="text-lg font-normal text-gray-600">With an affordable pricing, make sure you hit the gym and sweat it out.</p>
            </div>
            <div className="flex justify-between mt-10 w-[85%] m-auto">
                {pricingCard.map((pricing, idx) => <PricingCard key={idx} img={pricing.img} name={pricing.name} cost={pricing.cost} />)}
            </div>
        </div>
        <Footer />
    </div>
}

interface PricingInputs {
    img: string,
    name: string,
    cost: string
}

function PricingCard({img, name, cost}: PricingInputs){
    return <div className="bg-white shadow">
        <div className="flex flex-col justify-center items-center">
            <img src={img} alt="" className="" />
            <h2 className="text-2xl font-semibold my-4">{name}</h2>
            <p className="text-3xl font-bold my-2"><span className="text-gray-400">&#8377;</span> {cost} <span className="text-lg text-gray-400">p/m</span></p>
            <div className="text-lg text-gray-600 p-2 text-center flex flex-col gap-5 mb-2">
                <p>Free Hand</p>
                <p>Gym Fitness</p>
                <p>Weight Loss</p>
                <p>Personal Trainer</p>
                <p>Cycling</p>
            </div>
            <button className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none font-medium rounded-full text-lg px-5 py-2.5 uppercase my-4">Purchase Now</button>
        </div>
    </div>
}