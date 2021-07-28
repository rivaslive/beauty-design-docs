import React from 'react';

// components
import Layout from 'components/Molecules/Layout';
import Title from '../components/Atoms/Title';

const ComponentsPage = () => {
	return (
		<Layout>
			<Title variant="ROBOT_36_50_500">Bienvenido a Beauty UI</Title>
		</Layout>
	);
};

export default React.memo(ComponentsPage);
