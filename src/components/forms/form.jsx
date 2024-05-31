import { useEffect, useState } from "react";
import Test from "../test";
import Thankyou from "./thankYou";


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


        return(
            <div className="container">
                      <div className="bg-[#d6d9e6] md:bg-white border border-red-500 rounded-xl md:p-3 md:flex justify-center">
                        <div className="relative">
                                freufijrenfbfr
                        </div>
                        <div className="flex flex-col justify-between border border-red-500 absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
                            {(displayThankyou && (
                                <>
                                    <Thankyou/>
                                </>
                            )) || (
                                <Test/>
                            )

                            }
                        </div>
                      </div>

            </div>
        )
}

export default Form;