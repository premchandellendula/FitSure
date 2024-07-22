import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
        <div className="page-padding py-10">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left w-[80%] m-auto">
            {/* logo side */}
            <div className="flex flex-col w-1/3 gap-8">
                <Link to={"/"} className="flex flex-col justify-center text-2xl font-semibold cursor-pointer">
                    <div className="text-black text-3xl">
                        Fit<span className="text-yellow-400">Sure</span>
                    </div>
                </Link>
              <p className="text-[15px] font-medium text-[#646464]">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                
                <i style={{ transition: "all 0.3s" }} className='bx bxl-facebook bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-yellow-500 hover:text-white'></i>
                <i style={{ transition: "all 0.3s" }} className='bx bxl-twitter bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-yellow-500 hover:text-white'></i>
                <i style={{ transition: "all 0.3s" }} className='bx bxl-pinterest-alt bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-yellow-500 hover:text-white'></i>
                <i style={{ transition: "all 0.3s" }} className='bx bxl-youtube bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-yellow-500 hover:text-white'></i>
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} FitSure <br />{" "}
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Classes</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-yellow-500"></span>

              <p className="text-[16px] hover:text-yellow-500 cursor-pointer text-[#646464] font-medium">
                Fitness Classes
              </p>
              <p className="text-[16px] hover:text-yellow-500 cursor-pointer text-[#646464] font-medium">
                Aerobics Classes
              </p>
              <p className="text-[16px] hover:text-yellow-500 cursor-pointer text-[#646464] font-medium">
                Power Yoga
              </p>
              <p className="text-[16px] hover:text-yellow-500 cursor-pointer text-[#646464] font-medium">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-yellow-500 cursor-pointer text-[#646464] font-medium">
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-yellow-500"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div>
          </div>
        </div>
    </>
  );
}

export default Footer;