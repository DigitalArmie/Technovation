import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login';
import Signup from '../screens/signup';
import Home from '../screens/Home';

const Homenavigation = createStackNavigator(
  {
    Home: {screen: Home}
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)

export default Homenavigation