import { createStackNavigator } from 'react-navigation-stack'
import Loginn from '../screens/Login';
import Signupp from '../screens/signup';
import SignupforNGOO from '../screens/signupforNGO'
import Home from '../screens/Home';
import LOginNgo from '../screens/LoginNGO';
const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Loginn },
    LoginNGO:{screen:LOginNgo},
    signup: { screen: Signupp },
    signupNGO: {screen : SignupforNGOO},
    
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation