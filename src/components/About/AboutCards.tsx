import progressionImg from "../../../public/images/asset 9.png";
import workoutImg from "../../../public/images/asset 10.png";
import nutritionImg from "../../../public/images/asset 11.png";

export const AboutCard = () => {
    const cardList = [
        {
            img: progressionImg,
            title: "Progression",
            description: "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time."
        },
        {
            img: workoutImg,
            title: "Workout",
            description: "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life."
        },
        {
            img: nutritionImg,
            title: "Nutritions",
            description: "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals."
        }
    ]

    return <div className="flex justify-center bg-gray-200 pb-10">
        {cardList.map((card, idx) => <Card key={idx} img={card.img} title={card.title} description={card.description} />)}
    </div>
}

interface CardInputs {
    img: string,
    title: string,
    description: string
}

function Card({img, title, description} : CardInputs){
    return <div className="border w-96 h-80 m-6 mt-20 flex justify-center shadow-md bg-white rounded-lg p-4">
        <div className="flex flex-col justify-center items-center">
            <img src={img} alt="" className="w-18 h-auto mb-2"/>
            <p className="text-2xl font-bold uppercase">{title}</p>
            <p className="text-center text-lg mt-4">{description}</p>
        </div>
    </div>
}