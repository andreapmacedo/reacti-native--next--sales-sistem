import { View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/theme";
import { Icon } from "../../../shared/components/icon/icon";

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Icon name="home3" size={44} color="blue"/>
        {/* <Icon name="home3" /> */}
        <Input 
          title="email:"
          placeholder="Digite seu email"
          errorMessage="Email inválido"
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="Entrar"
          // loading
          onPress={handleOnPress}/>
      </ContainerLogin>
    </View>
  );
};

export default Login;
