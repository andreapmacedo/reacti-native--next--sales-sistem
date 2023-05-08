import { Text, View, SafeAreaView } from "react-native";
import styled from 'styled-components/native';
import Login from "./modules/login";


export const NewText = styled.Text`
  font-size: 20px;
  color: red;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
