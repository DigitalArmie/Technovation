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
import { TouchableHighlight } from 'react-native-gesture-handler';
export default function Home({navigation}) {
  
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require('../assets/fonts/Montserrat-Bold.ttf')

  })
  if(!fontsLoaded) return null;
  const pressHandler2 = () => {
      navigation.navigate('Magazine')
  };
  const pressHandler3 = () => {
    navigation.navigate('NGOactivity')
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
      <Text style={{fontFamily: 'MontBold', fontSize: 18, color: '#1B0B77'}}>MY RESULTS</Text>
      </TouchableNativeFeedback>
      </View>
      <Image source={ImagePath.dreptunghi1} style={styles.drept1}/>
      <Image source={ImagePath.dreptunghi1} style={styles.drept1}/>
      <Image source={ImagePath.dreptunghi1} style={styles.drept1}/>
      <Image source={ImagePath.dreptunghi1} style={styles.drept1}/>
      
      <View>
      <TouchableNativeFeedback onPress={pressHandler3} >
      <Image source={ImagePath.presenting} style={styles.img1}/>
      </TouchableNativeFeedback>
      </View>
     <Image source={ImagePath.logo1} style={styles.logo1}/>
     <Text style={{fontFamily: 'Mont', top: '-28.5%',left: '40%', fontSize: 14, color: '#1B0B77',}}>Descrierea evenimentului  </Text>
     <Image source={ImagePath.location} style={styles.location}/>
     <Text style={{fontFamily: 'Mont', top: '-26.9%',left: '76%', fontSize: 12.5, color: '#1B0B77',}}>Cluj  </Text>
     <View>
      <TouchableNativeFeedback onPress={pressHandler3} >
      <Image source={ImagePath.presenting} style={styles.img2}/>
      </TouchableNativeFeedback>
      </View>
     <Image source={ImagePath.logo1} style={styles.logo2}/>
     <Text style={{fontFamily: 'Mont', top: '-29%',left: '40%', fontSize: 14, color: '#1B0B77',}}>Descrierea evenimentului  </Text>
     <Image source={ImagePath.location} style={styles.location2}/>
     <Text style={{fontFamily: 'Mont', top: '-27.5%',left: '76%', fontSize: 12.5, color: '#1B0B77',}}>Iasi  </Text>
     <View>
      <TouchableNativeFeedback onPress={pressHandler3} >
      <Image source={ImagePath.presenting} style={styles.img3}/>
      </TouchableNativeFeedback>
      </View>
     <Image source={ImagePath.logo1} style={styles.logo3}/>
     <Text style={{fontFamily: 'Mont', top: '-29.5%',left: '40%', fontSize: 14, color: '#1B0B77',}}>Descrierea evenimentului  </Text>
     <Image source={ImagePath.location} style={styles.location3}/>
     <Text style={{fontFamily: 'Mont', top: '-27.9%',left: '76%', fontSize: 12.5, color: '#1B0B77',}}>Oradea  </Text>
     <View>
      <TouchableNativeFeedback onPress={pressHandler3} >
      <Image source={ImagePath.presenting} style={styles.img4}/>
      </TouchableNativeFeedback>
      </View>
     <Image source={ImagePath.logo1} style={styles.logo4}/>
     <Text style={{fontFamily: 'Mont', top: '-30%',left: '40%', fontSize: 14, color: '#1B0B77',}}>Descrierea evenimentului  </Text>
     <Image source={ImagePath.location} style={styles.location4}/>
     <Text style={{fontFamily: 'Mont', top: '-28.5%',left: '76%', fontSize: 12.5, color: '#1B0B77',}}>Titu  </Text>
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
    top:'-385%',
    left: '10.5%',
    width: 107,
    height: 83,

  },
  img2:{
    top:'-392%',
    left:'10.5%'
  },
  img3:{
    top:'-401%',
    left: '10.5%',
    width: 107,
    height: 83,

  },
  img4:{
    top:'-415%',
    left: '10.5%',
    width: 107,
    height: 83,

  },
  location:{
    left: '70%',
    top:'-25.5%',
    width: 23,
    height: 23,
  },
  location2:{
    left: '70%',
    top:'-26%',
    width: 23,
    height: 23,
  },
  location3:{
    left: '70%',
    top:'-26.5%',
    width: 23,
    height: 23,
  },
  location4:{
    left: '70%',
    top:'-27%',
    width: 23,
    height: 23,
  },
  logo1:{
    left: '11.5%',
    top:'-29%',
    width: 91,
    height: 14,
  },
  logo2:{
    left: '11.5%',
    top:'-29.5%',
    width: 91,
    height: 14,
  },
  logo3:{
    left: '11.5%',
    top:'-30%',
    width: 91,
    height: 14,
  },
  logo4:{
    left: '11.5%',
    top:'-31%',
    width: 91,
    height: 14,
  },



})