import React, { useCallback } from 'react';
import type { Settings } from 'react-slick';

// components
import DotSlidersComponent from 'components/Molecules/DotSliders';

// theme
import { ColorVariant } from 'styles/theme/theme';
import { CustomPagination } from 'components/Molecules/DotSliders/DotSliders';

// eslint-disable-next-line no-unused-vars
type SettingsType = (p?: {
	dotColor?: ColorVariant;
	bgColor?: ColorVariant;
}) => Settings;

interface ArrowProps {
	className?: string;
	style?: any;
	onClick?: () => void;

	[key: string]: unknown;
}

export default function useSlick(ref: any = null, isBanner: boolean = false) {
	// Handlers
	const nextSlider = useCallback(() => {
		ref?.current?.slickNext();
	}, [ref]);

	const prevSlider = useCallback(() => {
		ref?.current?.slickPrev();
	}, [ref]);

	const defaultSettings = React.useCallback<SettingsType>(
		(props) => {
			return {
				arrows: false,
				dots: true,
				customPaging: (index) => (
					<CustomPagination
						key={index}
						onClick={() => ref?.current?.slickGoTo(index)}
						color={props?.dotColor}
						bgColor={props?.bgColor}
					/>
				),
				appendDots: (dots) => (
					<DotSlidersComponent
						dots={dots}
						bgColor={props?.bgColor}
						dotColor={props?.dotColor}
						onPrev={prevSlider}
						onNext={nextSlider}
					/>
				),
			};
		},
		[nextSlider, prevSlider],
	);

	return {
		nextSlider,
		prevSlider,
		CustomPagination,
		defaultSettings,
	};
}
