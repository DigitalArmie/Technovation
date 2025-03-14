import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'
import AppNGO from './AppNGO'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Magazine from '../screens/Magazine';
import Profile from '../screens/Profile';
import Home from '../screens/Home';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation,
    AppNGO: AppNGO,

  },
  {
    initialRouteName: 'Auth'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer