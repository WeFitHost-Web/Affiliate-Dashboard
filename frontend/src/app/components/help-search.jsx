import { FaSearch } from 'react-icons/fa'; 

// Array for the "Most Searched" topics
const mostSearchedTopics = [
  'Pay By Link',
  'Refunds',
  'Commission',
];

export default function HelpCenterSearch() {
  return (
    
    <div className="w-full py-12 bg-blue-50/70 border-b border-blue-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
      
        <p className="text-3xl text-center text-gray-900 font-bold mb-6">
          Help Center
        </p>
        
        <p className="text-lg text-center text-gray-700 mb-6">
          Ask your question below to quickly find the information you need.
        </p>

        
        <div className="relative">
          <div className="relative flex items-center">
            
            <FaSearch className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
            
            
            <input
              type="search"
              placeholder="Find answers..."
              className="w-full py-4 pl-12 pr-4 bg-white border border-gray-200 rounded-xl text-lg text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out"
            />
          </div>
        </div>
        
    
        <div className="flex flex-wrap justify-center items-center mt-6">
          <span className="text-sm font-semibold text-gray-700 mr-3">Most Searched:</span>
          {mostSearchedTopics.map((topic, index) => (
            <button
              key={index}
              onClick={() => console.log(`Searching for: ${topic}`)} 
              
              className="px-4 py-2 mx-1 my-1 text-sm font-medium text-gray-800 bg-blue-300/60 rounded-full hover:bg-indigo-400/80 transition duration-150 ease-in-out shadow-sm"
            >
              {topic}
            </button>
          ))}
        </div>
        
      </div>
    </div>
  );
}