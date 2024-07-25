import weightTrainer from "/images/Trainers/weightTrainer.png"
import yogaTrainer from "/images/Trainers/yogaTrainer.png"
import danceTrainer from "/images/Trainers/danceTrainer.png"

export const Trainers = () => {
    const trainerList = [
        {
            img: weightTrainer,
            name: "Arjun Das",
            position: "Weight Trainer"
        },
        {
            img: yogaTrainer,
            name: "Ashwin Kumar",
            position: "Yoga Trainer"
        },
        {
            img: danceTrainer,
            name: "Sanjitha Hegde",
            position: "Dance Trainer"
        }
    ]
    return <div className="mt-10 flex flex-col justify-center items-center">
        <div className="w-1/3 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">Team of Expert Coaches</h2>
            <p className="mt-4 text-lg text-center">Expert team of coaches helps you succeed in any goal, personalized guidance and motivation provided!</p>
        </div>
        <div className="flex justify-center pb-10">
            {trainerList.map((trainer, idx) => <TrainerCard key={idx} img={trainer.img} name={trainer.name} position={trainer.position} /> )}
        </div>
    </div> 
}

interface TrainerInputs {
    img: string,
    name: string,
    position: string
}

function TrainerCard({img, name, position}: TrainerInputs){
    return <div className="border w-80 h-96 m-6 mt-10 flex justify-center shadow-md bg-white rounded-lg p-4 cursor-pointer">
        <div className="flex flex-col justify-center items-center">
            <img src={img} alt="" className="mb-2 h-64 w-auto"/>
            <p className="text-2xl font-semibold">{name}</p>
            <p className="text-center text-md mt-1 font-light">{position}</p>
            <div className="flex justify-between">
                <i className='bx bxl-facebook mx-2 mt-2 text-gray-600' ></i>
                <i className='bx bxl-twitter mx-2 mt-2 text-gray-600' ></i>
                <i className='bx bxl-instagram mx-2 mt-2 text-gray-600' ></i>
                <i className='bx bx-envelope mx-2 mt-2 text-gray-600' ></i>
            </div>
        </div>
    </div>
}