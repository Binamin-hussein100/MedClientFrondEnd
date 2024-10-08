import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { signUp } from '../redux/clientAuthSlice';
import { Link } from 'react-router-dom';




const SignUp = () => {
    const[loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { signUpStatus, signUpError, isLoggedIn  } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
      fullNames: '',
      confirmPassword: '',
      email: '',
      password: '',
      tel: ''
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };


    useEffect(() => {
      if (isLoggedIn) {
          navigate('/orders');  
      }
    }, [isLoggedIn, navigate]);


    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      setSuccess('');

      if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match!');
          setLoading(false);
          return;
      }

      try {
          const result = await dispatch(signUp(formData)).unwrap();
          setSuccess(result.message); // Adjust based on your API response
          navigate('/orders');
      } catch (error) {
          setError(error.message || 'Sign up failed. Please try again.');
      } finally {
          setLoading(false);
      }
  };

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

            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-600">Fullname</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="fullNames" 
                      value={formData.fullNames}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md text-gray-800"
                      />
                </div>
              
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md text-gray-800"
                        />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">Tel</label>
                    <input 
                        type="text" 
                        id="tel" 
                        name="tel" 
                        value={formData.tel}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md text-gray-800" 
                        />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={formData.password} 
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md text-gray-800" 
                        />
                </div>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-600">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confPass" 
                        name="confirmPassword" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md text-gray-800"
                        />
                </div>

             
                <button 
                  type="submit" 
                  disabled={signUpStatus === 'loading'}
                  className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    {signUpStatus === 'loading' ? 'Signing Up...' : 'Sign Up'}
                  </button>
            </form>
            &nbsp;
            <p>
              Already have an account? <Link className="text-blue-700 text-center text-sm" to="/signin">Sign in</Link> 
            </p>
        </div>
        </div>
    )
}

export default SignUp