import { theme } from '../../themes/theme';
import styled from 'styled-components/native';

interface ContainerInputProps {
  isError?: boolean;
}


export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  border: 1px solid;
  border-radius: 4px;
  color: ${theme.colors.neutralTheme.black};
  border-color: ${(props) => props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.neutralTheme.white};
  background-color: ${theme.colors.neutralTheme.white};
  `;
  // border-color: ${theme.colors.grayTheme.gray80};

