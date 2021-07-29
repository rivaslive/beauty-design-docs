import React from 'react';

// components
import Layout from 'components/Molecules/Layout';
import Title from 'components/Atoms/Title';
import { useRouter } from 'next/router';

const ComponentsPage = () => {
	const router = useRouter();
	React.useEffect(() => {
		// TODO: Temporal redirect building...
		router.replace('/v1/components/getting-started');
	}, [router]);

	return (
		<Layout>
			<Title variant="ROBOT_36_50_500">Bienvenido a Beauty UI</Title>
		</Layout>
	);
};

export default React.memo(ComponentsPage);
