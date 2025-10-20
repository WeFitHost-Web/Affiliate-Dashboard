'use client';
import ProfileAndSecuritySettings from './profile-security-settings';
import PaymentAndNotificationsSettings from './payment-notifications-settings';
import DataExport from './data-export';

const Settings = () => {
	return (
		<main className=" flex flex-col gap-5 p-5 max-xs:px-5 max-xs:py-2">
			<div className="flex flex-col">
				<h2 className="poppins font-semibold text-2xl">Account Settings</h2>
				<span className="text-sm text-gray font-semibold  leading-none">
					Manage your account preferences
				</span>
			</div>
			<ProfileAndSecuritySettings />
			<PaymentAndNotificationsSettings />
			<DataExport />
		</main>
	);
};

export default Settings;

