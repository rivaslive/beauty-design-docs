import React, { useRef } from 'react';
import Slick, { Settings } from 'react-slick';

import useSlick from 'hooks/useSlick';

// components
import { WhyCard } from 'components/Molecules/Cards';

// styles
import {
	StyleContentSlick,
	StyleContentTitle,
	StyleSeccondSection,
	StyleSubTitle,
	StyleTitle,
} from './style';

interface IProps {
	id?: string;
	className?: string;
}

const WhyBeautyUI = (props: IProps) => {
	const ref = useRef<Slick>(null);
	const { defaultSettings } = useSlick(ref);
	const settings: Settings = React.useMemo(() => {
		return {
			...defaultSettings(),
			className: 'active',
			centerMode: true,
			infinite: true,
			centerPadding: "20px",
			slidesToShow: 3,
			slidesPerRow: 1,
			speed: 500,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
	}, [defaultSettings]);
	return (
		<StyleSeccondSection {...props}>
			<StyleContentTitle>
				<StyleSubTitle variant="POPPINS_40_44_800">What we do</StyleSubTitle>
				<StyleTitle variant="POPPINS_70_77_800">Why Beauty UI?</StyleTitle>
				<StyleContentSlick>
					<Slick ref={ref} {...settings}>
						<WhyCard
							className="why-card"
							image="https://icons-for-free.com/iconfiles/png/512/green+lock+privacy+safe+secure+security+icon-1320196713520107078.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							className="why-card"
							image="https://icons-for-free.com/iconfiles/png/512/green+lock+privacy+safe+secure+security+icon-1320196713520107078.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							className="why-card"
							image="https://icons-for-free.com/iconfiles/png/512/green+lock+privacy+safe+secure+security+icon-1320196713520107078.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							className="why-card"
							image="https://icons-for-free.com/iconfiles/png/512/green+lock+privacy+safe+secure+security+icon-1320196713520107078.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							className="why-card"
							image="https://icons-for-free.com/iconfiles/png/512/green+lock+privacy+safe+secure+security+icon-1320196713520107078.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							className="why-card"
							image="https://icons-for-free.com/iconfiles/png/512/green+lock+privacy+safe+secure+security+icon-1320196713520107078.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							className="why-card"
							image="https://icons-for-free.com/iconfiles/png/512/green+lock+privacy+safe+secure+security+icon-1320196713520107078.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							className="why-card"
							image="https://icons-for-free.com/iconfiles/png/512/green+lock+privacy+safe+secure+security+icon-1320196713520107078.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
					</Slick>
				</StyleContentSlick>
			</StyleContentTitle>
		</StyleSeccondSection>
	);
};

export default WhyBeautyUI;
