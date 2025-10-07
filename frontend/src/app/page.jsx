
import {
  CurrencyDollarIcon,
  CreditCardIcon,
  CursorArrowRaysIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'; 
import StatsCard from './components/cards/stats-card';
const dashboardCardsData = [
  {
    title: 'Total Earnings',
    value: '$1,240',
    change: '+12%',
    changePeriod: 'month',
    icon: CurrencyDollarIcon,
    iconBgClass: 'bg-blue-400',
  },
  {
    title: 'Available Payout',
    value: '$500',
    change: '+5%',
    changePeriod: 'week',
    icon: CreditCardIcon,
    iconBgClass: 'bg-green-400',
  },
  {
    title: 'Monthly Clicks',
    value: '324',
    change: '+8%',
    changePeriod: 'month',
    icon: CursorArrowRaysIcon,
    iconBgClass: 'bg-yellow-400',
  },
  {
    title: 'Conversion Rate',
    value: '4.6%',
    change: '-0.8%',
    changePeriod: 'month',
    icon: ShoppingCartIcon,
    iconBgClass: 'bg-pink-400',
  },
];
export default function Home() {
	return (
		<main className="min-h-screen flex flex-col gap-5 p-5 max-xs:px-5 max-xs:py-2">
			<div className="flex flex-col">
					<h2 className="poppins font-semibold text-2xl">Dashboard Overview</h2>
					<span className="text-sm text-gray font-semibold  leading-none">
						Welcome back, Alex! Here&apos;s your performance summary
					</span>
				</div>
			  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        
        {/* 2. Loop through the array and render the Card component */}
        {dashboardCardsData.map((card, index) => (
          <StatsCard
           
            key={index} 
            title={card.title}
            value={card.value}
            change={card.change}
            changePeriod={card.changePeriod}
            icon={card.icon}
            iconBgClass={card.iconBgClass}
          />
          
      
        ))}
      </div>
		</main>
	);
}
