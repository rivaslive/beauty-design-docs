import styled from 'styled-components';

export const StyleExample = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	margin: 0 0 16px;
	border: 1px solid #f0f0f0;
	border-radius: 2px;
	transition: all 0.2s;
`;

export const StyleFirstSection = styled.div`
	padding: 42px 24px 50px;
	border-bottom: 1px solid #f0f0f0;
	text-align: center;

	img {
		margin: auto;
	}
`;

export const StyleSecondSection = styled.div`
	padding: 0 24px 10px;

	.title {
		background: white;
		padding: 0 5px;
	}
`;

export const StyleTitle = styled.div`
	width: fit-content;
	margin-top: -15px;
`;

export const StyleFooter = styled.div`
	border-top: 1px dashed #f0f0f0;
	text-align: center;
	padding: 5px 24px;

	.ant-btn {
		padding: 0;
		margin: 0;
		color: rgba(0, 0, 0, 0.5);
		transition: all 200ms;

		&:hover {
			color: rgba(0, 0, 0, 0.85);
			transform: scale(1.1);
			transition: all 200ms;
		}
	}
`;

export const StyleShowCode = styled.div`
	border-top: 1px dashed #f0f0f0;
	padding: 10px;
	transition: all 1000ms;
`;
