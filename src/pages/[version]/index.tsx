import React from 'react';
import { useRouter } from 'next/router';

// components
import { defaultVersion } from 'utils/defaultVersion';

const ComponentsPage = () => {
	const router = useRouter();
	React.useEffect(() => {
		// TODO: Temporal redirect building...
		router.replace(`/${defaultVersion}/getting-started`);
	}, [router]);

	return null;
};

export default React.memo(ComponentsPage);
