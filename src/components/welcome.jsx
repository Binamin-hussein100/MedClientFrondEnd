import {Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useState,useMemo } from "react";


const Welcome = () => {
     const [selectedDiscpline, setSelectedDispline] = useState(new Set(["Custom writing (any type)"]));
     const [selectedEduc, setSelectedEduc] = useState(new Set(["High School"]));
     const [deadline, setDeadline] = useState(new Set(["14 DAYS"])) 

     const selectedValue = useMemo(
      () => Array.from(selectedDiscpline).join(", ").replaceAll("_", " "),
      [selectedDiscpline]
    );

    const selectedEducValue = useMemo(
      () => Array.from(selectedEduc).join(", ").replaceAll("_", " "),
      [selectedEduc]
    );

    const selectedDeadlineValue = useMemo(
      () => Array.from(deadline).join(", ").replaceAll("_", " "),
      [deadline]
    );
    return (
        // start
            <section className="relative h-screen w-screen ">
        
              {/* Illustration behind hero content */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-32 pointer-events-none" aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="50%" y1="-10%" x2="50%" y2="100%" id="illustration-01">
                      <stop stopColor="#d8e1f0" offset="0%" />
                      <stop stopColor="#bacfde" offset="77.402%" />
                      <stop stopColor="#87CEEB" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="url(#illustration-01)" fillRule="evenodd">
                    <circle cx="1251" cy="128" r="128" />
                    <circle cx="155" cy="443" r="64" />
                  </g>
                </svg>
              </div>
        
              <div className="w-full h-lvh   px-4 sm:px-6 flex border border-blue-500">
         
                       {/* Hero content */}
                      <div className="pt-32 pb-12 md:pt-40 md:pb-20 w-7/12 ">
              
                          {/* Section header */}
                          <div className="text-center md:pb-16">
                            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Quality papers, Top <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Writers</span></h1>
                            <div className="max-w-xl mx-auto">
                              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150"> Just $15 per page. With just two clicks, you can hire a professional writer</p>
                              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                                <div>
                                  {/* <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a> */}
                                  <Button color="primary" variant="ghost">
                                        Sign Up
                                    </Button>
                                </div>
                                <div>
                                  {/* <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a> */}
                                  <Button radius="full" className="bg-gradient-to-tr from-sky-400 to-sky-700 text-white shadow-lg w-full sm:w-auto sm:ml-4">
                                        Learn More
                                </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                     
                        </div>
                        {/* form */}
                        <div className="w-5/12">
                        <div className="w-12/12 mt-24 max-w-md rounded-2xl border border-grey-300  px-5 py-10 transition-all duration-300 hover:border-primary-300 sm:px-10 sm:py-16 sm:shadow-[0_8px_30px_rgb(196,205,213,0.5)]">
                                <div className="mb-5 flex flex-col gap-2">
                                  <h1 className="text-3xl font-bold tracking-tighter text-grey-800">
                                    Place an order
                                  </h1>
                                  
                                </div>

                                {/* form */}
                                <div className="flex w-full flex-col gap-3">

                                  {/* drop down  */}
                                  <Dropdown>
                                          <DropdownTrigger>
                                            <Button 
                                              variant="bordered" 
                                              className="capitalize"
                                            >
                                              {selectedValue}
                                            </Button>
                                          </DropdownTrigger>
                                          <DropdownMenu 
                                            aria-label="Single selection example"
                                            variant="flat"
                                            disallowEmptySelection
                                            selectionMode="single"
                                            selectedKeys={selectedValue}
                                            onSelectionChange={setSelectedDispline}
                                          >
                                            <DropdownItem key="text">Text</DropdownItem>
                                            <DropdownItem key="number">Number</DropdownItem>
                                            <DropdownItem key="date">Date</DropdownItem>
                                            <DropdownItem key="single_date">Single Date</DropdownItem>
                                            <DropdownItem key="iteration">Iteration</DropdownItem>
                                          </DropdownMenu>
                                    </Dropdown>
                                  {/* end */}

                                  <Dropdown>
                                          <DropdownTrigger>
                                            <Button 
                                              variant="bordered" 
                                              className="capitalize"
                                            >
                                              {selectedEducValue}
                                            </Button>
                                          </DropdownTrigger>
                                          <DropdownMenu 
                                            aria-label="Single selection example"
                                            variant="flat"
                                            disallowEmptySelection
                                            selectionMode="single"
                                            selectedKeys={selectedEducValue}
                                            onSelectionChange={setSelectedEduc}
                                          >
                                            <DropdownItem key="High school">High school</DropdownItem>
                                            <DropdownItem key="College">College</DropdownItem>
                                            <DropdownItem key="University">University</DropdownItem>
                                            <DropdownItem key="Master's">Master&apos;s</DropdownItem>
                                            <DropdownItem key="PhD/Doctoral">PhD/Doctoral</DropdownItem>
                                          </DropdownMenu>
                                    </Dropdown>
                                  <div className="flex w-full justify-between">
                                         <div>
                                             <label>Pages:</label>

                                              <div className="relative flex items-center max-w-[8rem]">
                                                  <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-700 dark:bg-sky-300 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                      <svg className="w-3 h-3 text-gray-900 dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                                      </svg> 
                                                  </button>
                                                  <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-sky-300 dark:border-gray-600 dark:placeholder-dark dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                                  <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-sky-300 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                      <svg className="w-3 h-3 text-gray-900 dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                                      </svg>
                                                  </button>
                                              </div>
                                         </div>
                                        
                                          <div className="w-6/12">
                                              <label >Deadline: </label>
                                              <div className="flex">
                                              <Dropdown>
                                                    <DropdownTrigger>
                                                      <Button 
                                                        variant="bordered" 
                                                        className="capitalize"
                                                      >
                                                        {selectedDeadlineValue}
                                                      </Button>
                                                    </DropdownTrigger>
                                                    <DropdownMenu 
                                                      aria-label="Single selection example"
                                                      variant="flat"
                                                      disallowEmptySelection
                                                      selectionMode="single"
                                                      selectedKeys={selectedDeadlineValue}
                                                      onSelectionChange={setDeadline}
                                                    >
                                                      <DropdownItem key="text">Text</DropdownItem>
                                                      <DropdownItem key="number">Number</DropdownItem>
                                                      <DropdownItem key="date">Date</DropdownItem>
                                                      <DropdownItem key="single_date">Single Date</DropdownItem>
                                                      <DropdownItem key="iteration">Iteration</DropdownItem>
                                                    </DropdownMenu>
                                              </Dropdown>
                                              </div>
                                          </div>
                                  </div>
                                   
                                   <div>
                                     <h3>Paper costs</h3>
                                   </div>

                                  <Button
                                    variant="flat"
                                    color="primary"
                                    size="lg"
                                    className="mt-5 text-sm font-bold"
                                  >
                                    Write a paper
                                  </Button>
                                </div>
                              </div>
                                                    
                        </div>
                  </div>
               
        
             
            </section>
          );
        
      
        // stop
    

}

export default Welcome;