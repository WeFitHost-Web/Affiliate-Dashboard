import { usePopup } from '../../../utils/toggle-popups';
import { FaCopy } from 'react-icons/fa6';
import {
	FaEdit,
	FaEllipsisH,
} from 'react-icons/fa';
const LinkRow = ({ ref, index }) => {
	const {
		isVisible: promptVisible,
		isActive: prompt,
		togglePopup: togglePrompt,
		ref: promptRef,
	} = usePopup();
	return (
		<div
			className="flex gap-2 py-4 px-2 hover:bg-gray-100 cursor-pointer"
			key={index}
			onClick={togglePrompt}
		>
			<div className="w-[20%] text-black  font-medium text-base">
				{ref.name}
			</div>
			<div className="w-[40%] text-black  font-medium text-base">{ref.url}</div>
			<div className="w-[12%] text-black  font-medium text-base">
				{ref.clicks}
			</div>
			<div className="w-[13%] text-black  font-medium text-base ">
				{ref.conversions}
			</div>
			<div className="w-[10%] text-black  font-medium text-base ">
				{ref.status === 'active' ? (
					<span className="text-xs py-1 px-2 bg-green-100 text-green-600 capitalize rounded-full ">
						{ref.status}
					</span>
				) : (
					<span className="text-xs py-1 px-2 bg-yellow-100 text-yellow-600 capitalize rounded-full ">
						{ref.status}
					</span>
				)}
			</div>
			<div className="w-[5%] text-gray-600  font-medium text-sm flex items-center  px-3 text-end justify-end relative">
				<FaEllipsisH />
				{prompt && (
					<div
						className={`flex  flex-col bg-white shadow-lg  w-[100px] rounded-md   duration-150 absolute top-0 right-7  divide-y divide-gray-200 overflow-hidden border border-gray-200 z-20   ${
							promptVisible ? 'opacity-100' : 'opacity-0 '
						}`}
						ref={promptRef}
					>
						<button className="py-2 w-full text-[13px]   flex items-center gap-2  px-3 hover:bg-gray-100 duration-150">
							<FaCopy className="text-primary" />
							<span>Copy</span>
						</button>

						<button className="py-2 w-full text-[13px]   flex items-center gap-2  px-3 hover:bg-gray-100  duration-150">
							<FaEdit className="text-primary" />
							<span>Edit</span>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default LinkRow;



