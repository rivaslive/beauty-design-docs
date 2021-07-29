import React from 'react';
import ImagenComponent, { ImageProps } from 'next/image';
import { StyleImage } from './style';

type ImagenProps = {
	className?: string;
} & ImageProps;

const Imagen = ({
	className,
	src,
	width,
	height,
	objectFit = 'contain',
	...rest
}: ImagenProps) => {
	const isExternal = React.useMemo<boolean>(() => {
		if (src && typeof src === 'string') {
			const isE = src?.search(/http:|https:/);
			return isE !== -1;
		}
		return false;
	}, [src]);
	return (
		<StyleImage className={className}>
			{isExternal ? (
				<img
					// @ts-ignore
					src={src}
					alt=""
					width={width}
					height={height}
					style={{ objectFit }}
					{...rest}
				/>
			) : (
				// @ts-ignore
				<ImagenComponent src={src} width={width} height={height} objectFit={objectFit} {...rest} />
			)}
		</StyleImage>
	);
};

export default Imagen;
