import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useState } from 'react';

import { useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa6';


const AccordionItem = ({
	isOpen,
	onClick,
	accordion_class_override,
	arrow_class_override,
	features,
	...item
}) => {
	const contentHeight = useRef(null);
const linkname =usePathname();
	const [height, setHeight] = useState('0px');
	useEffect(() => {
		if (isOpen && contentHeight.current) {
			setHeight(`${contentHeight.current.scrollHeight}px`);
		} else {
			setHeight('0px');
		}
	}, [isOpen]);
	return (
		<div
			className={` overflow-hidden   w-full flex flex-col    text-white      text-xs ${accordion_class_override}`}
		>
		
			<button
				className={`w-full  py-3 px-6  flex items-center justify-between  border-none pointer leading-none   flex-nowrap  relative  ${
						linkname.startsWith(item.parent_link)
							? ' bg-[#ffffff26] text-white'
							: 'hover:bg-[#ffffff26] text-[#ffffffcc]'
					}`}
				onClick={onClick}
			>
					{linkname.startsWith(item.parent_link) && (
						<div className="absolute left-0 bg-[#f72585] h-full p-0.5"></div>
					)}
			<div
			
					className={`    text-base  flex items-center  gap-3     duration-150  poppins  `}
				>
					<span  className={`text-xl  ${
							linkname.startsWith(item.parent_link) ? ' text-white' : ' text-[#ffffffcc]'
						}`}>
{item.icon}
					</span>
					

					
					<span className=" poppins  font-medium text-[15px]   text-start ">{item.header}</span>
				</div>
				<FaAngleDown
					className={` duration-300    ${arrow_class_override}  ${
						isOpen ? 'rotate-[180deg]' : ''
					}`}
				></FaAngleDown>
			</button>
			<div
				ref={contentHeight}
				className="ease-out duration-300"
				style={{ height }}
			>
				<div className="flex flex-col   pl-6 gap-0.5 ">
					{features?.map((data) => (
						<Link
							href={data.href}
							className={`leading-none  py-3  shrink-0 max-xs:py-2 ease-out duration-100 hover:bg-[#ffffff0d] pl-2  relative rounded-md  ${linkname.startsWith(data.href) ?'bg-[#ffffff0d] text-white':'text-[#ffffffb3]'}`}
							key={data.dir}
						>
							{linkname.startsWith(data.href) && (
						<div className="absolute left-0 bg-[#f72585]  p-0.5   h-1/2"></div>
					)}
							<p className="   text-sm    capitalize  font-semibold">{data.dir}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

 const Accordion = ({
	links,
	accordion_class_override,
	arrow_class_override,
}) => {
	const [activeIndices, setActiveIndices] = useState([]);

	const handleItemClick = (index) => {
		setActiveIndices((prevIndices) =>
			prevIndices.includes(index)
				? prevIndices.filter((i) => i !== index)
				: [...prevIndices, index],
		);
	};

	return (
		<div className="w-full  flex   flex-col  gap-1 ">
			{links?.map((item, index) => (
				<AccordionItem
					key={item?.header}
					{...item}
					isOpen={activeIndices.includes(index)}
					onClick={() => handleItemClick(index)}
					features={item.link}
					accordion_class_override={accordion_class_override}
					arrow_class_override={arrow_class_override}
				/>
			))}
		</div>
	);
};

export default Accordion;