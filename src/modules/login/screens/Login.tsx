import { View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/theme";
import { Icon } from "../../../shared/components/icon/Icon";

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
          customMargin="0px 0px 16px 0px" 
          title="email:"
          placeholder="Digite seu email"
          errorMessage="Email inválido"
        />
        <Input
          secureTextEntry 
          title="senha:"
          placeholder="Digite sua senha"
          errorMessage="senha inválida"
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
