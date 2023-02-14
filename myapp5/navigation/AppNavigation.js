import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Magazine from '../screens/Magazine';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Setari from '../screens/Setari';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Setari" component={Setari} />
    </HomeStack.Navigator>
  );
}
export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Magazine" component={Magazine} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
 
  );
}
