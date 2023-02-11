import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login';
import Signup from '../screens/signup';
import Home from '../screens/Home';

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    signup: { screen: Signup },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation