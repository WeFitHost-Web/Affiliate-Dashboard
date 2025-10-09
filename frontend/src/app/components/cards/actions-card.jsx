const ActionsCard = ({ icon: Icon, bg_color, action, sub_text, on_click }) => {
	return (
		<div
			className="flex items-center justify-center flex-col gap-5 bg-white custom-shadow rounded-xl p-6  hover:-translate-y-1 duration-300 cursor-pointer  max-sm:p-2"
			onClick={on_click}
		>
			<div className="flex flex-col items-center justify-center">
				<span
					className={`flex items-center justify-center h-12 w-12 max-xs:h-10 max-xs:w-10  rounded-full ${bg_color || 'bg-success'}`}
				>
					<Icon className="text-white text-2xl max-xs:text-xl" />
				</span>
				<h2 className="text-base font-semibold text-center max-xs:text-sm">
					{action}
				</h2>
				<p className="text-[13px] text-gray-500 font-semibold text-center max-xs:text-xs">
					{sub_text}
				</p>
			</div>
		</div>
	);
};

export default ActionsCard;

