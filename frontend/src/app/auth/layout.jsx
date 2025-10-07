'use client';
import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import { checkToken } from '~/lib/utils/check-token';
export default function RootLayout({ children }) {
	const router = useRouter();
	// useEffect(() => {
	//    const handleRedirect = async () => {
	//       const hasToken = await checkToken();
	//       if (hasToken) {
	//          router.push('/');
	//       }
	//    };

	//    (async () => {
	//       await handleRedirect().catch((error) => console.error('Error', error));
	//    })();
	// }, [router]);
	return (
		<main className="min-w-screen min-h-screen flex items-center justify-center overflow-auto bg-[linear-gradient(135deg,#4361ee,#7209b7)]">
			{children}{' '}
		</main>
	);
}
