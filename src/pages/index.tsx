import React from 'react';
import { useRouter } from 'next/router';

// version
// components
import HomeTemplate from 'components/Templates/Home';

export default function Home() {
	const router = useRouter();
	React.useEffect(() => {
		// TODO: Temporal redirect building...
		// router.replace(`/${defaultVersion}/components/getting-started`);
	}, [router]);

	return <HomeTemplate />;
}
