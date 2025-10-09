'use client';
import { FaXmark } from 'react-icons/fa6';
import { useUtilsContext } from '../context/utils-context';
import CustomInput from './custom-input';
import { useState } from 'react';
import AsyncButton from './async-button';
import { FaPlus } from 'react-icons/fa';

const NewLinkPopup = () => {
	const {
		newLinkPromptVisible,
		newLinkPrompt,
		toggleNewLinkPrompt,
		newLinkPromptRef,
	} = useUtilsContext();
	const [linkName, setLinkName] = useState('');
	const [url, setUrl] = useState('');
	const [error, setError] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [successful, setSuccessful] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (submitting) return;
		setError('');
		setSubmitting(true);
	};
	return (
		newLinkPrompt && (
			<div className="fixed bottom-[0px]  h-full w-full  z-50 left-0 flex  justify-center  items-center        backdrop-brightness-50  px-8     xs:px-0">
				<div
					className={`max-w-[500px] w-full     popup   duration-300 ease-in-out flex flex-col py-6 px-6  gap-4   rounded-lg bg-white  items-center      ${
						newLinkPromptVisible ? '' : 'popup-hidden'
					}  `}
					ref={newLinkPromptRef}
				>
					<div className="flex items-center justify-between gap-4 w-full">
						<h2 className="poppins-bold text-xl ">Create New Link</h2>
						<FaXmark
							onClick={toggleNewLinkPrompt}
							className="cursor-pointer  text-gray-500 text-xl"
						/>
					</div>
					<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
						<CustomInput
							value={linkName}
							setValue={setLinkName}
							setError={setError}
							errorContent="All fields are required"
							error={error}
							label="Link Name"
							inputType="text"
							required={true}
						/>
						<CustomInput
							value={url}
							setValue={setUrl}
							setError={setError}
							errorContent="All fields are required"
							error={error}
							label="Destination URL"
							inputType="text"
							required={true}
						/>
						<AsyncButton
							buttonType="submit"
							action="Create Link"
							loading={submitting}
							classname_override="max-sm:!h-[40px] hover:!bg-darkPurple duration-150 "
							success={successful}
							onClick={() => handleSubmit()}
							actionIcon={FaPlus}
						/>
					</form>
				</div>
			</div>
		)
	);
};

export default NewLinkPopup;

