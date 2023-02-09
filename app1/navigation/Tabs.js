import {createBottomTabNavigator}from '@react-navigation/bottom-tabs';
import { Style, Text, View, Image, TouchableOpacity } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#FFFFFF',
                    height: 90
                }
            }}
        >
            <Tab.Screen name="notification" component={NotificationScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image 
                        source={require('../assets/notifications.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: "#1B0B77"
                        }}
                        />
                    </View>
                ),
            }}
            />
            <Tab.Screen name="home" component={HomeScreen} options={{
                tabBarIcon: (
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image 
                        source={require('../assets/home.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: "#1B0B77"
                        }}
                        />
                    </View>
                ),
            }}
            />
            <Tab.Screen name="profile" component={ProfileScreen} options={{
                tabBarIcon: (
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image 
                        source={require('../assets/user.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: "#1B0B77"
                        }}
                        />
                    </View>
                ),
            }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;
