'use client'
import { FaRegBell } from "react-icons/fa";
import { useUtilsContext } from "../context/utils-context";
import { toggleOverlay } from "./../../../utils/toggle-overlay";
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { usePathname } from "next/navigation";

const Header = () => {
		const { overlayOpen, setOverlayOpen } =
			useUtilsContext();
	const handleToggleOverlay = () => {
		toggleOverlay();
		setOverlayOpen(!overlayOpen);
	};

	const linkname = usePathname();
	
    return (
			<header className={`flex items-center justify-end max-lg:justify-between  w-full  px-5   sticky top-0 z-50  bg-white ${linkname.startsWith('/auth') && 'hidden'}`}>
				<div className="max-lg:flex items-center gap-1 hidden">
			

					<button
						className="rounded-sm  max-2xs:flex "
						onClick={handleToggleOverlay}
					>
						{overlayOpen ? (
							<IoMdClose className="text-2xl text-black " />
						) : (
							<IoMdMenu className="text-2xl text-black" />
						)}
					</button>
				</div>
				<div className="flex items-center gap-2 py-4 rounded-lg max-lg:py-2">
					<div className="relative  ">
						<button className="hover:bg-grey py-2 px-2 rounded-full ">
							<FaRegBell className="text-xl text-gray-500" />
						</button>
						<button className=" flex items-center justify-center bg-danger h-4  w-4  rounded-full text-center absolute top-1  right-1">
							<span className="text-white text-[10px]">5</span>
						</button>
					</div>
					<button className="h-10 w-10 max-lg:h-8 max-lg:w-8 flex items-center justify-center rounded-full bg-primary-dark">
						<span className="poppins-bold text-base text-white">AJ</span>
					</button>
					<div className="flex flex-col gap-1 max-xs:hidden">
						<h3 className="text-base poppins  leading-none">Alex Johnson</h3>
						<span className="text-xs text-gray font-semibold  leading-none">
							Affiliate Partner
						</span>
					</div>
				</div>
			</header>
		);
}
 





export default Header;