import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Magazine from '../screens/Magazine';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Setari from '../screens/Setari';
import Ionic from 'react-native-vector-icons';
import ImagePath from '../constants/ImagePath';
import NGOactivity from '../screens/NGOactivityMONEY';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
      <HomeStack.Screen name='Magazine' component={Magazine} options={{ headerShown: false }} />
      <HomeStack.Screen name='NGOactivity' component={NGOactivity} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}
export default function TabNavigation() {
  return (
    <Tab.Navigator
    screenOptions={
      {
        tabBarShowLabel:false,
        tabBarStyle:{ height:60}
      }
    }
    >
      <Tab.Screen name='Notifications' component={Notifications} 
      options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) =>
        {
          return(
            <Image source={ImagePath.icNotifications} style={styles.image} /> 
          )
        }
         }}/>
      
      <Tab.Screen name="Home" component={HomeStackScreen} options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) =>
        {
          return(
            <Image source={ImagePath.icHome} style={styles.image2}/> 
          )
        }
      }}
      />
      <Tab.Screen name="Profile" component={Profile} options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) =>
        {
          return(
            <Image source={ImagePath.icProfile} style={styles.image3}/> 
          )
        }
        
        }}/>
    </Tab.Navigator>
 
  );
}
const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 40,
    top:'6%'
  },
  image2: {
    width: 40,
    height: 40,
    top:'5%'
  },
  image3: {
    width: 40,
    height: 40,
    top:'5%'
  },
  }
)