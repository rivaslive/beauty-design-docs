import React from 'react';

// components
import Title from 'components/Atoms/Title';
import styles from 'styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();
	React.useEffect(() => {
		// TODO: Temporal redirect building...
		router.replace('/components');
	}, [router]);

	return (
		<div className={styles.container}>
			<Title variant="ROBOT_36_50_500">Bienvenido a Beauty UI</Title>
		</div>
	);
}
