import React from 'react';

// components
import Imagen from 'components/Atoms/Imagen';
import Title from 'components/Atoms/Title';

// styles
import { StyleContent, StyleImage, StyleMe, StyleTitle } from './style';

interface IProps {}

const Me = (props: IProps) => {
	return (
		<StyleMe>
			<StyleContent>
				<StyleTitle variant="POPPINS_70_77_800">Author:</StyleTitle>
				<StyleTitle variant="POPPINS_40_44_800">Software Developer</StyleTitle>
				<StyleTitle className="color-secondary" variant="POPPINS_19_25_800">
					ING. KEVIN RIVAS
				</StyleTitle>
			</StyleContent>
			<StyleImage>
				<Imagen
					className="image-profile"
					src="/me.png"
					width="100%"
					height="100%"
				/>
			</StyleImage>
		</StyleMe>
	);
};

export default React.memo(Me);
