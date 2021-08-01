import React from 'react';
import { ImageProps } from 'next/image';
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
	return (
		<StyleImage className={className}>
			<img
				// @ts-ignore
				src={src}
				alt=""
				width={width}
				height={height}
				style={{ objectFit }}
				{...rest}
			/>
		</StyleImage>
	);
};

export default Imagen;
