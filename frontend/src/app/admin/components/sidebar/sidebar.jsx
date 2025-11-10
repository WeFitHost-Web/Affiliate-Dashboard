'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Accordion from './accordion';
import logo from '~/public/images/logo-icon.png'
import { IoMdHome } from 'react-icons/io';
import { HiUserGroup } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { BsCashStack } from "react-icons/bs";
import { FaChartPie, FaGear } from 'react-icons/fa6';
import { FaSignOutAlt } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const Sidebar = ({ hidden }) => {
	const linkname = usePathname();
	const sidebar_links = [
		{
			header: 'Affiliates',
			parent_link:'/admin/affiliates',
			icon: <HiUserGroup/>,

			link: [
				{
					dir: 'Affiliate List ',
					href: '/admin/affiliates/affiliate-list',
				},
				{
					dir: 'Manage Affiliates',
					href: '/admin/affiliates/manage-affiliates',
				},
				{
					dir: 'Approval Queue',
					href: '/admin/affiliates/approval-queue',
				},
				{
					dir: 'Tier Management',
					href: '/admin/affiliates/tier-management',
				},

			],
		},
		{
		
			header: 'Commission Tracking',
			parent_link:'/admin/commission',
			icon: <GoGraph/>,
			link: [
				{
					dir: 'Commission Rates',
					href: '/admin/commission/commission-rates',
				},
				{
					dir: 'Track Commissions',
					href: '/admin/commission/track-commissions',
				},
				{
					dir: 'Commission Rules',
					href: '/admin/commission/commission-rules',
				},

				{
					dir: 'Adjustments',
					href: '/admin/commission/adjustments',
				},
			],
		},
		{
			header: 'Payout Management',
			parent_link:'/admin/payout',
			icon: <BsCashStack/>,
			link: [
				{
					dir: 'Pending Payouts',
					href: '/admin/payout/pending-payouts',
				},
				{
					dir: 'Complete Payouts',
					href: '/admin/payout/complete-payouts',
				},
				{
					dir: 'Payout Methods',
					href: '/admin/payout/payout-methods',
				},
				{
					dir: 'Payout Schedule',
					href: '/admin/payout/payout-schedule',
				},
			],
		},
		{
			header: 'Reports & Analytics',
			parent_link:'/admin/reports',
			icon: <FaChartPie/>,
			link: [
				{
					dir: 'Performance Reports',
					href: '/admin/reports/performance-reports',
				},
				{
					dir: 'Analytics',
					href: '/admin/reports/analytics',
				},
				{
					dir: 'Export Data',
					href: '/admin/reports/export-data',
				},
				{
					dir: 'Custom Reports',
					href: '/admin/reports/custom-reports',
				},
			],
		},
		{
			header: 'Settings',
			parent_link:'/admin/settings',
			icon: <FaGear/>,
			link: [
				{
					dir: 'User Roles',
					href: '/admin/settings/user-roles',
				},
				{
					dir: 'Configurations',
					href: '/admin/settings/configurations',
				},
				{
					dir: 'API Access',
					href: '/admin/settings/api-access',
				},
				{
					dir: 'Security',
					href: '/admin/settings/security',
				},
			],
		},
	];
	return (
		<section
			className={`h-full w-[280px]     flex flex-col gap-5  items-start shrink-0   max-xl:pt-5  bg-[linear-gradient(#4361ee,#3a0ca3)]  max-lg:bg-transparent max-lg:w-full max-lg:px-0   overflow-auto thin-scroll   max-lg:pt-0 max-lg:gap-2    ${
				hidden && 'max-lg:hidden'
			}`}
		>
			<div className="flex    w-full flex-col  border-b border-b-[#ffffff26] pl-4 py-6 max-lg:py-3">
				<Link href={'/'} className='flex items-center gap-2 text-4xl '>
				<Image src={logo} alt="wefithost logo" className='invert  w-9' />
			<span className='poppins text-white text-[22px]  font-bold'>Affiliate-Admin</span>
				</Link>
			</div>
			<div className="h-full  w-full flex flex-col gap-1   ">
				<Link
					href={'/admin'}
					className={`   py-3 px-5 text-base  flex items-center  gap-3  w-full text-grey relative duration-150  poppins  ${
						linkname === '/admin'
							? ' bg-[#ffffff26] text-white'
							: 'hover:bg-[#ffffff26] text-[#ffffffcc]'
					}`}
				>
					<IoMdHome
						className={`text-xl  ${
							linkname === '/admin' ? ' text-white' : ' text-[#ffffffd9]'
						}`}
					/>

					{linkname === '/admin' && (
						<div className="absolute left-0 bg-[#f72585] h-full p-0.5"></div>
					)}
					<span className=" poppins font-medium ">Dashboard</span>
				</Link>
			
            <Accordion links={sidebar_links}/>
			<Link
					href={'/admin/support'}
					className={`   py-3 px-5 text-base  flex items-center  gap-3  w-full text-grey relative duration-150  poppins  ${
						linkname === '/admin/support'
							? ' bg-[#ffffff26] text-white'
							: 'hover:bg-[#ffffff26] text-[#ffffffcc]'
					}`}
				>
					<MdSupportAgent
						className={`text-xl  ${
							linkname === '/admin/support' ? ' text-white' : ' text-[#ffffffd9]'
						}`}
					/>

					{linkname === '/admin/support' && (
						<div className="absolute left-0 bg-[#f72585] h-full p-0.5"></div>
					)}
					<span className=" poppins font-medium ">Support</span>
				</Link>
				<div
					className={`   py-3 px-5 text-base  flex items-center  gap-3  w-full text-grey relative duration-150  poppins hover:bg-[#ffffff26] `}
				>
					<FaSignOutAlt
						className={`text-xl  text-[#ffffffcc]`}
					/>

				
					<span className=" poppins font-medium  text-[#ffffffcc]">Logout</span>
				</div>
			</div>
		</section>
	);
};

export default Sidebar;

