


const SignUp = () => {
    return(
        // <!-- Sign Up Form -->
        <div>

                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-32 pointer-events-none"  aria-hidden="true">
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

            <div className="bg-white rounded-lg hover:border border-sky-400 shadow-md p-8 w-full mx-auto my-16 max-w-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Create an Account</h2>
            <form>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md text-gray-800"/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md text-gray-800"/>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">Password</label>
                    <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md text-gray-800" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">Confirm password</label>
                    <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md text-gray-800" />
                </div>
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default SignUp