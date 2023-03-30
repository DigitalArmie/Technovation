import { createStackNavigator} from 'react-navigation-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/ProfileNGO';
import Home from '../screens/homepageNGO';
import Notifications from '../screens/NotificationNGO';
import NGOactivity from '../screens/youractivityNGO';

import futureactivity from '../screens/futureactivity';
import pastactivity from '../screens/pastactivity';
import Security from '../screens/security';

import EventsNGO from '../screens/EventsNGO';
import UpdatesNGO from '../screens/UpdatesNGO';
import SetariNGO from '../screens/SetariNGO';
import securityNGO from '../screens/securityNGO';
import CongratsNgo from '../screens/CongratulationsNgo';
import MoneyDonatt from '../screens/PostDonationsNGO';
import  Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const NotificationsStack = createNativeStackNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
      <HomeStack.Screen name="NGOactivity" component={NGOactivity} options={{ headerShown: false }}  />
      <HomeStack.Screen name="future" component={futureactivity} options={{ headerShown: false }}  />
      <HomeStack.Screen name="past" component={pastactivity} options={{ headerShown: false }}  />
    </HomeStack.Navigator>
  );
}
function ProfileStackScreens() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
      name='Profilengo'
      component={Profile}
      options={{headerShown: false}}
      />
      <ProfileStack.Screen
      name='EventsNGO'
      component={EventsNGO}
      options={{headerShown: false}}
      /> 
      <ProfileStack.Screen
      name='UpdatesNGO'
      component={UpdatesNGO}
      options={{headerShown: false}}
      /> 
      <ProfileStack.Screen
      name='SetariNGO'
      component={SetariNGO}
      options={{headerShown: false,animation: 'slide_from_right'}}
      /> 
      <ProfileStack.Screen
      name='securityNGO'
      component={securityNGO}
      options={{headerShown: false,animation: 'slide_from_right'}}
      /> 
       <ProfileStack.Screen
      name='congratsngo'
      component={CongratsNgo}
      options={{headerShown: false}}
      /> 
      <ProfileStack.Screen
      name='MoneyDonati'
      component={MoneyDonatt}
      options={{headerShown: false}}
      /> 
    </ProfileStack.Navigator>
  );
}
function NotificationsStackScreens(){
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
      name='Notifications'
      component={Notifications}
      options={{headerShown: false}}
      />
      
      
    </NotificationsStack.Navigator>
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
      
      <Tab.Screen name='Notificationss' component={NotificationsStackScreens} 
      options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) =>
        {
          return(
            <Svg
            width={38}
            height={45}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <G clipPath="url(#a)">
              <Path
                d="M32.412 16.744c0-3.33-1.413-6.525-3.928-8.88C25.968 5.51 22.557 4.186 19 4.186c-3.557 0-6.968 1.323-9.484 3.678-2.515 2.355-3.928 5.55-3.928 8.88v16.744h26.824V16.744Zm4.47 18.14L37.777 36a.99.99 0 0 1 .105 1.096c-.093.174-.235.32-.412.422-.177.102-.38.156-.588.156H1.118c-.208 0-.411-.054-.588-.156a1.075 1.075 0 0 1-.412-.422A.99.99 0 0 1 .224 36l.894-1.116v-18.14c0-4.44 1.884-8.7 5.237-11.84C9.71 1.764 14.257 0 19 0c4.743 0 9.291 1.764 12.645 4.904 3.353 3.14 5.237 7.4 5.237 11.84v18.14Zm-23.47 4.883h11.176c0 1.388-.588 2.72-1.637 3.7C21.904 44.45 20.482 45 19 45c-1.482 0-2.904-.551-3.951-1.533-1.048-.98-1.637-2.312-1.637-3.7Z"
                fill="#1B0B77"
              />
            </G>
            <Defs>
              <ClipPath id="a">
                <Path fill="#fff" d="M0 0h38v45H0z" />
              </ClipPath>
            </Defs>
          </Svg>
          )
        }
         }}/>
         <Tab.Screen name="Homee" component={HomeStackScreen} options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) =>
        {
          return(
            <Svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M43.6799 30.1154L43.7448 29.899C45.4184 25.1083 45.4184 19.8917 43.7448 15.101L43.6799 14.8846C42.101 10.5317 39.2224 6.76923 35.4339 4.10684C31.6455 1.44444 27.1304 0.0107714 22.5 0C17.8682 0.00455488 13.3502 1.43579 9.56056 4.09902C5.77094 6.76226 2.89366 10.5282 1.32009 14.8846L1.25518 15.101C-0.418394 19.8917 -0.418394 25.1083 1.25518 29.899L1.32009 30.1154C2.89366 34.4718 5.77094 38.2377 9.56056 40.901C13.3502 43.5642 17.8682 44.9954 22.5 45C27.1318 44.9954 31.6498 43.5642 35.4394 40.901C39.2291 38.2377 42.1063 34.4718 43.6799 30.1154ZM16.9833 31.1538H28.0167C26.9081 34.5953 25.0202 37.7344 22.5 40.3269C19.9798 37.7344 18.0919 34.5953 16.9833 31.1538ZM16.0746 27.6923C15.4114 24.2625 15.4114 20.7375 16.0746 17.3077H28.9254C29.2547 19.0189 29.4213 20.7574 29.423 22.5C29.4224 24.2426 29.2558 25.9813 28.9254 27.6923H16.0746ZM3.46188 22.5C3.46555 20.745 3.70569 18.9985 4.1758 17.3077H12.5483C11.9713 20.7452 11.9713 24.2548 12.5483 27.6923H4.1758C3.70569 26.0015 3.46555 24.255 3.46188 22.5ZM28.0167 13.8462H16.9833C18.0919 10.4047 19.9798 7.26555 22.5 4.67308C25.0202 7.26555 26.9081 10.4047 28.0167 13.8462ZM32.4517 17.3077H40.8242C41.7764 20.7038 41.7764 24.2962 40.8242 27.6923H32.4517C33.0287 24.2548 33.0287 20.7452 32.4517 17.3077ZM39.4612 13.8462H31.6729C30.6319 10.2014 28.8578 6.80756 26.4591 3.8726C29.2287 4.47064 31.8314 5.6753 34.0797 7.39987C36.3279 9.12445 38.1659 11.326 39.4612 13.8462ZM18.5409 3.8726C16.1422 6.80756 14.3681 10.2014 13.3271 13.8462H5.53876C6.83412 11.326 8.67208 9.12445 10.9203 7.39987C13.1686 5.6753 15.7713 4.47064 18.5409 3.8726ZM5.53876 31.1538H13.3271C14.3681 34.7986 16.1422 38.1924 18.5409 41.1274C15.7696 40.5337 13.165 39.3307 10.9161 37.6056C8.66727 35.8806 6.83042 33.6767 5.53876 31.1538ZM26.4591 41.1274C28.8578 38.1924 30.6319 34.7986 31.6729 31.1538H39.4612C38.1696 33.6767 36.3327 35.8806 34.0839 37.6056C31.835 39.3307 29.2304 40.5337 26.4591 41.1274Z" fill="#1B0B77"/>
</Svg>
          )
        }
      }}
      />
      <Tab.Screen name="Profilee" component={ProfileStackScreens} options={{ 
        headerShown: false,
        tabBarIcon: ({focused}) =>
        {
          return(
            <Svg
    width={45}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <G clipPath="url(#a)" fill="#1B0B77">
      <Path d="M30.938 16.875a8.437 8.437 0 1 1-16.875 0 8.437 8.437 0 0 1 16.874 0Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 22.5a22.5 22.5 0 1 1 45 0 22.5 22.5 0 0 1-45 0ZM22.5 2.812A19.687 19.687 0 0 0 7.121 34.791c1.997-3.218 6.393-6.666 15.379-6.666s13.38 3.445 15.379 6.666A19.686 19.686 0 0 0 22.5 2.813Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h45v45H0z" />
      </ClipPath>
    </Defs>
  </Svg>
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