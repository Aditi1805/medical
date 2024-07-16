"use client"; // Add this directive at the top

import { FaGoogle, FaFacebook, FaXTwitter } from 'react-icons/fa6';

interface ForgotProps {
  onForgotPassword: () => void; // Assuming onForgotPassword is a function with no parameters and no return value
}

const Login: React.FC<ForgotProps> = ({ onForgotPassword }) => {
  return (
    <div className="flex min-h-screen items-center justify-end bg-cover bg-center overflow-hidden"
         style={{backgroundImage: "url('/1.png')"}}>
      {/* Background image for mobiles */}
      <div className="lg:hidden absolute inset-0 z-0 bg-cover bg-center"
           style={{backgroundImage: "url('/2.png')"}}>
      </div>
       <div className="w-full max-w-md rounded-lg p-6 bg-opacity-90 backdrop-filter lg:mr-32 m-4 z-10 relative">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Log in</h2>
        <form className="w-full space-y-4">
          <div className="flex flex-col mb-4">
            <label className="text-white text-sm font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white text-sm font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-white text-sm font-bold" htmlFor="remember">
              <input className="mr-2 h-8 w-6 leading-tight" type="checkbox" id="remember" />
              <span className="text-white text-sm">Remember me?</span>
            </label>
          </div>
          <div>
            <button
              className="bg-transparent hover:bg-teal-400 text-white hover:text-white font-bold py-2 px-4 rounded border border-white hover:border-transparent focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Log in
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-white hover:text-teal-400" href="#" onClick={onForgotPassword}>
              Forgot Password?
            </a>
          </div>
        </form>
        
        {/* Divider */}
        <div className="flex items-center justify-center mt-2 text-white">
          <div className="w-full flex items-center justify-center text-white my-4">
            <div className="flex-grow border-t border-white"></div>
            <span className="px-4">or</span>
            <div className="flex-grow border-t border-white"></div>
          </div>
        </div>
        
        {/* Social login buttons */}
        <div className="flex items-center justify-center mt-5 space-x-3">
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-bold p-3 rounded-full border border-gray-400 shadow flex items-center"
            type="button"
          >
            <FaGoogle size={20} color="#DB4437" />
          </button>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-bold p-3 rounded-full border border-gray-400 shadow flex items-center"
            type="button"
          >
            <FaFacebook size={20} color="#1877F2" />
          </button>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-bold p-3 rounded-full border border-gray-400 shadow flex items-center"
            type="button"
          >
            <FaXTwitter size={20} color="#1DA1F2" />
          </button>
        </div>
        
        {/* Sign up link */}
        <div className="flex items-center justify-center mt-6">
          <a className="inline-block align-baseline font-bold text-sm text-white hover:text-teal-400" href="#">
            Need an account? SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
