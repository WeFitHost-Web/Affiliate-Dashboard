// 'use client'
// import { useState } from "react";
// import CustomInput from "../components/custom-input";
// import AsyncButton from "../components/async-button";
// import Switch from "react-switch";

// const Settings = () => {
// 	const [name, setName] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [phone, setPhone] = useState('');
// 	const [currentPassword, setCurrentPassword] = useState('');
// 	const [newPassword, setNewPassword] = useState('');
// 	const [confirmPassword, setConfirmPassword] = useState('');
// 	 const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
// 	const toggleCurrentPasswordVisibility = () => {
// 		setCurrentPasswordVisible(!currentPasswordVisible);
// 	};
// 	 const [newPasswordVisible, setNewPasswordVisible] = useState(false);
// 	const toggleNewPasswordVisibility = () => {
// 		setNewPasswordVisible(!newPasswordVisible);
// 	};
// 	 const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
// 	const toggleConfirmPasswordVisibility = () => {
// 		setConfirmPasswordVisible(!confirmPasswordVisible);
// 	};
// 	const [company, setCompany] = useState('');
// 	const [error, setError] = useState('');
// 	   const [submitting, setSubmitting] = useState(false);
// 	const [successful, setSuccessful] = useState(false);
// 	const paymentSettings=[
// 		{
// 			type: 'PayPal',
// 			to: 'alex.johnson@example.com',
// 			status:'primary'
// 		},
// 			{
// 			type: 'Bank Transfer',
// 			to: '**** **** **** 1234',
// 			status:'verified'
// 		},
// 				{
// 			type: 'Stripe',
// 			to: 'alex.johnson@example.com',
// 			status:'not verified'
// 		},
// 	]
// 	  const [emailchecked, setEmailChecked] = useState(false);

//   const handleChange = (nextEmailChecked) => {
//     setEmailChecked(nextEmailChecked);
//   };
	
// 	const [payoutChecked, setPayoutChecked] = useState(false);

//   const handlePayoutCheck = (nextPayoutChecked) => {
//     setPayoutChecked(nextPayoutChecked);
//   };
	
// 	const [promotionalOffers, setPromotionalOffers] = useState(false);

//   const handlePromotionalOffers = (nextPromotionalOffers) => {
//     setPromotionalOffers(nextPromotionalOffers);
//   };
	
// 		const [monthlyReportsChecked, setMonthlyReportsChecked] = useState(false);

//   const handleMonthlyReportsChecked = (nextMonthlyReportsChecked) => {
//     setMonthlyReportsChecked(nextMonthlyReportsChecked);
//   };
	

// 	return (
// 		<main className=" flex flex-col gap-5 p-5 max-xs:px-5 max-xs:py-2">
// 			<div className="flex flex-col">
// 					<h2 className="poppins font-semibold text-2xl">Account Settings</h2>
// 					<span className="text-sm text-gray font-semibold  leading-none">
// 					Manage your account preferences
// 					</span>
// 				</div>
// 			<div className="flex gap-5 max-dmd:flex-col">
// 				<div className="w-[60%] max-dmd:w-full p-4 flex  flex-col gap-4 bg-white custom-shadow rounded-lg">
// 					<h2 className="poppins font-semibold text-2xl">Profile Information</h2>
// 					<div className="flex flex-col gap-2">
						
// 						  <CustomInput
// 				value={name}
// 				setValue={setName}
// 				setError={setError}
// 				errorContent="All fields are required"
// 				classname_override="!bg-lightGrey"
// 				error={error}
// 				label="Full Name"
// 				inputType="text"
				
// 				name="firstName"
// 			/>
//   <CustomInput
// 				value={email}
// 				setValue={setEmail}
// 				setError={setError}
// 				errorContent="All fields are required"
// 				classname_override="!bg-lightGrey"
// 				error={error}
// 				label="Email Address"
// 				inputType="email"
				
// 				name="email"
// 						/>
// 						 <CustomInput
// 				value={phone}
// 				setValue={setPhone}
// 				setError={setError}
// 				errorContent="All fields are required"
// 				classname_override="!bg-lightGrey"
// 				error={error}
// 				label="Phone Number"
// 				inputType="tel"
				
// 				name="phone"
// 						/>
// 						 <CustomInput
// 				value={company}
// 				setValue={setCompany}
// 				setError={setError}
// 				errorContent="All fields are required"
// 				classname_override="!bg-lightGrey"
// 				error={error}
// 				label="Company"
// 				inputType="company"
				
// 				name="company"
// 						/>
						
// 						 <AsyncButton
//                buttonType='submit'
// 				action="Save"
// 				loading={submitting}
// 				classname_override="max-sm:!h-[40px] hover:!bg-darkPurple duration-150 "
// 				success={successful}
			
// 				onClick={() => setEmail('')}
// 			/>
            
