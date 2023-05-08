import { TextInput } from "react-native";
import  { ContainerInput } from "./input.style";

// interface InputProps extends TextInputProps {

// }
// type InputProps = TextInputProps & {
// }

type InputProps = TextInputProps;

const Input = ({...props}: InputProps) => {
  // return <TextInput />;
  return <ContainerInput {...props}/>;
};

export default Input;
