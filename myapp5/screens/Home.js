import React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback,ScrollView,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import AppNav from '../navigation/AppNavigation'
import { Button } from 'react-native-paper';
import { auth } from '../firebase';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from '../navigation/AuthNavigation';
import Magazine from './Magazine';

import ImagePath from '../constants/ImagePath';
export default function Home({navigation}) {
  
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf")

  })
  if(!fontsLoaded) return null;
  const pressHandler2 = () => {
      navigation.navigate(Magazine)
  };
  return (
    
    <LinearGradient
      colors={['#ADA0FC','#BEB3FC','#C8BFFD','#D0C8FD','#D9D3FE','#E8E4FE','#D9D3FE']}
      style={{flex: 1}}
      start={{x:0.2, y:0}}
      end={{x:1.2, y:1.1}}
    >
       <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Text style={{fontFamily: 'Mont', top: '10%',left: '8%', fontSize: 36, color: '#1B0B77',}}>HELLO,</Text>
      <Text style={{fontFamily: 'Mont', top: '10%',left: '8%', fontSize: 36, color: '#1B0B77',}}>MIRUNA!</Text>
      <Text style={{fontFamily: 'Mont', top: '12.5%',left: '8%', fontSize: 22, color: '#1B0B77',}}>Let's see the situation of the NGOs:</Text>
      <View style={styles.butonas} >
      <TouchableNativeFeedback onPress={pressHandler2} >
      <Text style={{fontFamily: 'Mont', fontSize: 18, color: '#1B0B77'}}>MY RESULTS</Text>
      </TouchableNativeFeedback>
      </View>
      <Image source={ImagePath.dreptunghi1} style={styles.drept1}/>
      <Image source={ImagePath.dreptunghi1} style={styles.drept1}/>
      <Image source={ImagePath.dreptunghi1} style={styles.drept1}/>
      <Image source={ImagePath.dreptunghi1} style={styles.drept1}/>
      <Image source={ImagePath.dreptunghi1} style={styles.drept1}/>
      <Image source={ImagePath.dreptunghi1} style={styles.drept1}/>
      
      <TouchableNativeFeedback onPress={pressHandler2} >
      <Image source={ImagePath.logo1} style={styles.img2}/>
      </TouchableNativeFeedback>
      <Image source={ImagePath.presenting} style={styles.img1}/>
      </ScrollView>
    </LinearGradient> 
  )
}


const styles = StyleSheet.create({
  hello: {
    justifyContent: 'center',
    fontSize: 36,
    position: 'absolute',
    left: '25%',
    top: '80%',
    color: '#1B0B77',
    fontFamily: 'Mont'
    
  },
  butonas:{

    //position:'absolute',
    //flex:0.1,
    justifyContent:'center',
    padding: 14,
    alignItems: 'center',
    borderRadius:20,
    backgroundColor: '#ADA0FC',
    top:'14%',
    width: '42%',
    left: '8%'
   
  },
  drept1:{
    justifyContent:'center',
    width: 356,
    height: 150,
    left: '6.5%',
    top: '17%'


  },
  img1:{
    top:'-55%',
    left: '11.5%',
    width: 107,
    height: 83,

  },
  img2:{
    top:'-56%',
    left: '11.5%',
    width: 91,
    height: 14,

  }


})