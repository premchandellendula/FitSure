import { TopBanner } from "../components/Banner/TopBanner"
import Footer from "../components/Footer/Footer"

export const Contact = () => {
    return <div>
    <TopBanner page={"Contact"} />
    <ContactDiv />
    <Map />
    <Footer />
</div>
}

function ContactDiv(){
    return <div className="w-[80%] m-auto mb-10">
        <div className="flex justify-center mt-10">
            {/* left div */}
            <div className="w-[50%] mt-8">
                <h2 className="text-black text-[36px] font-bold">We are here for help you! To Shape Your Body.</h2>
                <p className="text-lg w-[95%] text-[#646464] font-normal my-[40px]">At FitSure, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
                
                <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
                    <div className="flex flex-col relative">
                        <h3 className="text-[24px] font-bold mb-4">Hyderabad, Telangana</h3>
                        <span className="absolute w-10 h-1 bg-yellow-500 mt-2 top-8"></span>
                        <p className="text-[15px] font-medium text-gray-400 mt-2">4-22, Silver Street,</p>
                        <p className="text-[15px] font-medium text-gray-400">Meerpet, Hyderabad, 500097</p>
                    </div>
                    <div className="flex flex-col relative">
                        <h3 className="text-[24px] font-bold mb-4">Opening Hours</h3>
                        <span className="absolute w-10 h-1 bg-yellow-500 mt-2 top-8"></span>
                        <p className="text-[15px] font-medium text-gray-400 mt-2">Mon to Fri: 7:00 AM - 10:00 PM</p>
                        <p className="text-[15px] font-medium text-gray-400">Sat to Sun: 7:00 AM - 7:00 PM</p>
                    </div>
                    <div className="flex flex-col relative">
                        <h3 className="text-[24px] font-bold mb-4">Information</h3>
                        <span className="absolute w-10 h-1 bg-yellow-500 mt-2 top-8"></span>
                        <p className="text-[15px] font-medium text-gray-400 mt-2">+91-94302-43674</p>
                        <p className="text-[15px] font-medium text-gray-400">fitsure@gmail.com</p>
                    </div>
                    <div className="flex flex-col relative">
                        <h3 className="text-[24px] font-bold mb-4">Follow Us On</h3>
                        <span className="absolute w-10 h-1 bg-yellow-500 mt-2 top-8"></span>
                        <div className="flex gap-4 text-[16px] text-[#646464] min540:justify-center  mt-2">
                            <i style={{ transition: "all 0.3s" }} className='bx bxl-facebook bg-[#efefef] p-4 rounded-full px-[10px] hover:bg-yellow-500 hover:text-white'></i>
                            <i style={{ transition: "all 0.3s" }} className='bx bxl-twitter bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-yellow-500 hover:text-white'></i>
                            <i style={{ transition: "all 0.3s" }} className='bx bxl-pinterest-alt bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-yellow-500 hover:text-white'></i>
                            <i style={{ transition: "all 0.3s" }} className='bx bxl-youtube bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-yellow-500 hover:text-white'></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* right div */}
            <div className="w-[50%] flex flex-col bg-gray-100 p-8">
                <form className="">
                    <h3 className="text-3xl font-bold">Leave Us Your Info</h3>
                    <span className="absolute w-10 h-1 bg-yellow-500 mt-2"></span>
                    <input
                    className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8 mt-10"
                    placeholder="Full Name *"
                    type="text"
                    ></input>
                    <input
                    className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                    placeholder="Email Address *"
                    type="email"
                    ></input>
                    <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
                        <option>Select Class</option>
                        <option>Body Building</option>
                        <option>Karate</option>
                        <option>Meditation</option>
                        <option>Boxing</option>
                        <option>Fitness</option>
                        <option>Running</option>
                        <option>Workout</option>
                        <option>Yoga</option>
                        <option>Cycling</option>
                    </select>
                    <textarea
                    placeholder="Comment"
                    className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                    ></textarea>
                    <button
              type="submit"
              className="text-white bg-yellow-400 w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
            >
              submit now
            </button>
                </form>
            </div>
        </div>
    </div>
}

function Map(){
    return <div className="my-20">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487277.8589203762!2d78.0799244159689!3d17.41858790068452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1721742843016!5m2!1sen!2sin" 
        width="600" 
        height="350" 
        style={{ width: "100%", height: "30rem", border: "0px" }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
}