// 					</div>
// 				</div>
// 				<div className="w-[40%] max-dmd:w-full p-4 flex  flex-col gap-5 bg-white custom-shadow rounded-lg">
// 					<h2 className="poppins font-semibold text-2xl">Payment Settings
// </h2>
// 					<div className="flex flex-col gap-4 justify-between h-full">
// 						<div className="flex flex-col gap-2">
// 						{paymentSettings.map((setting, index) => (
// 							<div className="flex gap-2 w-full items-center justify-between" key={index}>
// 								<div className="flex flex-col">
// 									<h3 className="poppins text-base font-medium">
// 										{setting.type}
// 									</h3>
// 									<h4 className="text-sm">
// 										{setting.to}
// </h4>
// 								</div>
// 								{setting?.status==="primary" &&(<span className="p-1 px-2 rounded-full text-xs bg-[#06d6a033] text-success">
// {setting.status}
// 								</span>)}
// 								{setting?.status==="verified" &&(<span className="p-1 px-2 rounded-full text-xs bg-[#ffd16633] text-[#e6b400]">
// {setting.status}
// 								</span>)}
// 								{setting?.status==="not verified" &&(<span className="p-1 px-2 rounded-full text-xs bg-red-100 text-danger">
// {setting.status}
// 								</span>)}
								
								
// 					</div>
// 				))}
// 						</div>
// 						 <AsyncButton
//                buttonType='submit'
// 				action="Add Payment Method"
// 				loading={submitting}
// 				classname_override="max-sm:!h-[40px] !bg-secondary hover:!bg-darkPurple duration-150 "
// 				success={successful}
			
// 				onClick={() => setEmail('')}
// 			/>
            
// 					</div>
// 				</div>
// 			</div>
// 				<div className="w-full p-4 flex  flex-col gap-4 bg-white custom-shadow rounded-lg">
// 					<h2 className="poppins font-semibold text-2xl">Security Settings</h2>
// 					<div className="flex flex-col gap-2">
						
// 						<CustomInput
// 				value={currentPassword}
// 				label="Current Password"
// 				setValue={setCurrentPassword}
// 				setError={setError}
// 				errorContent="All fields are required"
// 				classname_override="!bg-lightGrey"
// 				error={error}
// 				name="password"
// 				inputType={currentPasswordVisible ? 'text' : 'password'}
// 				password
// 				toggleVisibility={toggleCurrentPasswordVisibility}
// 				passwordVisible={currentPasswordVisible}
			
// 					/>
// 					<CustomInput
// 				value={newPassword}
// 				label="New Password"
// 				setValue={setNewPassword}
// 				setError={setError}
// 				errorContent="All fields are required"
// 				classname_override="!bg-lightGrey"
// 				error={error}
// 				name="newPassword"
// 				inputType={newPasswordVisible ? 'text' : 'password'}
// 				password
// 				toggleVisibility={toggleNewPasswordVisibility}
// 				passwordVisible={newPasswordVisible}
			
// 					/>
// 					<CustomInput
// 				value={confirmPassword}
// 				label="Confirm Password"
// 				setValue={setConfirmPassword}
// 				setError={setError}
// 				errorContent="All fields are required"
// 				classname_override="!bg-lightGrey"
// 				error={error}
// 				name="password"
// 				inputType={confirmPasswordVisible ? 'text' : 'password'}
// 				password
// 				toggleVisibility={toggleConfirmPasswordVisibility}
// 				passwordVisible={confirmPasswordVisible}
			
// 			/>
						
// 						 <AsyncButton
//                buttonType='submit'
// 				action="Update Password"
// 				loading={submitting}
// 				classname_override="max-sm:!h-[40px] hover:!bg-darkPurple duration-150 !max-w-[300px]"
// 				success={successful}
			
// 				onClick={() => setEmail('')}
// 			/>
            
// 					</div>
// 			</div>
			

// 			<div className="w-full p-4 flex  flex-col gap-4 bg-white custom-shadow rounded-lg">
// 					<h2 className="poppins font-semibold text-2xl">Notifications Preferences</h2>
// 					<div className="flex flex-col gap-2 divide-y divide-gray-200">
// 					<div className="flex items-center justify-between w-full py-3">
// 						<div className="flex flex-col ">
// 							<h3 className="text-base poppins">
// 								Email Notifications

// 							</h3>
// 							<span className="text-sm text-gray-600">Receive important updates via email</span>
// 						</div>
// 						 <label>
//         <Switch onChange={handleChange} checked={emailchecked} uncheckedIcon={false} />
//       </label>
// 						</div>
						
//             <div className="flex items-center justify-between w-full py-3">
// 						<div className="flex flex-col ">
// 							<h3 className="text-base poppins">
// 								Payout Alerts

// 							</h3>
// 							<span className="text-sm text-gray-600">Get notified when payments are sent</span>
// 						</div>
// 						 <label>
//         <Switch onChange={handlePayoutCheck} checked={payoutChecked} uncheckedIcon={false} />
//       </label>
// 					</div>
					
// 					<div className="flex items-center justify-between w-full py-3">
// 						<div className="flex flex-col ">
// 							<h3 className="text-base poppins">
// 								Promotional Offers
// 							</h3>
// 							<span className="text-sm text-gray-600">
// Receive special offers and promotions</span>
// 						</div>
// 						 <label>
//         <Switch onChange={handlePromotionalOffers} checked={promotionalOffers} uncheckedIcon={false} />
//       </label>
// 					</div>
					
// <div className="flex items-center justify-between w-full py-3">
// 						<div className="flex flex-col ">
// 							<h3 className="text-base poppins">
// 								Monthly Reports
// 							</h3>
// 							<span className="text-sm text-gray-600">
// Get monthly performance reports</span>
// 						</div>
// 						 <label>
//         <Switch onChange={handleMonthlyReportsChecked} checked={monthlyReportsChecked} uncheckedIcon={false} />
//       </label>
// 					</div>
					
// 					</div>
// 				</div>
// 		</main>
// 	);
// };

// export default Settings;
