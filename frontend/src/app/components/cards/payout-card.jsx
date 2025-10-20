
import StatIcon from "./stats-icon";
const PayoutStatCard = ({ title, value, change, changePeriod, subText, iconBgClass, icon: IconComponent }) => {

  const isPositiveChange = change && parseFloat(change.replace(/[+$,]/g, '')) >= 0;
  
  const UpArrow = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 mr-1 fill-current"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  );

  const DownArrow = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 mr-1 fill-current"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.01] flex-grow min-w-0">
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-gray-500 text-base font-medium">
          {title}
        </h3>
      </div>
      <StatIcon iconBgClass={iconBgClass} icon={IconComponent} />

      <div className="text-3xl font-extrabold text-gray-900 mb-3 leading-none">
        {value}
      </div>

      {change ? (
        <div
          className={`text-sm flex items-center font-semibold ${isPositiveChange ? "text-green-500" : "text-red-500"}`}
        >
          {isPositiveChange ? <UpArrow /> : <DownArrow />}
          {change} from last {changePeriod}
        </div>
      ) : subText ? (
        <div className="text-sm font-medium text-gray-500">
          {subText}
        </div>
      ) : null}
    </div>
  );
};
export default PayoutStatCard