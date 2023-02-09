import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient }from 'expo-linear-gradient';

export default function homescreen() {
  return (
    <LinearGradient
      colors={['#ADA0FC','#F6F5FC','#ADA0FC','#1B0B77']}
      style={{flex: 1}}
      start={{x:0.2, y:0}}
      end={{x:1.2, y:1.1}}
    >
    
    </LinearGradient> 

  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    position:'absolute',
    left:'20%',
    top: 60,
    color:'#1B0B77',
    fontWeight:'bold',
    letter:'6,5%'
  }
});

