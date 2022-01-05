import styled from 'styled-components';
import Title from 'components/Atoms/Title';

export const StyleNext = styled.div`
	display: inline-block;
	padding: 10px 30px;
	margin-bottom: 20px;
	min-width: 300px;
	max-width: 100%;
	border: 1px solid rgba(100, 100, 100, .2);
	border-radius: 8px;
	cursor: pointer;
	transition: all 200ms;

	&:hover {
		transform: scale(1.05);
		transition: all 200ms;
		box-shadow: 0 2px 9px 2px #c1c1c1;
	}
`;

export const StyleContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyleIcon = styled.div`
	.anticon {
		font-size: 18px;
	}
`;

export const StyleTitle = styled(Title)`
	&.ant-typography {
		margin-bottom: 0;
	}
`;
