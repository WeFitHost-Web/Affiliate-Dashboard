'use client';
import {
	FaDollarSign,
	FaWallet,
	FaMousePointer,
	FaChartPie,
	FaGift,
	FaDownload,
	FaCopy,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaArrowCircleRight,
	FaArrowRight,
	FaEllipsisH,
	FaPlus,
} from 'react-icons/fa';
import { FaCartShopping, FaXmark } from 'react-icons/fa6';
import { HiCash } from 'react-icons/hi';
import StatsCard from './components/cards/stats-card';
import StatsChart from './components/stats-chart';
import ActionsCard from './components/cards/actions-card';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePopup } from './../../utils/toggle-popups';
import { useUtilsContext } from './context/utils-context';
const dashboardStatsCardsData = [
	{
		title: 'Total Earnings',
		value: '$1,240',
		change: '+12%',
		changePeriod: 'month',
		icon: FaDollarSign,
		iconBgClass: 'bg-blue-400',
	},
	{
		title: 'Available Payout',
		value: '$500',
		change: '+5%',
		changePeriod: 'week',
		icon: FaWallet,
		iconBgClass: 'bg-green-400',
	},
	{
		title: 'Monthly Clicks',
		value: '324',
		change: '+8%',
		changePeriod: 'month',
		icon: FaMousePointer,
		iconBgClass: 'bg-yellow-400',
	},
	{
		title: 'Conversion Rate',
		value: '4.6%',
		change: '-0.8%',
		changePeriod: 'month',
		icon: FaCartShopping,
		iconBgClass: 'bg-pink-400',
	},
];

