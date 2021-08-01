import React from 'react';

// components
import Title from 'components/Atoms/Title';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();
	React.useEffect(() => {
		// TODO: Temporal redirect building...
		router.replace('/v1/components');
	}, [router]);

	return (
		<div>
			<Title variant="ROBOT_36_50_500">Bienvenido a Beauty UI</Title>
		</div>
	);
}
