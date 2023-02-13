import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

export default function Home({navigation}) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf")
  })
  if(!fontsLoaded) return null;
  return (
    <LinearGradient
      colors={['#ADA0FC','#BEB3FC','#C8BFFD','#D0C8FD','#D9D3FE','#E8E4FE','#D9D3FE']}
      style={{flex: 1}}
      start={{x:0.2, y:0}}
      end={{x:1.2, y:1.1}}
    >
      <Text style={{fontFamily: 'Mont', top: '15%',left: '8%', fontSize: 36, color: '#1B0B77',}}>notif</Text>
      <Text style={{fontFamily: 'Mont', top: '16%',left: '8%', fontSize: 36, color: '#1B0B77',}}>MIRUNA!</Text>
      <Text style={{fontFamily: 'Mont', top: '20%',left: '5%', fontSize: 22, color: '#1B0B77',}}>Let’s see the situation of the NGOs:</Text>
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
    
  }
})