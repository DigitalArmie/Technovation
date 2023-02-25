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
import NGOpresentation from '../screens/NGOpresentation';
import investmoney from '../screens/investmoney';
import PastMonth from '../screens/PastMonthEvent';
import MyGoals from '../screens/MyGoals';
import MoneyDonationsProfile from '../screens/MoneyDonationsProfil';
import TimeDonationsProfile from '../screens/TimeDonationsProfile';

import NGOactivityTIME from '../screens/NGOactivityTIME';

import Congratulations from '../screens/Congratulations';
import Donate from '../screens/Donate';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const TimeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
      <HomeStack.Screen name='Magazine' component={Magazine} options={{ headerShown: false }} />
      <HomeStack.Screen name='NGOactivity' component={NGOactivity} options={{ headerShown: false }} />
      <HomeStack.Screen name='NGOpresentation' component={NGOpresentation} options={{ headerShown: false }} />
      <HomeStack.Screen name='Investmoney' component={investmoney} options={{ headerShown: false }} />
      <HomeStack.Screen name='PastMonth' component={PastMonth} options={{ headerShown: false }} />

      <HomeStack.Screen name='NGOactivityTIME' component={NGOactivityTIME} options={{ headerShown: false }} />

     

    </HomeStack.Navigator>
  );
}

function ProfileStackScreens() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
      name='Profile'
      component={Profile}
      options={{headerShown: false}}
      />
      <ProfileStack.Screen
      name='MyGoals'
      component={MyGoals}
      options={{headerShown: false}}
      />
       <ProfileStack.Screen
      name='MoneyDonationsProfile'
      component={MoneyDonationsProfile}
      options={{headerShown: false}}
      />
      <ProfileStack.Screen
      name='TimeDonationsProfile'
      component={TimeDonationsProfile}
      options={{headerShown: false}}
      />
      <ProfileStack.Screen
      name='Setari'
      component={Setari}
      options={{headerShown: false}}
      />
      <ProfileStack.Screen
      name='NGOactivityMONEY'
      component={NGOactivity}
      options={{headerShown: false}}
      />

      <ProfileStack.Screen
    name='Congratulations'
    component={Congratulations}
    options={{headerShown: false}}
    />
    <ProfileStack.Screen
    name='Donate'
    component={Donate}
    options={{headerShown: false}}
    />

    </ProfileStack.Navigator>
    
  
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
      <Tab.Screen name="Profile" component={ProfileStackScreens} options={{ 
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