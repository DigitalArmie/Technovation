import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button, TextInput,text, TouchableNativeFeedback, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { useEffect } from "react";
export default function SignIn() {
   const [name, setName] = useState('Taylor@gmail');
   const [Password, setPassword] = useState('djfb');
    return (
      
      <LinearGradient
        colors={['#4831CE', '#4831CE', '#5F4AD8', '#7A68E5', '#ADA0FC']} start={{ x: 2.5, y: 1 }} end={{ x: 1, y: 0 }}
        style={{flex: 1}}
      >
        <Text style={styles.text}>Log in to continue:</Text>
        <Image 
              style={styles.img}
              source={require('./assets/buton1_Line1.png')} 
            />
        
       
        <View style={styles.casuta}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(value) => setName(value)}
      />
    </View>
    <Image 
              style={styles.img2}
              source={require('./assets/buton1_Line2.png')} 
            />
    <View style={styles.casuta2}>
      <TextInput
        style={styles.input2}
        placeholder="Password"
        onChangeText={(value) => setPassword(value)}
      />
    </View>
    <View style = {styles.container}>
    <TouchableHighlight>
            <Text style = {styles.butonas}>
               LOG IN
            </Text>
         </TouchableHighlight>
      </View>
      </LinearGradient>
       
    );
  }
 

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    position: 'absolute',
    left: '25%',
    top: '40%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

  },
  text2:{
    fontSize: 22,
    position: 'absolute',
    left: '25%',
    top: '56%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

  },
  img:{
    width: '70%',
      height: '0.15%',
      top: '60%',
      left: '16%',
      justifyContent:'center'
  },
  casuta:{
    width: '70%',
      height: '60%',
      top: '28%',
      left: '16%',
      justifyContent:'center',
      
      color: '#ffffff',
      
    position: 'absolute',
  },
  input: {
    fontWeight: 'semibold',
    fontSize: 22,

  },
  img2:{
    width: '70%',
    height: '0.15%',
    top: '67%',
    left: '16%',
    justifyContent:'center'
  },
  casuta2:{
    width: '70%',
      height: '60%',
      top: '35%',
      left: '16%',
      justifyContent:'center',
      color: '#ffffff',
    position: 'absolute'
  },
  input2: {
    fontWeight: 'semibold',
    fontSize: 22,
  },
  butonas:{

    borderWidth: 0.5,
    padding: 21,
    paddingHorizontal:74,
    borderRadius:45,
    borderColor: 'white',
    backgroundColor: '#ADA0FC',
    fontWeight: 'bold',
    fontSize: 22,
    color:'#1B0B77'
  

  },
  container:{
    alignItems: 'center',
    width: '70%',
      
      top: '75%',
      left: '16%',
      
      
  }
});