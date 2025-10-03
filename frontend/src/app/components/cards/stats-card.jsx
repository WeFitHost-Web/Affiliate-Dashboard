import React from 'react';

const StatCard = ({ title, value, change, changePeriod, iconBgClass, icon: IconComponent }) => {
  const isPositiveChange = change && parseFloat(change) >= 0;

  const colorBase = iconBgClass.split('-')[1];
  const iconTextColorClass = `text-${colorBase}-500`;
  const iconBackgroundClass = `bg-${colorBase}-50`;


  return (
   
    <div className="bg-white p-8 rounded-[1.5rem] shadow-2xl shadow-gray-200 hover:shadow-gray-300 transition-shadow duration-300 flex-grow">
      <div className="flex justify-between items-start mb-6">
        {/* Title style refined for better tracking/color */}
        <h3 className="text-gray-500 text-base font-medium tracking-wide">{title}</h3>
        
        {/* ICON RENDERING SECTION */}
        {IconComponent && (
          
          <div className={`p-1 rounded-full ${iconBackgroundClass} flex items-center justify-center`}>
       
            <IconComponent className={`w-6 h-6  ${iconTextColorClass}`} />
          </div>
        )}
      </div>
      
    
      <div className="text-4xl font-extrabold text-gray-900 mb-3">{value}</div>
      
      {change && (
       
        <div className={`text-sm flex items-center font-semibold ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
          
          {isPositiveChange ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 fill-current"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 fill-current"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}

          {change} from last {changePeriod}
        </div>
      )}
    </div>
  );
};

export default StatCard;
