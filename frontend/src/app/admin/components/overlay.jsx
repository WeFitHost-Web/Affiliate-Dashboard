'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAdminUtilsContext } from '../context/admin-utils-context';
import Sidebar from './sidebar/sidebar';

const Overlay = () => {
	const { setOverlayOpen } = useAdminUtilsContext();

	const linkname = usePathname();
	useEffect(() => {
		const overlayElement = document.getElementById('admin-overlay');

		if (!overlayElement) {
			return;
		}
		overlayElement.style.transform = 'translateX(-100%)';

		setOverlayOpen(false);
	}, [linkname, setOverlayOpen]);

	return (
		<div
			className=" hidden w-full  fixed z-40 top-0 right-0 bg-white  max-lg:flex      flex-col gap-16 justify-end   ease-out duration-[0.4s]  h-full text-[#000]  "
			id="admin-overlay"
			style={{ transform: 'translateX(-100%)' }}
		>
			<div className=" w-full  h-full mt-[52px]     flex flex-col  overflow-auto  gap-2 ">
			<Sidebar hidden={false}/>
			</div>
		</div>
	);
};

export default Overlay;

