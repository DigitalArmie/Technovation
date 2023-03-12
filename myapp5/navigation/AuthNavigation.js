import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login';
import Signup from '../screens/signup';
import SignupforNGO from '../screens/signupforNGO'
import Home from '../screens/Home';
import LOginNgo from '../screens/LoginNGO';
const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    LoginNGO:{screen:LOginNgo},
    signup: { screen: Signup },
    signupNGO: {screen : SignupforNGO},
    
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation