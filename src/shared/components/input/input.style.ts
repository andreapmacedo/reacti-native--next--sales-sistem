import { theme } from '../../themes/theme';
import styled from 'styled-components/native';


export const ContainerInput = styled.TextInput`
  width: 100%;
  height: 48px;
  padding: 16px;
  border: 1px solid;
  border-radius: 4px;
  color: ${theme.colors.neutralTheme.black};
  border-color: ${theme.colors.grayTheme.gray80};
  background-color: ${theme.colors.neutralTheme.white};
`;

