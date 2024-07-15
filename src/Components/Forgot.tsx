"use client"; // Add this directive at the top

interface ForgotProps {
  onBackToLogin: () => void; // Assuming onBackToLogin is a function with no parameters and no return value
  onResetPassword: () => void; // Assuming onResetPassword is a function with no parameters and no return value
}

const Forgot: React.FC<ForgotProps> = ({ onBackToLogin, onResetPassword }) => {
  return (
    <div className="flex min-h-screen items-center justify-end bg-cover bg-center overflow-hidden"
         style={{backgroundImage: "url('/1.png')"}}>
      {/* Background image for mobiles */}
      <div className="lg:hidden absolute inset-0 z-0 bg-cover bg-center"
           style={{backgroundImage: "url('/2.png')"}}>
      </div>
      
      <div className="w-full max-w-md rounded-lg p-6 bg-opacity-90 backdrop-filter lg:mr-32 m-4 z-10 relative">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Forgot Password</h2>
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
          <div>
            <button
              className="bg-transparent hover:bg-blue-500 text-white hover:text-white font-bold py-2 px-4 rounded border border-white hover:border-transparent focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={onResetPassword}
            >
              Send Reset Link
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-6">
          <a className="inline-block align-baseline font-bold text-sm text-white hover:text-blue-800" href="#" onClick={onBackToLogin}>
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
