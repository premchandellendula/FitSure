import { TopBanner } from "../components/Banner/TopBanner"
import cyclingImg from "../../public/images/asset 47.jpeg"
import KarateImg from "../../public/images/asset 48.jpeg"
import liftingImg from "../../public/images/asset 49.jpeg"
import meditationImg from "../../public/images/asset 50.jpeg"
import boxingImg from "../../public/images/asset 51.jpeg"
import workoutImg from "../../public/images/asset 52.jpeg"
import crossfitImg from "../../public/images/asset 16.jpeg"
import runningImg from "../../public/images/asset 17.jpeg"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"

export const Classes = () => {
    const classList = [
        {
            img: cyclingImg,
            className: "Cycling",
            coach: "Pooja Hegde",
            day: "Tue",
            time: "7:00 AM"
        },
        {
            img: KarateImg,
            className: "Karate",
            coach: "Pawan Kalyan",
            day: "Wed",
            time: "6:00 PM"
        },
        {
            img: liftingImg,
            className: "Power Lifting",
            coach: "Rana Daggubati",
            day: "Sat",
            time: "7:00 PM"
        },
        {
            img: meditationImg,
            className: "Meditation",
            coach: "Samantha",
            day: "Mon",
            time: "7:00 AM"
        },
        {
            img: boxingImg,
            className: "Boxing",
            coach: "Ravi Teja",
            day: "Thurs",
            time: "6:00 PM"
        },
        {
            img: workoutImg,
            className: "Workout",
            coach: "Ram Charan",
            day: "Sune",
            time: "7:00 AM"
        },
        {
            img: crossfitImg,
            className: "Crossfit",
            coach: "Allu Arjun",
            day: "Fri",
            time: "9:00 PM"
        },
        {
            img: runningImg,
            className: "Running",
            coach: "NTR",
            day: "Wed",
            time: "7:30 AM"
        }
    ]
    return <div>
        <TopBanner page={"Classes"} />
        <div className="grid grid-cols-3 w-[85%] m-auto gap-y-10 my-20">
            {classList.map((classes, idx) => <ClassCard key={idx} img={classes.img} className={classes.className} coach={classes.coach} day={classes.day} time={classes.time} />)}
        </div>
        <Footer />
    </div>
}

interface ClassCardInputs {
    img: string,
    className: string,
    coach: string,
    day: string,
    time: string
}

function ClassCard({img, className, coach, day, time}: ClassCardInputs){
    return <div className="relative border w-[90%] h-[25rem] m-auto rounded-3xl shadow-2xl">
            <div className="w-full h-full">
                <img src={img} alt="" className="object-cover h-full w-full rounded-3xl" style={{ filter: 'blur(0.5px)' }}/>
            </div>

            <div className="absolute inset-0">
                <h2 className="absolute text-white text-2xl font-semibold left-10 bottom-32 top-[53%]">{className}</h2>
                <span className="absolute w-10 h-1 bg-yellow-500 mt-2 left-10 top-[60%]"></span>
                <div className="flex absolute left-10 top-[67%] gap-5 text-lg">
                    <p className="text-white">
                        <i className='bx bx-user-circle'></i> {coach}
                    </p>
                    <p className="text-white">
                        <i className='bx bx-time-five' ></i> {day} : {time}
                    </p>
                </div>
                <Link to="/contact">
                    <button className="text-black bg-white hover:bg-gray-200 focus:outline-none font-medium text-lg px-5 py-2.5 uppercase absolute left-10 top-[80%]">Take a Tour</button>
                </Link>
            </div>
        </div> 
}