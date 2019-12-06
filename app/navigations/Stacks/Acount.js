import { createStackNavigator } from "react-navigation-stack";
import SAcount from "../../screens/Accounts/SAcount";
import Login from "./../../screens/Accounts/Login";
import Register from "./../../screens/Accounts/Register";

const AcountStacks = createStackNavigator({
    Acount: {
        screen: SAcount,
        navigationOptions: {
            title: "Mi Cuenta"
        }
    },
    Login: {
        screen: Login,
        navigationOptions: () => ({
            title: "Iniciar Sesión"
        })
    },
    Register: {
        screen: Register,
        navigationOptions: () => ({
            title: "Registrarse"
        })
    }
});

export default AcountStacks;
