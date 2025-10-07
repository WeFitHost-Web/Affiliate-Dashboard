import eye from '~/public/icons/eye.svg';
import eyeOff from '~/public/icons/eye-off.svg';
import Image from 'next/image';

const CustomInput = ({
	value,
	error,
	setValue,
	setError,
	errorContent,
	maxlength,
	placeholder,
	inputType = 'text',
	label,
	note,
	name,
	textarea = false,
	autocomplete = 'on',
	autofocus = false,
	required = true,
	password,
	toggleVisibility,
	passwordVisible,
	serverError,
	classname_override,
	onKeyDown,
	disableSpaces = false,
	onChange,
}) => {
	const handleKeyDown = (e) => {
		if (disableSpaces && e.key === ' ') {
			e.preventDefault();
		}

		if (onKeyDown) onKeyDown(e);
	};

	const handleChange = (e) => {
		if (disableSpaces) {
			const valueWithoutSpaces = e.target.value.replace(/\s/g, '');
			const syntheticEvent = {
				...e,
				target: { ...e.target, value: valueWithoutSpaces },
			};
			if (onChange)
				onChange(syntheticEvent);
		} else {
			if (onChange) onChange(e);
		}
	};
	return (
		<div className="flex flex-col gap-1 w-full ">
			{label && (
				<span
					className={`text-sm font-medium  poppins ${
						error && serverError?.includes(error) && 'text-red'
					} ${
						error === errorContent && !value ? 'text-red' : 't'
					}`}
				>
					{label}
				</span>
			)}
			{!textarea && (
				<div className="flex  items-center relative w-full">
					<input
						className={`  ${classname_override} h-[45px] py-1 px-3   text-black   text-sm   ring-[1px] ring-gray-200    focus:ring-primary    outline-none w-full  duration-150 rounded-sm hover:bg-gray-50 ${
							error && serverError?.includes(error) && 'border-red border-2'
						}     ${
							required && error === errorContent && !value
								? 'border-red border-2 '
								: 'border-grey'
						}
${password && 'pr-8'}
            `}
						placeholder={placeholder}
						type={inputType}
						value={value}
						name={name}
						autoFocus={autofocus}
						required={required}
						autoComplete={autocomplete}
						onChange={(e) => {
							setValue(e.target.value);
							setError?.('');
							handleChange(e);
						}}
						onKeyDown={handleKeyDown}
					/>
					{password && (
						<Image
							src={passwordVisible ? eyeOff : eye}
							className="w-5 absolute right-2  cursor-pointer"
							alt="reveal"
							onClick={toggleVisibility}
						/>
					)}
				</div>
			)}

			{textarea && (
				<div className="flex flex-col gap-1 ">
					<textarea
						className={` ${classname_override}  min-h-[50px] py-1 px-3     bg-grey  text-black   text-sm    focus:ring-[1px]    ring-primary    outline-none w-full  duration-150 rounded-sm ${
							error && serverError?.includes(error) && 'border-red border-2'
						}     ${
							error === errorContent && !value
								? 'border-red border-2 '
								: 'border-grey'
						}`}
						placeholder={placeholder}
						value={value}
						maxLength={maxlength ?? undefined}
						required
						onChange={(e) => {
							setValue(e.target.value);
							setError?.('');
						}}
					/>
					<span className="text-xs text-silver-blue text-end">
						{String(value).length}/{maxlength ?? '160'}
					</span>
				</div>
			)}
			{error && serverError?.includes(error) && (
				<h1 className="text-[11px]  text-red">{error}</h1>
			)}
			{note && <h1 className="text-[11px]  text-grey">*{note}</h1>}
		</div>
	);
};

export default CustomInput;

