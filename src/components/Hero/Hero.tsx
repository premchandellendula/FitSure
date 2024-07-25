import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <div className="relative">
            <div>
                <img src="/public/images/main-banner.jpg" alt="" />
            </div>

            <div className="absolute inset-0 flex flex-col left-72  ml-96 justify-center text-white">
                <h1 className="text-5xl font-bold mb-4 uppercase">make <span className="text-yellow-500">sure</span> your body</h1>
                <p className="text-5xl mb-8 uppercase">fit & perfect</p>
                <Link to="/classes">
                    <button className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none font-medium rounded-full text-lg px-5 py-2.5 uppercase">Our Classes</button>
                </Link>
            </div>
        </div>
    );
};
