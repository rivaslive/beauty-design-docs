import dynamic from 'next/dynamic';
import Code from './Code';

const BlockCode = dynamic(() => import('./BlockCode'), { ssr: false });

export { Code, BlockCode };
