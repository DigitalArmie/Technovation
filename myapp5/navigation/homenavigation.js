import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login';
import Signup from '../screens/signup';
import Home from '../screens/Home';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Magazine from '../screens/Magazine';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
const Stack = createStackNavigator(
  {
    screen: Home
    
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)
