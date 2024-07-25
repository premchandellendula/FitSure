import { useState } from "react";
import bmiBanner from "/images/BMI/BMI_banner.jpeg"

function BmiCalc() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e: any) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));

      // logic for message
      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
  };

  return <div className="relative mb-10">
        <div>
            <img src={bmiBanner} alt="" className="w-full h-96" />
        </div>

        <div className="inset-0 absolute left-[10%] text-white w-[50%]">
            <h2 className="text-4xl font-bold mb-3 mt-5">
                Let's Calculate Your <span className="text-[#FF0336]">BMI</span>
            </h2>
            <p className="text-lg text-gray-400 min620:text-white w-[70%]">
              Easily determine your body mass index with our accurate
              calculation tool.
            </p>

            <div className="flex flex-col">
              <form className="flex w-full gap-6 h-[50px] mt-5 ">
                <input
                  onChange={(e: any) => setWeight(e.target.value)}
                  className="w-[20%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6"
                  type="text"
                  placeholder="Weight / kg"
                ></input>
                <input
                  onChange={(e :any) => setHeight(e.target.value)}
                  className="w-[20%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
                  type="text"
                  placeholder="Height / cm"
                ></input>
              </form>
              <p className="mt-10 gap-3 text-[16px] font-medium flex items-center w-full ">
                <span className="w-1/2">
                  Your BMI is: &nbsp;
                  <span className="text-[#ff0336]">{bmi}</span>
                </span>
                <span className="w-1/2">
                  Your weight is: &nbsp;
                  <span className="text-[#ff0336]">{message}</span>
                </span>
              </p>
              <button
                onClick={calcBmi}
                style={{ transition: "all 0.3s" }}
                type="submit"
                className="text-[15px] uppercase font-bold mt-10 bg-[#323232] w-24 h-12 hover:bg-yellow-500"
              >
                Calculate
              </button>
            </div>
        </div>
    </div>;
}

export default BmiCalc;