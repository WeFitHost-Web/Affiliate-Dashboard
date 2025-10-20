import React from "react";
const PageHeader = ({title="Affiliate Page", subhead="Welcome to our platform"}) => {
  return (
    
      <div className="bg-white p-4 rounded-[1rem] shadow-xl w-full">
        <header>
          <h1 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-2">
           {title}
          </h1>

          <p className="text-gray-600">
            {subhead}
          </p>
        </header>

        
      </div>
    
  );
};

export default PageHeader;
