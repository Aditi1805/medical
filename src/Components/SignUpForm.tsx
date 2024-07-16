import React from 'react';

const SignUpForm: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center lg:justify-end bg-cover bg-center overflow-hidden"
         style={{backgroundImage: "url('/3.png')"}}>
      {/* Background image for mobiles */}
      <div className="lg:hidden absolute inset-0 z-0 bg-cover bg-center"
           style={{backgroundImage: "url('/2.png')"}}>
      </div>
      <div className="relative p-8 rounded-lg max-w-md w-full z-10 lg:mr-32">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white">Username</label>
            <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your Username" />
          </div>
          <div className="mb-4">
            <label className="block text-white">Phone Number</label>
            <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your Phone Number" />
          </div>
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input type="email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-white">Password</label>
            <input type="password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your Password" />
          </div>
          <button
              className="bg-transparent hover:bg-blue-500 text-white hover:text-white font-bold py-2 px-4 rounded border border-white hover:border-transparent focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Sign Up
            </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
