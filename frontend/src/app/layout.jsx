import './globals.css';
import localFont from 'next/font/local';

const PoppinsReg = localFont({
	src: './fonts/Poppins-Regular.ttf',
	variable: '--font-poppins',
});

const QuicksandReg = localFont({
	src: './fonts/Quicksand-VariableFont_wght.ttf',
	variable: '--font-quicksand',
});
const PoppinsBold = localFont({
	src: './fonts/Poppins-ExtraBold.ttf',
	variable: '--font-poppinsextra',
});
export const metadata = {
	title: 'WeFitHost Affliate Dashboard',
	description:
		'Join our affiliate program and earn rewards for every referral. Start making money today with ease and flexibility.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${PoppinsReg.variable}  ${PoppinsBold.variable}  ${QuicksandReg.variable} antialiased `}
			>
				{children}{' '}
			</body>{' '}
		</html>
	);
}
