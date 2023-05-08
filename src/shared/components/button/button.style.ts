import styled from 'styled-components/native';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  background-color: #000;
  justify-content: center;
  align-items: center;
  /* margin: 8px 8px 8px 8px; */
  /* margin: ${(props) => props.margin || '8px 8px 8px 8px'}; */
  ${(props) => (props.margin ? `margin: 8px 8px 8px 8px` : '')};
  background-color: blue;
`;
