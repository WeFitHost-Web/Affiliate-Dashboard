'use client'
import { FaWallet, FaMousePointer, FaDownload, FaAngleDown } from "react-icons/fa";
import StatsCard from "./../components/cards/stats-card";
import { GoGraph } from "react-icons/go";
import PerformanceGraph from "./performance-graph";
import ConversionRow from "./conversion-row";

const Reports = () => {
	const dashboardStatsCardsData = [
  {
    title: "Total Clicks",
    value: "$1,245",
    change: "+18%",
    changePeriod: "month",
    icon: GoGraph,
    iconBgClass: "bg-blue-400",
  },
  {
    title: "Total Connversions",
    value: "57",
    change: "+7%",
    changePeriod: "week",
    icon: FaWallet,
    iconBgClass: "bg-green-400",
  },
  {
    title: "Conversion Rate",
    value: "4.58%",
    change: "-0.3%",
    changePeriod: "month",
    icon: FaMousePointer,
    iconBgClass: "bg-yellow-400",
  },
  {
    title: "Total Earnings",
    value: "$2,845",
    change: "22%",
    changePeriod: "month",
    icon: FaWallet,
    iconBgClass: "bg-pink-400",
  },
  ];
  const data = [
  {
    name: 'Jan',
 
    earnings: 2400,
  },
  {
    name: 'Feb',
    earnings: 1398,
  },
  {
    name: 'Mar',
    earnings: 9800,
  },
  {
    name: 'Apr',
    earnings: 3908,
  },
  {
    name: 'May',
    earnings: 4800,
  },
  {
    name: 'Jun',
    earnings: 3800,
  },
  {
    name: 'Jul',
    earnings: 4300,
    },
  {
    name: 'Aug',
    earnings: 3800,
    },
   {
    name: 'Sep',
    earnings: 3908,
    },
  {
    name: 'Oct',
    earnings: 2400,
  },
  ];
  
  const links = [
    {
      name: 'Main Referral Link',
      clicks:42
    },
    {
      name: 'Web Hosting Promo',
      clicks:89
    },
    {
      name: 'VPS Special',
      clicks:24
    },
  ]

  const conversions = [
    {
      date: 'Oct 15, 2025',
      customer: 'John Doe',
      product: 'Business Hosting',
      commission: '$49.00',
status:'paid',
    },
     {
      date: 'Oct 16, 2025',
      customer: 'Robert Johnson',
      product: 'Stater Hosting',
      commission: '$4.00',
status:'processing',
    },
     {
      date: 'Oct 17, 2025',
      customer: 'David Thompson',
      product: 'Enterprise Hosting',
      commission: '$40.00',
status:'processing',
    },
     {
      date: 'Oct 18, 2025',
      customer: 'Micheal Brown',
      product: 'Stater Hosting',
      commission: '$50.00',
status:'paid',
    },
  ]
	return (
		<main className="flex flex-col gap-5 p-5 max-xs:px-5 max-xs:py-2">
		<div className="flex items-start justify-between pb-4 flex-wrap gap-5">
      <div className="flex flex-col">
					<h2 className="poppins font-semibold text-2xl">Reports & Analytics
</h2>
					<span className="text-sm text-gray font-semibold  leading-none">
Track your performance and earnings</span>
        </div>
        <button className="h-[40px] bg-primary hover:bg-primary-dark text-base font-semibold text-white flex items-center gap-2 px-2 rounded-md duration-150">
<FaDownload/> <span>Export Report</span>
					</button>
      	</div>
			 <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
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
      </section>
      <section className="w-full h-90 max-lg:h-auto flex gap-5 max-lg:flex-col">
				<div className="w-[65%] flex flex-col gap-4 custom-shadow rounded-lg p-4 bg-white max-lg:w-full max-lg:h-100">
					<div className='w-full flex items-center justify-between'>
						<h2 className="poppins-bold text-xl">
Performance Overview
						</h2>
						<button className="h-[40px] border border-gray-300   text-sm text-black flex items-center gap-2 px-2 rounded-md duration-150">
<FaAngleDown/> <span>Last 30 days</span>
					</button>
					</div>
					<PerformanceGraph data={data} />
					</div>
				<div className='flex flex-col gap-4 w-[35%] custom-shadow rounded-lg p-4 bg-white max-lg:w-full'>
					<h2 className='poppins-bold text-lg '>Top Performing Links</h2>
					
          <div className="flex flex-col gap-2">
            {links.map((link, index) => (
              <div className="flex items-center justify-between" key={index}>
                <span className="text-sm font-medium">{link?.name}</span>
                   <span className="text-base font-bold">{link?.clicks}</span>
                </div>
))}
          </div>
          </div>
      </section>
      <section className="flex w-full flex-col gap-10 p-4  bg-white custom-shadow rounded-lg">
				<div className="flex items-center gap-5 justify-between max-xs:flex-col max-xs:items-start">
					<h2 className="poppins-bold text-2xl">
Your Referral Links
					</h2>
				
				</div>
				<div className="w-full overflow-auto">
					<div className='w-full min-w-[1000px]'>
						<div className='flex w-full flex-col divide-y divide-gray-200 overflow-hidden'>
					<div className="flex gap-2 py-4 px-2">
						<div className="w-[20%] text-gray-600 font-semibold text-sm">
							Date
						</div>
						<div className="w-[35%] text-gray-600 font-semibold text-sm">
							Customer
						</div>
						<div className="w-[22%] text-gray-600 font-semibold text-sm">
							Product
						</div>
						<div className="w-[13%] text-gray-600 font-semibold text-sm ">
							Commission
						</div>
						<div className="w-[10%] text-gray-600 font-semibold text-sm ">
						Status
						</div>
					</div>
					{conversions.map((con, index) => (
<ConversionRow con={con} index={index} key={index}/>

					))}
							</div>
						</div>
				</div>
			</section>
		</main>
	);
};

export default Reports;
