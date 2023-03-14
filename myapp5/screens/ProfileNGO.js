import React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback,  ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Svg, { G, Path, Defs } from "react-native-svg"

export default function ProfilNgo({navigation}) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });
  if (!fontsLoaded) return null;
  const PressHandler=()=>{navigation.navigate('MyGoals')}
  const PressHandler2=()=>{navigation.navigate('TimeDonationsProfile')}
  const PressHandler3=()=>{navigation.navigate('MoneyDonationsProfile')}
  const PressHandler4=()=>{navigation.navigate('Setari')}
  const PressHandler5=()=>{navigation.navigate('NGOactivityMONEY')}
  return (
    <LinearGradient
      colors={['#ADA0FC','#BEB3FC','#C8BFFD','#D0C8FD','#D9D3FE','#E8E4FE','#D9D3FE']}
      style={{flex: 1}}
      start={{x:0.2, y:0}}
      end={{x:1.2, y:1.1}}
    >
    
      
    </LinearGradient> 

  )
}

const styles = StyleSheet.create({
  
  img1: {
    justifyContent:'center',
    top: '10%',
    left: '36%'
  },
  container1: {
    backgroundColor: '#FFFFFF',
    height: 156,
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 62,
    alignItems: 'center',
    width:370,
  },
  container2: {
    backgroundColor: '#FFFFFF',
    height: 206,
    width:370,
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 70,
    alignItems: 'center'
  },
  container3: {
    backgroundColor: '#FFFFFF',
    height: 110,
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 87,
    alignItems: 'center',
    width:370,
  },
  container4: {
    backgroundColor: '#ADA0FC',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 40,
    top: -120
  },
  container5: {
    backgroundColor: '#ADA0FC',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    top: 15,
    left: 90
  },
  container6: {
    backgroundColor: '#ADA0FC',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    top: -35,
    left: -90
  },
  text1: {
    color: '#1B0B77',
    fontSize: 22,
    fontFamily:'Mont'
  },
  text2: {
    color: '#1B0B77',
    fontSize: 24,
   
    textAlign: 'center',
    top: 45,
    fontFamily: 'MontSemi'
  },
  text3: {
    color: '#1B0B77',
    fontSize: 22,
    
    top: -40,
    left: -70,
    fontFamily:"Mont",
  },
  text4: {
    color: '#1B0B77',
    fontSize: 22,
    fontFamily:"Mont",
    top: -122,
    left: 100
  },
  img2: {
    left: 330,
    top: -40
  },
  img3: {
    left:-145
  },
  img4: {
    left:-90
  },
  img5: {
    top:-125,
    left:90
  },
  img6: {
    left:40,
    top:-91
  },
  img7: {
    top:20,
    left:-90
  }
})