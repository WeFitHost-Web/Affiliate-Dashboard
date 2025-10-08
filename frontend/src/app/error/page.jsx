"use client"
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 items-center justify-center p-4 sm:p-8">
      
      
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-gray-100">

        
        <div className="relative mb-8">
          <h1 className="text-9xl font-extrabold text-indigo-300  transition-all duration-300">
            404
          </h1>
          {/* absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}
          <div className="">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
              Page Not Found
            </h2>
          </div>
        </div>

        
        <p className="text-lg text-gray-600 mb-8 font-medium">
          The page you requested might have been moved, deleted, or never existed.
        </p>
        <p className="text-sm text-gray-500 mb-10">
          Don't worry, you can easily navigate back to a safe place.
        </p>

        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          
          <a
            href="/"
            className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]"
          >
            
            <FaHome className="w-5 h-5 mr-2" />
            Go to Dashboard
          </a>

        
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 border-2 border-indigo-200 text-base font-semibold rounded-xl text-indigo-700 bg-white hover:bg-indigo-50 transition duration-300"
          >
            
            <FaArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
      
     
      <footer className="mt-8 text-gray-400 text-sm">
        &copy; 2025 WeFitHost
      </footer>
    </div>
  );
};

export default NotFoundPage;
