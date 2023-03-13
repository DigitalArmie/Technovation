import React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback,  ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Svg, { G, Path, Defs } from "react-native-svg"

export default function Home({navigation}) {
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
  
 
})