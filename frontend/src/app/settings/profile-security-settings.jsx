'use client';
import CustomInput from '../components/custom-input';
import AsyncButton from '../components/async-button';
import Switch from 'react-switch';
import {
	FaLaptop,
	FaMobileAlt,
	FaSave,
	FaUser,
	FaWallet,
} from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { useState } from 'react';

const ProfileAndSecuritySettings = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const [company, setCompany] = useState('');
	const [error, setError] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [successful, setSuccessful] = useState(false);

	const [twoFactorAuthChecked, setTwoFactorAuthChecked] = useState(false);

	const handleTwoFactorAuthChecked = (nextTwoFactorAuthChecked) => {
		setTwoFactorAuthChecked(nextTwoFactorAuthChecked);
	};

	const [loginNotificationsChecked, setLoginNotificationsChecked] =
		useState(false);

	const handleLoginNotificationsChecked = (nextLoginNotificationsChecked) => {
		setLoginNotificationsChecked(nextLoginNotificationsChecked);
	};
	return (
		<div className="flex gap-5 max-dmd:flex-col">
			<div className="w-[50%] max-dmd:w-full p-4 flex  flex-col gap-4 bg-white custom-shadow rounded-lg">
				<div className="flex items-center gap-2 flex-wrap border-b border-b-gray-200 pb-2">
					<FaUser className="text-primary text-xl" />
					<h2 className="poppins font-semibold text-lg">Profile Information</h2>
				</div>
				<div className="flex flex-col gap-2">
					<CustomInput
						value={name}
						setValue={setName}
						setError={setError}
						errorContent="All fields are required"
						classname_override="!bg-lightGrey"
						error={error}
						label="Full Name"
						inputType="text"
						name="firstName"
					/>
					<CustomInput
						value={email}
						setValue={setEmail}
						setError={setError}
						errorContent="All fields are required"
						classname_override="!bg-lightGrey"
						error={error}
						label="Email Address"
						inputType="email"
						name="email"
					/>
					<CustomInput
						value={phone}
						setValue={setPhone}
						setError={setError}
						errorContent="All fields are required"
						classname_override="!bg-lightGrey"
						error={error}
						label="Phone Number"
						inputType="tel"
						name="phone"
					/>
					<CustomInput
						value={company}
						setValue={setCompany}
						setError={setError}
						errorContent="All fields are required"
						classname_override="!bg-lightGrey"
						error={error}
						label="Company (Optional)"
						inputType="company"
						name="company"
					/>

					<AsyncButton
						buttonType="submit"
						action="Save"
						actionIcon={FaSave}
						icon_class="text-base "
						loading={submitting}
						classname_override="max-sm:!h-[40px] hover:!bg-darkPurple duration-150 "
						success={successful}
						onClick={() => setEmail('')}
					/>
				</div>
			</div>

			<div className="w-[50%]  max-dmd:w-full  p-4 flex  flex-col gap-4 bg-white custom-shadow rounded-lg">
				<div className="flex items-center gap-2 flex-wrap border-b border-b-gray-200 pb-2">
					<FaWallet className="text-primary text-xl" />
					<h2 className="poppins font-semibold text-lg">Security settings</h2>
				</div>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-4 ">
						<div className="flex items-center justify-between w-full ">
							<div className="flex flex-col ">
								<h3 className="text-base poppins">Two-Factor Authentication</h3>
								<span className="text-sm text-gray-600">
									Add an extra layer of security to your account
								</span>
							</div>
							<label>
								<Switch
									onChange={handleTwoFactorAuthChecked}
									checked={twoFactorAuthChecked}
									uncheckedIcon={false}
									onColor="#06d6a0"
									offColor="#CCCCCC"
									checkedIcon={false}
								/>
							</label>
						</div>
						<div className="flex items-center justify-between w-full ">
							<div className="flex flex-col ">
								<h3 className="text-base poppins">Login Notifications</h3>
								<span className="text-sm text-gray-600">
									Get notified of new sign-ins
								</span>
							</div>
							<label>
								<Switch
									onChange={handleLoginNotificationsChecked}
									checked={loginNotificationsChecked}
									uncheckedIcon={false}
									onColor="#06d6a0"
									offColor="#CCCCCC"
									checkedIcon={false}
								/>
							</label>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<h3 className="text-base font-semibold poppins">
							Active Login Sessions
						</h3>
						<div className="flex items-center justify-between bg-[#4361ee0d] px-4 py-6 rounded-lg max-xs:px-2">
							<div className="flex items-center gap-3">
								<FaLaptop className="text-xl text-primary" />
								<div className="flex flex-col">
									<h4 className="text-base poppins font-semibold">
										Chrome on Windows{' '}
									</h4>
									<span className="text-sm text-gray-500 font-semibold">
										New York, USA • Current Session
									</span>
								</div>
							</div>
							<FaXmark className="text-primary" />
						</div>

						<div className="flex items-center justify-between  px-4 py-6 rounded-lg max-xs:px-2">
							<div className="flex items-center gap-3">
								<FaMobileAlt className="text-xl text-primary" />
								<div className="flex flex-col">
									<h4 className="text-base poppins font-semibold">
										Safari on iPhone
									</h4>
									<span className="text-sm text-gray-500 font-semibold">
										Chicago, USA • 2 days ago
									</span>
								</div>
							</div>
							<FaXmark className="text-primary" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileAndSecuritySettings;