export default function Home() {
	const router = useRouter();
	const { toggleNewLinkPrompt } = useUtilsContext();
	const actions = [
		{
			icon: FaPlus,
			bg_color: 'bg-primary',
			action: 'Create Link',
			sub_text: 'Generate new referral links',
			onClick: () => toggleNewLinkPrompt(),
		},
		{
			icon: FaChartPie,
			bg_color: 'bg-success',
			action: 'Performance',
			sub_text: 'View detailed reports',
			onClick: () => router.push('/reports'),
		},
		{
			icon: FaGift,
			bg_color: 'bg-warning',
			action: 'Promo Materials',
			sub_text: 'Get banners & contents',
			onClick: () => router.push('/links-and-tools'),
		},
		{
			icon: HiCash,
			bg_color: 'bg-secondary',
			action: 'Request Payout',
			sub_text: 'Withdraw your earnings',
			onClick: () => router.push('/payouts'),
		},
	];
	const referralLink = 'https://wefithost.com/ref/alexj123';
	const referrals = [
		{
			date: 'Oct 15, 2025',
			customer: 'John Doe',
			product: 'Business Hosting',
			commission: '$49.00',
			status: 'approved',
		},
		{
			date: 'Oct 16, 2025',
			customer: 'Robert Johnson',
			product: 'Stater Hosting',
			commission: '$4.00',
			status: 'pending',
		},
		{
			date: 'Oct 17, 2025',
			customer: 'David Thompson',
			product: 'Enterprise Hosting',
			commission: '$40.00',
			status: 'pending',
		},
		{
			date: 'Oct 18, 2025',
			customer: 'Micheal Brown',
			product: 'Stater Hosting',
			commission: '$50.00',
			status: 'approved',
		},
	];
	return (
		<main className="min-h-screen flex flex-col gap-5 p-5 max-xs:px-5 max-xs:py-2">
			<div className="flex flex-col">
				<h2 className="poppins font-semibold text-2xl">Dashboard Overview</h2>
				<span className="text-sm text-gray font-semibold  leading-none">
					Welcome back, Alex! Here&apos;s your performance summary
				</span>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-4 ">
				{actions.map((act, index) => (
					<ActionsCard
						icon={act.icon}
						bg_color={act.bg_color}
						action={act.action}
						sub_text={act?.sub_text}
						key={index}
						on_click={act.onClick}
					/>
				))}
			</div>
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
				<div className="flex flex-col gap-4  custom-shadow rounded-lg p-4 bg-white max-lg:w-full">
					<h2 className="poppins-bold text-lg ">Your Unique Link</h2>

					<p className="text-sm text-gray-500 font-semibold">
						Share this link to start earning commissions
					</p>
					<div className="flex w-full">
						<input
							value={referralLink}
							type="text"
							readOnly
							className="w-full border border-gray-300 text-sm font-semibold outline-0 h-[40px] bg-gray-50 rounded-l-md px-2 text-gray-800 "
						/>
						<button className="h-[40px] bg-primary hover:bg-primary-dark text-base font-semibold text-white px-3 rounded-r-md duration-150">
							<FaCopy className="text-white" />
						</button>
					</div>
					<div className="flex gap-1">
						<Link
							href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`}
							className="h-[35px] bg-[#3b5998]  hover:opacity-90 text-base font-semibold text-white  px-2 rounded-md duration-150 flex items-center justify-center w-full max-w-[150px] "
							target="_blank"
						>
							<FaFacebook />
						</Link>
						<Link
							href={`https://twitter.com/intent/tweet?url=${referralLink}&text=Check%20out%20this%20awesome%20hosting%20service!`}
							target="_blank"
							className="h-[35px] bg-[#1da1f2] text-base  hover:opacity-90 font-semibold text-white  px-2 rounded-md duration-150 flex items-center justify-center w-full max-w-[150px]"
						>
							<FaTwitter />
						</Link>
						<Link
							href={`https://www.linkedin.com/sharing/share-offsite/?url=${referralLink}`}
							target="_blank"
							className="h-[35px] bg-[#0077b5] hover:opacity-90 text-base font-semibold text-white  px-2 rounded-md duration-150 flex items-center justify-center w-full max-w-[150px]"
						>
							<FaLinkedin />
						</Link>
					</div>
				</div>
			</div>

			<section className="flex w-full flex-col gap-10 p-4  bg-white custom-shadow rounded-lg max-sm:gap-0">
				<div className="flex items-center gap-2 justify-between max-xs:flex-col max-xs:items-start">
					<h2 className="poppins-bold text-2xl max-xs:text-xl">
						Recent Referrals
					</h2>
					<Link
						className="text-sm font-semibold text-primary hover:text-primary-dark flex gap-1 items-center"
						href="/reports"
					>
						View All Reports
						<FaArrowRight />
					</Link>
				</div>
				<div className="w-full overflow-auto">
					<div className="w-full min-w-[1000px]">
						<div className="flex w-full flex-col divide-y divide-gray-200 overflow-hidden">
							<div className="flex gap-2 py-4 px-2">
								<div className="w-[20%] text-gray-600 font-semibold text-sm">
									Date
								</div>
								<div className="w-[22%] text-gray-600 font-semibold text-sm">
									Customer
								</div>
								<div className="w-[30%] text-gray-600 font-semibold text-sm">
									Plan
								</div>
								<div className="w-[13%] text-gray-600 font-semibold text-sm ">
									Commission
								</div>
								<div className="w-[10%] text-gray-600 font-semibold text-sm ">
									Status
								</div>
								<div className="w-[5%] text-gray-600 font-semibold text-sm flex items-end justify-end">
									Actions
								</div>
							</div>
							{referrals.map((ref, index) => (
								<ReferralRow ref={ref} index={index} key={index} />
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

const ReferralRow = ({ ref, index }) => {
	const {
		isVisible: promptVisible,
		isActive: prompt,
		togglePopup: togglePrompt,
		ref: promptRef,
	} = usePopup();
	return (
		<>
			<div
				className="flex gap-2 py-4 px-2 hover:bg-gray-100 cursor-pointer"
				key={index}
				onClick={togglePrompt}
			>
				<div className="w-[20%] text-black  font-medium text-base">
					{ref.date}
				</div>
				<div className="w-[22%] text-black  font-medium text-base">
					{ref.customer}
				</div>
				<div className="w-[30%] text-black  font-medium text-base">
					{ref.product}
				</div>
				<div className="w-[13%] text-black  font-medium text-base ">
					{ref.commission}
				</div>
				<div className="w-[10%] text-black  font-medium text-base ">
					{ref.status === 'approved' ? (
						<span className="text-xs py-1 px-2 bg-green-100 text-green-600 capitalize rounded-full ">
							{ref.status}
						</span>
					) : (
						<span className="text-xs py-1 px-2 bg-yellow-100 text-yellow-600 capitalize rounded-full ">
							{ref.status}
						</span>
					)}
				</div>
				<div className="w-[5%] text-black  font-medium text-base flex items-end justify-end">
					<FaEllipsisH />
				</div>
			</div>
			{prompt && (
				<div className="fixed bottom-[0px]  h-full w-full  z-50 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8     xs:px-0">
					<div
						className={`max-w-[500px] w-full     popup   duration-300 ease-in-out flex flex-col py-6 px-6  gap-4   rounded-lg bg-white  items-center      ${
							promptVisible ? '' : 'popup-hidden'
						}  `}
						ref={promptRef}
					>
						<div className="flex items-center justify-between gap-4 w-full">
							<h2 className="poppins-bold text-lg ">Referral Details</h2>
							<FaXmark onClick={togglePrompt} className="cursor-pointer" />
						</div>
						<div className="flex flex-col gap-3 w-full">
							<h3>Details for referral #{index + 1}</h3>
							<div className="w-full bg-gray-100 p-2 rounded-lg grid grid-cols-2 gap-3">
								<div>
									<h4 className=" text-sm text-gray-600 font-semibold">
										Customer
									</h4>
									<p className="text-base poppins font-semibold max-sm:text-sm">
										{ref.customer}
									</p>
								</div>
								<div>
									<h4 className=" text-sm text-gray-600 font-semibold">
										Sign Up Date
									</h4>
									<p className="text-base poppins font-semibold max-sm:text-sm">
										{ref.date}
									</p>
								</div>
								<div>
									<h4 className=" text-sm text-gray-600 font-semibold">Plan</h4>
									<p className="text-base poppins font-semibold max-sm:text-sm">
										{ref.product}
									</p>
								</div>
								<div>
									<h4 className=" text-sm text-gray-600 font-semibold max-sm:text-sm">
										Commission
									</h4>
									<p className="text-base poppins font-semibold">
										{ref.commission}
									</p>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-1 self-start">
							<span>Status:</span>
							{ref.status === 'approved' ? (
								<span className="text-sm py-1 px-3 bg-green-100 text-green-600 capitalize rounded-full ">
									{ref.status}
								</span>
							) : (
								<span className="text-sm py-1 px-3 bg-yellow-100 text-yellow-600 capitalize rounded-full ">
									{ref.status}
								</span>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

