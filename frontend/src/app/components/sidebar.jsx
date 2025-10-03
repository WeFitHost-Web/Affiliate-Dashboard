'use client'
import Image from 'next/image';
import logo from '~/public/images/logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdApps,  } from 'react-icons/md';
import {  FaLink, FaWallet,  } from 'react-icons/fa';
import { VscGraph } from 'react-icons/vsc';
import { FaGear } from 'react-icons/fa6';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { IoLogOut } from 'react-icons/io5';


const Sidebar = ({ hidden }) => {
	const linkname = usePathname();
	const menuList = [
		{
			id: 1,
			dir: 'Links & Tools',
			href: '/links-and-tools',
			icon: <FaLink />,
		},
		{
			id: 2,
			dir: 'Reports',
			href: '/reports',
			icon: <VscGraph />,
		},
		{
			id: 3,
			dir: 'Payouts',
			href: '/payouts',
			icon: <FaWallet />,
		},
		{
			id: 4,
			dir: 'Settings',
			href: '/settings',
			icon: <FaGear />,
		},
		{
			id: 5,
			dir: 'Help Center',
			href: '/help-center',
			icon: <AiFillQuestionCircle />,
		},
		{
			id: 6,
			dir: 'Logout',
			href: '/#',
			icon: <IoLogOut />,
		},
	];
	return (
		<section
			className={`h-full w-[250px]  pt-4  pb-5 flex flex-col gap-5  items-start shrink-0   max-xl:pt-5 max-xl:px-2 bg-[linear-gradient(#4361ee,#3a56d4)]  max-lg:bg-transparent max-lg:w-full max-lg:px-0 ${linkname.startsWith('/auth') && 'hidden'}   max-lg:pt-2 ${
				hidden && 'max-lg:hidden'
			}`}
		>
			<div className="flex    w-full flex-col max-lg:hidden border-b border-b-[#ffffff26] pl-4 pb-4">
				<Link href={'/'}>
					<Image
						src={logo}
						alt=""
						className="w-[160px] max-xl:w-[120px] shrink-0 invert"
						priority
					/>
				</Link>
			</div>
			<div className="h-full  w-full flex flex-col gap-1  ">
				<Link
					href={'/'}
					className={`   py-3 px-5 text-base  flex items-center  gap-3  w-full text-grey relative duration-150  poppins ${
						linkname === '/'
							? ' bg-[#ffffff26] text-white'
							: 'hover:bg-[#ffffff26] text-[#ffffffcc]'
					}`}
				>
					<MdApps
						className={`text-lg ${
							linkname === '/'
								? ' text-white'
								: ' text-[#ffffffcc]'
						}`}
					/>

					{linkname === '/' && (
						<div className="absolute left-0 bg-white h-full p-0.5"></div>
					)}
					<span className=" poppins font-semibold ">Dashboard</span>
				</Link>
				{menuList?.map((data) => (
					<div className="relative flex  items-center" key={data.id}>
						<Link
							href={`${data.href}`}
							className={`  h-[55px] pl-4 pr-5  text-[22px] duration-150  flex items-center  gap-3  w-full max-xl:text-xl relative hover:bg-[#ffffff26]      ${
								linkname.startsWith(`${data.href}`)
									? ' bg-[#ffffff26] text-white'
									: ' text-[#ffffffcc]'
							}`}
						>
							<span
								className={`text-lg ${
									linkname.startsWith(`${data.href}`)
										? ' text-white'
										: ' text-[#ffffffcc]'
								}`}
							>
								{data.icon}
							</span>
							<span className="line-clamp-1   text-base   poppins font-semibold">
								{data.dir}
							</span>
						</Link>
						{linkname.startsWith(`${data.href}`) && (
							<div className="absolute left-0 bg-white h-full p-0.5"></div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default Sidebar;
























