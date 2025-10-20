'use client';
import { useState } from 'react';
import AsyncButton from '../components/async-button';
import Switch from 'react-switch';
import { FaBell, FaPlus, FaWallet } from 'react-icons/fa';
const PaymentAndNotificationsSettings = () => {
	const [submitting, setSubmitting] = useState(false);
	const [successful, setSuccessful] = useState(false);
	const [email, setEmail] = useState('');
	const paymentSettings = [
		{
			type: 'PayPal',
			to: 'alex.johnson@example.com',
			status: 'primary',
		},
		{
			type: 'Bank Transfer',
			to: '**** **** **** 1234',
			status: 'verified',
		},
		{
			type: 'Stripe',
			to: 'alex.johnson@example.com',
			status: 'not verified',
		},
	];
	const [emailchecked, setEmailChecked] = useState(false);

	const handleChange = (nextEmailChecked) => {
		setEmailChecked(nextEmailChecked);
	};

	const [payoutChecked, setPayoutChecked] = useState(false);

	const handlePayoutCheck = (nextPayoutChecked) => {
		setPayoutChecked(nextPayoutChecked);
	};

	const [promotionalOffers, setPromotionalOffers] = useState(false);

	const handlePromotionalOffers = (nextPromotionalOffers) => {
		setPromotionalOffers(nextPromotionalOffers);
	};

	const [monthlyReportsChecked, setMonthlyReportsChecked] = useState(false);

	const handleMonthlyReportsChecked = (nextMonthlyReportsChecked) => {
		setMonthlyReportsChecked(nextMonthlyReportsChecked);
	};

	return (
		<div className="flex gap-5 max-dmd:flex-col ">
			<div className="w-[50%] max-dmd:w-full p-4 flex  flex-col gap-5 bg-white custom-shadow rounded-lg">
				<div className="flex items-center gap-2 flex-wrap border-b border-b-gray-200 pb-2">
					<FaWallet className="text-primary text-xl" />
					<h2 className="poppins font-semibold text-lg">Payment settings</h2>
				</div>
				<div className="flex flex-col gap-4 justify-between h-full">
					<div className="flex flex-col gap-2">
						{paymentSettings.map((setting, index) => (
							<div
								className="flex gap-2 w-full items-center justify-between"
								key={index}
							>
								<div className="flex flex-col">
									<h3 className="poppins text-base font-medium">
										{setting.type}
									</h3>
									<h4 className="text-sm">{setting.to}</h4>
								</div>
								{setting?.status === 'primary' && (
									<span className="p-1 px-2 rounded-full text-xs bg-[#06d6a033] text-success">
										{setting.status}
									</span>
								)}
								{setting?.status === 'verified' && (
									<span className="p-1 px-2 rounded-full text-xs bg-[#ffd16633] text-[#e6b400]">
										{setting.status}
									</span>
								)}
								{setting?.status === 'not verified' && (
									<span className="p-1 px-2 rounded-full text-xs bg-red-100 text-danger">
										{setting.status}
									</span>
								)}
							</div>
						))}
					</div>
					<AsyncButton
						buttonType="submit"
						action="Add Payment Method"
						loading={submitting}
						classname_override="max-sm:!h-[40px] !bg-secondary hover:!bg-darkPurple duration-150 "
						success={successful}
						actionIcon={FaPlus}
						icon_class="text-sm"
						onClick={() => setEmail('')}
					/>
				</div>
			</div>
			<div className="w-[50%] p-4 flex  flex-col gap-4 bg-white custom-shadow rounded-lg max-dmd:w-full">
				<div className="flex items-center gap-2 flex-wrap border-b border-b-gray-200 pb-2">
					<FaBell className="text-primary text-xl" />
					<h2 className="poppins font-semibold text-lg">
						Notifications preferences
					</h2>
				</div>
				<div className="flex flex-col gap-2 divide-y divide-gray-200">
					<div className="flex items-center justify-between w-full py-3">
						<div className="flex flex-col ">
							<h3 className="text-base poppins">Email Notifications</h3>
							<span className="text-sm text-gray-600">
								Receive important updates via email
							</span>
						</div>
						<label>
							<Switch
								onChange={handleChange}
								checked={emailchecked}
								uncheckedIcon={false}
								onColor="#06d6a0"
								offColor="#CCCCCC"
								checkedIcon={false}
							/>
						</label>
					</div>

					<div className="flex items-center justify-between w-full py-3">
						<div className="flex flex-col ">
							<h3 className="text-base poppins">Payout Alerts</h3>
							<span className="text-sm text-gray-600">
								Get notified when payments are sent
							</span>
						</div>
						<label>
							<Switch
								onChange={handlePayoutCheck}
								checked={payoutChecked}
								uncheckedIcon={false}
								onColor="#06d6a0"
								offColor="#CCCCCC"
								checkedIcon={false}
							/>
						</label>
					</div>

					<div className="flex items-center justify-between w-full py-3">
						<div className="flex flex-col ">
							<h3 className="text-base poppins">Promotional Offers</h3>
							<span className="text-sm text-gray-600">
								Receive special offers and promotions
							</span>
						</div>
						<label>
							<Switch
								onChange={handlePromotionalOffers}
								checked={promotionalOffers}
								uncheckedIcon={false}
								onColor="#06d6a0"
								offColor="#CCCCCC"
								checkedIcon={false}
							/>
						</label>
					</div>

					<div className="flex items-center justify-between w-full py-3">
						<div className="flex flex-col ">
							<h3 className="text-base poppins">Monthly Reports</h3>
							<span className="text-sm text-gray-600">
								Get monthly performance reports
							</span>
						</div>
						<label>
							<Switch
								onChange={handleMonthlyReportsChecked}
								checked={monthlyReportsChecked}
								uncheckedIcon={false}
								onColor="#06d6a0"
								offColor="#CCCCCC"
								checkedIcon={false}
							/>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentAndNotificationsSettings;

