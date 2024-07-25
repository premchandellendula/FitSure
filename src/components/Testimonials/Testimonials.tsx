import { TestimonialBoxes } from "./TestimonialBoxes"
import girlImg from "/images/Testimonials/girl.jpeg"

export const Testimonials = () => {
    return <div className="w-full h-96 mt-24 mb-24 border-[#efefef] bg-white border-solid p-[30px] min540:h-[48rem] min375:h-[60rem]">
        <div className="bg-black w-[77%] h-96 m-auto relative">
            <img src={girlImg} alt="girl_img" className="absolute z-30 -left-10 bottom-0 rounded-tr-[200px] h-[28rem]" />
            
            <div className="flex">
                <TestimonialBoxes />
            </div>

            <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20">
                <button
                  title="left"
                  style={{ transition: "all 0.2s" }}
                  className="h-12 w-16 bg-white text-black text-2xl hover:bg-yellow-500 hover:text-white"
                >
                  <i className='bx bx-left-arrow-alt' ></i>
                </button>
                <button
                  title="right"
                  style={{ transition: "all 0.2s" }}
                  className="h-12 w-16 bg-white text-black text-2xl hover:bg-yellow-400 hover:text-white"
                >
                  <i className='bx bx-right-arrow-alt'></i>
                </button>
              </div>
        </div>
    </div>
}