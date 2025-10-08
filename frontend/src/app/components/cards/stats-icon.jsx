const StatIcon = ({ iconBgClass, icon: IconComponent }) => {

  const colorBase = iconBgClass.split("-")[1];

  
  const colorMap = {
    
    pink:   { text: 'text-pink-700', bg: 'bg-pink-100' },
    blue:   { text: 'text-blue-700', bg: 'bg-blue-100' },
    yellow: { text: 'text-yellow-700', bg: 'bg-yellow-100' },
    green:  { text: 'text-green-700', bg: 'bg-green-100' }, 
   
  };


  const { 
    text: iconTextColorClass, 
    bg: iconBackgroundClass 
  } = colorMap[colorBase] || { 
   
    text: 'text-gray-700', 
    bg: 'bg-gray-100' 
  };
  
  

  return (
    <>
      {IconComponent && (
        <div
        
          className={`p-4 opacity-60 rounded-full absolute top-5 right-5 ${iconBackgroundClass} flex items-center justify-center`}
        >
          
          <IconComponent className={`h-5 w-5 ${iconTextColorClass}`} />
        </div>
      )}
    </>
  );
};

export default StatIcon;
