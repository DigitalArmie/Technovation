import React,{useState} from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput,text, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, Alert, Pressable, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import signup from './signup';
import Home from './Home';
import image from '../assets/Line1.png';
export default function SignIn({navigation}) {
  const pressHandler = () => {
      navigation.navigate('signup')
  };
  const pressHandler2 = () => {
    navigation.navigate('App')
};
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
              source={require('../assets/Logininpage_Line1.png')} 
            />
    <Image 
              style={styles.img2}
              source={image} 
/>  
  
<View style={styles.butonas} >
      <TouchableNativeFeedback onPress={pressHandler2} >
      <Text style={styles.text8}>LOG IN</Text>
      </TouchableNativeFeedback>
      </View>
    <SafeAreaView style={styles.input}>
    <TextInput
        style={styles.text4}
        onChangeText={setPassword}
        value={text}
        placeholder="Password"
      />
      <TextInput
        style={styles.text3}
        onChangeText={setName}
        value={text}
        placeholder="E-mail"
      />
    </SafeAreaView>
    <Text style={styles.text5}>New user?</Text>
    
      <TouchableHighlight style={styles.button2} onPress={pressHandler} activeOpacity={1}>
      <Text style={styles.text7}>Sign Up</Text>
      </TouchableHighlight>
    
      </LinearGradient>
      
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    position: 'absolute',
    left: '25%',
    top: '25%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

  },
  text5: {
    fontSize: 20,
    position: 'absolute',
    left: '25%',
    top: '80%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

  },
  text8:
  {
    fontWeight: 'bold',
    fontSize: 22,
    color:'#1B0B77',
    
  },
  text6: {
    fontSize: 20,
    position: 'absolute',
    left: '20%',
    top: '8%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

  },
  text7: {
    fontSize: 20,
    position: 'absolute',
    left: '54%',
    top: '7%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%',
    textDecorationLine: 'underline',

  },
  text3: {
    fontSize: 22,
    position: 'absolute',
    top: '-25%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'green',
  },
  button2:{
    position: 'absolute',
    left: '54%',
    top: '80%',

  },
  text4: {
    fontSize: 22,
    position: 'absolute',
    top: '-16%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%',
    textDecorationLine: 'underline',

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
      top: '43%',
      left: '16%',
      justifyContent:'center'
  },
  casuta:{
    width: '70%',
      height: '60%',
      top: '90%',
      left: '30%',
      justifyContent:'center',
      color: '#ffffff',
      
    position: 'absolute',
  },
  input: {
    fontWeight: 'semibold',
    fontSize: 54,
    height: '100%',
    left: '16%',
    top: '55%',

  },
  img2:{
    width: '70%',
    height: '0.15%',
    top: '52%',
    left: '16%',
    justifyContent:'center'
  },
  casuta2:{
    fontWeight: 'semibold',
    fontSize: 22,
    height: '50%',
    left: '89%',
    top: '30%',
  },
  input2: {
    fontWeight: 'semibold',
    fontSize: 22,
  },
  butonas:{

    position:'relative',
    top: '58%',
    borderWidth: 0.5,
    bottom: 2,
    padding: 20,
    paddingHorizontal:60,
    borderRadius:56,
    borderColor: 'white',
    backgroundColor: '#ADA0FC',
    width: '56%',
    alignItems: 'center',
    left: '22%'
   
  },
  container:{
    alignItems: 'center',
    width: '68%',
      top: '3%',
      left: '16%',
      
      
  }
  
});
