import Form from "./forms/form";



const NewOrder = () =>{
    return (
        <>
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
            <Form/>
        </>
    )
}

export default NewOrder;