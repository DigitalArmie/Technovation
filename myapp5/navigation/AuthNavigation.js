import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login';
import Signup from '../screens/signup';
import SignupforNGO from '../screens/signupforNGO'
import Home from '../screens/Home';

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    signup: { screen: Signup },
    signupNGO: {screen : SignupforNGO},
    Home: {screen: Home}
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation