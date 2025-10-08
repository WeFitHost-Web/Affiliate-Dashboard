import StatIcon from "./stats-icon";

const StatCard = ({ title, value, change, changePeriod, iconBgClass, icon: IconComponent  }) => {

  const isPositiveChange = change && parseFloat(change) >= 0;

  return (
    <div className="bg-white p-4 rounded-[0.5rem] shadow-xl relative overflow-hidden shadow-gray-200 hover:shadow-gray-300 hover:-translate-y-0.5 transition-all duration-300 flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-gray-500 text-base font-medium ">
          {title}
        </h3>
      </div>

      <StatIcon iconBgClass={iconBgClass} icon={IconComponent} />
      <div className="text-4xl font-extrabold text-gray-900 mb-3">{value}</div>

      {change && (
        <div
          className={`text-sm flex items-center font-semibold ${isPositiveChange ? "text-green-400" : "text-red-400"}`}
        >
          {isPositiveChange ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 fill-current"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 fill-current"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          )}
          {change} from last {changePeriod}
        </div>
      )}
    </div>
  );
};

export default StatCard;
