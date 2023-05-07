import { Text, View, SafeAreaView } from "react-native";
import styled from 'styled-components/native';

export const NewText = styled.Text`
  font-size: 20px;
  color: red;
`;


const App = () => {
  return (
    <SafeAreaView>
      <Text>Testando</Text>
      <Text>Testando</Text>
      <NewText>Testando</NewText>
    </SafeAreaView>
  );
};

export default App;
