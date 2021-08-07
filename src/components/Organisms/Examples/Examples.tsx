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

const Examples = (props: IProps) => {
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
				<StyleSubTitle variant="POPPINS_40_44_800">How do I look</StyleSubTitle>
				<StyleTitle variant="POPPINS_70_77_800">Examples UI</StyleTitle>
				<StyleContentSlick>
					<Slick ref={ref} {...settings}>
						<WhyCard
							isExample
							className="why-card"
							image="https://i.pinimg.com/originals/16/a0/14/16a014584d3aff552fee083e3cd99642.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							isExample
							className="why-card"
							image="https://i.pinimg.com/originals/4b/be/53/4bbe53013f796b531831aed393daa901.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							isExample
							className="why-card"
							image="https://www.sketchappsources.com/resources/source-image/fitness-app-dawid-tomczyk.jpg"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							isExample
							className="why-card"
							image="https://assets.justinmind.com/wp-content/uploads/2019/08/mobile-banking-app-design-best-ui-patterns-1.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							isExample
							className="why-card"
							image="https://files.muzli.space/55c423d3326be16b5a154d95940a8744.jpeg"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							isExample
							className="why-card"
							image="https://assets.justinmind.com/wp-content/uploads/2019/08/mobile-banking-app-design-best-ui-patterns-1.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							isExample
							className="why-card"
							image="https://i.pinimg.com/originals/aa/1e/e1/aa1ee1768c213f6fb8c38b37e735d4fe.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
						<WhyCard
							isExample
							className="why-card"
							image="https://i.pinimg.com/originals/df/9d/a2/df9da2748641b981d772de3e604a1502.png"
							title="Fast Building"
							summary="The fast building React Native app"
						/>
					</Slick>
				</StyleContentSlick>
			</StyleContentTitle>
		</StyleSeccondSection>
	);
};

export default Examples;
