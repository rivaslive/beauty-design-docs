import { StyleButton } from 'components/Molecules/ThemeButton/style';

interface ThemeButtonProps {}

const ThemeButton = (props: ThemeButtonProps) => {
  return <StyleButton icon={<i className="bx bx-moon" />} />;
};

export default ThemeButton;
