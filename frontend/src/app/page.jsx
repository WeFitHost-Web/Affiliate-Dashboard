import { FaDollarSign, FaWallet, FaMousePointer } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import StatsCard from "./components/cards/stats-card";
import StatsChart from "./components/stats-chart";
import LinkCard from "./components/cards/link-card";
const dashboardStatsCardsData = [
  {
    title: "Total Earnings",
    value: "$1,240",
    change: "+12%",
    changePeriod: "month",
    icon: FaDollarSign,
    iconBgClass: "bg-blue-400",
  },
  {
    title: "Available Payout",
    value: "$500",
    change: "+5%",
    changePeriod: "week",
    icon: FaWallet,
    iconBgClass: "bg-green-400",
  },
  {
    title: "Monthly Clicks",
    value: "324",
    change: "+8%",
    changePeriod: "month",
    icon: FaMousePointer,
    iconBgClass: "bg-yellow-400",
  },
  {
    title: "Conversion Rate",
    value: "4.6%",
    change: "-0.8%",
    changePeriod: "month",
    icon: FaCartShopping,
    iconBgClass: "bg-pink-400",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-5 p-5 max-xs:px-5 max-xs:py-2">
      {/* <div className="flex flex-col">
					<h2 className="poppins font-semibold text-2xl">Dashboard Overview</h2>
					<span className="text-sm text-gray font-semibold  leading-none">
						Welcome back, Alex! Here&apos;s your performance summary
					</span>
				</div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* 2. Loop through the array and render the Card component */}
        {dashboardStatsCardsData.map((card, index) => (
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
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[65%_35%] gap-4">
        <StatsChart />
        <LinkCard />
      </div>
     
    </main>
  );
}
