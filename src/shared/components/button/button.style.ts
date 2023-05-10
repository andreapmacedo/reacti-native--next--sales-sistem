import { theme } from '../../themes/theme';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
`;

export const GradientButton = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};  
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
  border-width: 1px;
  background-color: transparent;
  border-color: ${theme.colors.mainTheme.primary};
  /* background-color: blue; */
`;

/* background-color: ${theme.colors.neutralTheme.white}; */