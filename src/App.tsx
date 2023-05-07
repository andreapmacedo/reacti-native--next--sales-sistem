import { Text, View, SafeAreaView } from "react-native";
import styled from 'styled-components/native';
import Example from "./Example";


export const NewText = styled.Text`
  font-size: 20px;
  color: red;
`;


const App = () => {
  return (
    <SafeAreaView>
      <Text>Testando</Text>
      <Example text="Botafogo">Title</Example>
      <Example textChange="ABC"/>
      <Example text="América"/>
      {/* <NewText>Testando</NewText> */}
    </SafeAreaView>
  );
};

export default App;
