import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import loader from '~/public/images/loading-white.svg';

const AsyncButton = ({
	className = '  flex items-center justify-center    rounded-sm   text-center bg-primary  text-white  w-full h-[45px] text-sm font-semibold hover:bg-primary-dark duration-200',
	action,
	loading,
	success,
	disabled,
	classname_override,
	onClick,
	buttonType,
	actionIcon: Icon,
	icon_class = 'text-sm',
}) => {
	return (
		<button
			className={`${classname_override}  ${className} ${
				disabled && 'cursor-default'
			}`}
			disabled={disabled}
			onClick={onClick}
			type={buttonType}
		>
			{success ? (
				<FaCheck className="text-sm" />
			) : loading ? (
				<Image src={loader} className="w-7" alt="" />
			) : (
				<span className="flex items-center gap-1">
					{Icon && <Icon className={icon_class} />}

					{action}
				</span>
			)}
		</button>
	);
};

export default AsyncButton;

