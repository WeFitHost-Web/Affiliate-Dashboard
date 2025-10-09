import { usePopup } from '../../../utils/toggle-popups';

const ConversionRow = ({ con, index }) => {
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
				{con.date}
			</div>
			<div className="w-[35%] text-black  font-medium text-base">
				{con.customer}
			</div>
			<div className="w-[22%] text-black  font-medium text-base">
				{con.product}
			</div>
			<div className="w-[13%] text-black  font-medium text-base ">
				{con.commission}
			</div>
			<div className="w-[10%] text-black  font-medium text-base ">
				{con.status === 'paid' ? (
					<span className="text-xs py-1 px-2 bg-green-100 text-green-600 capitalize rounded-full ">
						{con.status}
					</span>
				) : (
					<span className="text-xs py-1 px-2 bg-yellow-100 text-yellow-600 capitalize rounded-full ">
						{con.status}
					</span>
				)}
			</div>
		</div>
	);
};

export default ConversionRow;

