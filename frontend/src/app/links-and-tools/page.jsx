'use client'
import React from 'react';
import { FaDownload, FaPlus, FaAngleDown } from "react-icons/fa";
import LinkRow from './link-row';
import LinkPerformanceGraph from './link-performance-graph';

const LinksAndTools = () => {
	const referrals = [
		{
			name: 'Main Referral Link',
			url: 'https://wefithost.com/ref/alexj123	',
			clicks: 324,
			conversions: 15,
			status: 'active',
		},
		{
			name: 'Web Hosting Promo',
			url: 'https://wefithost.com/ref/alexj123	',
			clicks: 204,
			conversions: 9,
			status: 'active',
		},
		{
			name: 'VPS Special',
			url: 'https://wefithost.com/ref/alexj123	',
			clicks: 124,
			conversions: 17,
			status: 'paused',
		}
	]
	return (
		<main className=" flex flex-col gap-5 p-5 max-xs:px-5 max-xs:py-2">
			<div className="flex flex-col">
					<h2 className="poppins font-semibold text-2xl">Links & Tools
</h2>
					<span className="text-sm text-gray font-semibold  leading-none">
Create and manage your referral links					</span>
			</div>
			<section className="flex w-full flex-col gap-10 p-4  bg-white custom-shadow rounded-lg">
				<div className="flex items-center gap-5 justify-between max-xs:flex-col max-xs:items-start">
					<h2 className="poppins-bold text-2xl">
Your Referral Links
					</h2>
					{/* <button className="h-[40px] bg-primary hover:bg-primary-dark text-base font-semibold text-white flex items-center gap-2 px-2 rounded-md duration-150">
<FaPlus/> <span>Create New Link</span>
					</button> */}
				</div>
				<div className="w-full overflow-auto">
					<div className='w-full min-w-[1000px]'>
						<div className='flex w-full flex-col divide-y divide-gray-200 overflow-hidden'>
					<div className="flex gap-2 py-4 px-2">
						<div className="w-[20%] text-gray-600 font-semibold text-sm">
							Link Name
						</div>
						<div className="w-[40%] text-gray-600 font-semibold text-sm">
							URL
						</div>
						<div className="w-[12%] text-gray-600 font-semibold text-sm">
							Clicks
						</div>
						<div className="w-[13%] text-gray-600 font-semibold text-sm ">
							Conversions
						</div>
						<div className="w-[10%] text-gray-600 font-semibold text-sm ">
						Status
						</div>
						<div className="w-[5%] text-gray-600 font-semibold text-sm ">
							Actions
						</div>
					</div>
					{referrals.map((ref, index) => (
						

<LinkRow ref={ref} index={index} key={index}/>

					))}
							</div>
						</div>
				</div>
			</section>
			<section className="w-full h-90 max-lg:h-auto flex gap-5 max-lg:flex-col">
				<div className="w-[65%] flex flex-col gap-4 custom-shadow rounded-lg p-4 bg-white max-lg:w-full max-lg:h-100">
					<div className='w-full flex items-center justify-between'>
						<h2 className="poppins-bold text-xl">
Links Performance
						</h2>
						<button className="h-[40px] border border-gray-300   text-sm text-black flex items-center gap-2 px-2 rounded-md duration-150">
<FaAngleDown/> <span>Last 30 days</span>
					</button>
					</div>
					<LinkPerformanceGraph data={referrals} />
					</div>
				<div className='flex flex-col gap-4 w-[35%] custom-shadow rounded-lg p-4 bg-white max-lg:w-full'>
					<h2 className='poppins-bold text-lg '>Banner Tools</h2>
					<p className='text-sm font-medium text-gray-500'>Use our banners to promote WeFitHost

					</p>
					
					<div className='flex gap-3 max-2xl:flex-col max-lg:flex-row'>
						<div className='flex flex-col gap-1 w-1/2 max-2xl:w-full p-2 bg-gray-100 rounded-md max-lg:w-1/2 '>
							<button className='bg-primary text-base font-medium text-white h-10 rounded-md'>
728x90
							</button>
							<span className='text-xs font-medium text-gray-600 text-center'>Leaderboard</span>
</div>
					<div className='flex flex-col gap-1 w-1/2 p-2 bg-gray-100 rounded-md max-2xl:w-full max-lg:w-1/2'>
							<button className='bg-primary text-base font-medium text-white h-10 rounded-md'>
300x250
							</button>
							<span className='text-xs font-medium text-gray-600 text-center'>Rectangle</span>
</div>
					</div>
					<button className="h-[40px] bg-primary hover:bg-primary-dark text-base font-semibold text-white flex items-center justify-center gap-2 px-2 rounded-md duration-150 max-lg:max-w-[300px]">
<FaDownload/> <span>Download All Banners</span>
					</button>
				</div>
			</section>
			
			</main>
	);
};

export default LinksAndTools;



 