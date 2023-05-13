import { TextInputProps } from "react-native";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";
import  { ContainerInput } from "./input.style";

interface InputProps extends TextInputProps {
  title?: string;
}

const Input = ({title, ...props}: InputProps) => {
  return (
    <DisplayFlexColumn>
      { title && 
        <Text
          margin="0px 0px 4px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD} 
          color={theme.colors.grayTheme.gray100}
        >
            {title}
        </Text> }
      <ContainerInput {...props}/>
    </DisplayFlexColumn>);
};

export default Input;
