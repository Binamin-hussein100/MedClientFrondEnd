import { useEffect, useState } from "react";
import Thankyou from "./thankYou";
import Step from "./steps";
import Part1 from "./part1";
import Part2 from "./Part2";
import Part3 from "./part3";

const Form = () => {
    const [stepNumber, setStepNumber] = useState(() => 1);
    const [displayThankyou, setDisplayThankyou] = useState(false);
    const [goBackVisible, setGoBackVisible] = useState("invisible");

    const [steps, setSteps] = useState([
        { id: 1, title: "Part 1", active: true },
        { id: 2, title: "Part 2", active: false },
        { id: 3, title: "Part 3", active: false },
        { id: 4, title: "SUMMARY", active: false },
    ]);

    const [part1Data, setPart1Data] = useState({});
    const [part2Data, setPart2Data] = useState({});
    const [part3Data, setPart3Data] = useState({});

    useEffect(() => {
        setSteps((prevSteps) => {
            const updatedSteps = prevSteps.map((step) => {
                if (step.id === stepNumber) {
                    return { ...step, active: true };
                } else {
                    return { ...step, active: false };
                }
            });
            return updatedSteps;
        });
        if (stepNumber > 1) {
            setGoBackVisible("visible");
        } else {
            setGoBackVisible("invisible");
        }
    }, [stepNumber, displayThankyou]);



    const nextStep = () => {
        setStepNumber((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStepNumber((prevStep) => prevStep - 1);
    };
    
    const formData = [
      part1Data,
      part2Data,
      part3Data,
    ];
    console.log(formData)
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent default form submission
    
      try {
        const response = await fetch('http://localhost:3000/gigs', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
    
        const result = await response.json();
        console.log('Success:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    
      setDisplayThankyou(true);
    };

    const renderSummary = (data) => {
      return Object.entries(data).map(([key, value]) => (
          
          <div key={key} className="flex justify-between w-full">
            <p className="text-base dark:text-white leading-4 text-gray-800">{key}</p>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{value}</p>
        </div>
      ));
  };
    
    return (
        <div className="h-screen py-12 px-5">
            <div className="border rounded-xl mx-auto grid grid-cols-1 lg:h-fit lg:w-4/5 md:flex justify-center">
                <div className="rounded-lg lg:rounded-r-none bg-sky-300 w-full lg:w-1/3">
                    <div className="flex gap-5 p-5 lg:flex-row justify-center lg:space-x-0 md:space-x-0 md:block md:mt-0 md:pl-6 md:pt-8 md:space-y-7">
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
                <div className="flex flex-col justify-between w-full mb-40 pt-10 pb-16 md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
                    {displayThankyou ? (
                        <Thankyou />
                    ) : (
                        <>
                            <div>
                                {stepNumber === 1 && (
                                    <Part1 data={part1Data} setData={setPart1Data} />
                                )}
                                {stepNumber === 2 && (
                                    <Part2 data={part2Data} setData={setPart2Data} />
                                )}
                                {stepNumber === 3 && (
                                    <Part3 data={part3Data} setData={setPart3Data} />
                                )}
                                {stepNumber === 4 &&
                                      <>
                                       {/* <div  className="flex justify-center items-center space-y-4 flex-col bg-sky-400 rounded">
                                            {renderSummary(part1Data)}
                                            {renderSummary(part2Data)}
                                            {renderSummary(part3Data)}
                                            <div className="flex justify-between items-center w-full">
                                                    <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">11</p>
                                            </div>

                                       </div> */}
                                                
                                      
                                    </>
                                 }
                            </div>
                            <div className="flex justify-between w-full md:p-0 md:static items-center w-w-full lg:w-full my-10">
                                <div
                                    onClick={prevStep}
                                    className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
                                >
                                    Go back
                                </div>
                                {stepNumber === 4 ? (
                                    <div
                                        onClick={handleSubmit}
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default Form;



