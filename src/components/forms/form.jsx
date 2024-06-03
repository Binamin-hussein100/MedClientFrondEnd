import { useEffect, useState } from "react";
import Thankyou from "./thankYou";
import Step from "./steps";
import Part1 from "./part1";
import Part2 from "./Part2";
import Part3 from "./part3";



const Form = () =>{
    const [stepNumber, setStepNumber] = useState(() => 1);
    const [displayThankyou, setDisplayThankyou] = useState(false);
    const [goBackVisible, setGoBackVisible] = useState("invisible");

    const [steps, setSteps] = useState([
        { id: 1, title: "YOUR INFO", active: true },
        { id: 2, title: "SELECT PLAN", active: false },
        { id: 3, title: "ADD-ONS", active: false },
        { id: 4, title: "SUMMARY", active: false },
      ]);

//------------------------------SIDE EFFECTS------------------------------
useEffect(() =>{
    setSteps((prevSteps) =>{
        const updatedSteps = prevSteps.map((step) =>{
            if(step.id === stepNumber){
                return {...step, active: true}
            }else{
                return {...step, active: false}
            }
        })
        return updatedSteps
    })
    if (stepNumber > 1) {
        setGoBackVisible("visible");
      } else {
        setGoBackVisible("invisible");
      }
},[stepNumber,displayThankyou])

const nextStep = () => {
    if (stepNumber == 1){
      console.log("test")
    }

    if(stepNumber == 2){
        console.log("test")

    }

    setStepNumber((prevStep) => prevStep + 1);

}

const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };

//   const changeClick = () => {
//     setStepNumber((prevStep) => prevStep - 2);
//   };

//   const changeYourInfo = (event) => {
//     setYourInfo((prevInfo) => {
//       return { ...prevInfo, [event.target.name]: event.target.value };
//     });
//   };
        return(
            <div className="container bg-orange-600 h-screen">
            <div className=" rounded-xl md:p-3 md:flex justify-center">
              <div className="relative">
                <img
                  className="hidden md:block"
                  alt="sidebar"
                />
                <img
                  className="block md:hidden w-full"
                  alt="topbar"
                />
      
                <div className="flex justify-center mt-8 absolute inset-0 space-x-10 md:space-x-0 md:block md:mt-0 md:pl-6 md:pt-8 md:space-y-7">
                  {steps.map((step) => (
                    <Step
                      key={step.id}
                      number={step.id}
                      title={step.title}
                      active={step.active}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
                {(displayThankyou && (
                  //<div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
                  <>
                    <Thankyou />
                  </>
                  //</div>
                )) || (
                  // <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
                  <>
                    <div>
                      {(stepNumber === 1 && (
                         <Part1/>
                      )) ||
                        (stepNumber === 2 && (
                          <Part2/>
                        )) ||
                        (stepNumber === 3 && (
                          <Part3/>
                        )) ||
                        (stepNumber === 4 && (
                          <Thankyou/>
                        ))}
                    </div>
                    <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full  p-5 md:static md:p-0 md:static items-center w-[700px]]">
                      {/* {stepNumber != 1 && (
                    <div
                      onClick={prevStep}
                      className={`font-medium text-[#9699ab] cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
                    >
                      Go back
                    </div>
                  )} */}
                      <div
                        onClick={prevStep}
                        className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
                      >
                        Go back
                      </div>
                      {stepNumber === 4 ? (
                        <div
                          onClick={() => setDisplayThankyou(true)}
                          className="font-medium bg-[#473dff] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                        >
                          Confirm
                        </div>
                      ) : (
                        <div
                          onClick={nextStep}
                          className="font-medium bg-[#02295a] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                        >
                          Next Step
                        </div>
                      )}
                    </div>
                  </>
                  // </div>
                )}
              </div>
            </div>
          </div>
        )
}

export default Form;