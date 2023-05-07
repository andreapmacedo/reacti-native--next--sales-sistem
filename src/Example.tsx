import { Text, View } from "react-native";

interface ExampleProps {
  text?: string;
  children?: String;
  textChange?: string;
}

// const Example = (props: ExampleProps) => {
const Example = ({children, text, textChange: newPropName}: ExampleProps) => {
  return (
    <View>
      <Text style={{color: 'red'}} >{children}</Text>
      <Text style={{color: 'green'}} >{text}</Text>
      <Text style={{color: 'blue'}} >{newPropName}</Text>
      {/* <Text style={{color: 'red'}} >{props.children}</Text>
      <Text style={{color: 'green'}} >{props.text}</Text> */}
    </View>
  );
};

export default Example;
