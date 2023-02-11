import React,{useState} from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput,text, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, Alert, Pressable, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import image from '../assets/Line1.png';
export default function SignUp({navigation}) {
  const pressHandler = () => {
      navigation.navigate('signup')
  };
  const [name, setName] = useState('Taylor@gmail');
   const [Password, setPassword] = useState('djfb');
  return (
    
    <LinearGradient
        colors={['#4831CE', '#4831CE', '#5F4AD8', '#7A68E5', '#ADA0FC']} start={{ x: 2.5, y: 1 }} end={{ x: 1, y: 0 }}
        style={{flex: 1}}
      >
        <Text style={styles.text}>Create your account:</Text>
    
         <Image 
              style={styles.img}
              source={require('../assets/Logininpage_Line1.png')} 
            />
    <Image 
              style={styles.img2}
              source={image} 
/>  
<Image 
  style={styles.img3}
    source={require('../assets/Logininpage_Line1.png')} 
 />
       <Image 
              style={styles.img4}
              source={require('../assets/Logininpage_Line1.png')} 
            />
         <Image 
              style={styles.img5}
              source={require('../assets/Logininpage_Line1.png')} 
            />
<View style = {styles.container}>
      <TouchableHighlight style={styles.butonas} onPress={pressHandler} activeOpacity={1}>
      <Text style={styles.text8}>CREATE</Text>
      </TouchableHighlight>
      </View>
    <SafeAreaView style={styles.input}>
    <TextInput
        style={styles.text4}
        onChangeText={setPassword}
        value={text}
        placeholder="Last name"
      />
      <TextInput
        style={styles.text3}
        onChangeText={setName}
        value={text}
        placeholder="First Name"
      />
       <TextInput
        style={styles.text9}
        onChangeText={setName}
        value={text}
        placeholder="Phone Number"
      />
      <TextInput
        style={styles.text10}
        onChangeText={setName}
        value={text}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.text11}
        onChangeText={setName}
        value={text}
        placeholder="Password"
      />
    </SafeAreaView>
    <View style = {styles.container2}>
    <TouchableHighlight style={styles.butonas2} onPress={pressHandler} activeOpacity={1}>
      <Text style={styles.text12}>I'm a NGO</Text>
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
    top: '25%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

  },
  text5: {
    fontSize: 20,
    position: 'absolute',
    left: '25%',
    top: '88%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

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
    top: '88%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%',
    

  },
  text8:
  {
    fontWeight: 'bold',
    fontSize: 22,
    color:'#1B0B77',
    
  },
  text9: {
    fontSize: 22,
    position: 'absolute',
    top: '-16%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

  },
  text10: {
    fontSize: 22,
    position: 'absolute',
    top: '-10%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

  },
  text12:{
    fontWeight: 'bold',
    fontSize: 20,
    color:'#1B0B77',
  },
  text11: {
    fontSize: 22,
    position: 'absolute',
    top: '-4%',
    color: 'white',
    fontWeight: 'semibold',
    letter: '6.5%'

  },
  text3: {
    fontSize: 22,
    position: 'absolute',
    top: '-22%',
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
    top: '88%',

  },
  text4: {
    fontSize: 22,
    position: 'absolute',
    top: '-28%',
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
      top: '40%',
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
    top: '45.5%',
    left: '16%',
    justifyContent:'center'
  },
  img3:{
    width: '70%',
    height: '0.15%',
    top: '51.3%',
    left: '16%',
    justifyContent:'center'
  }, 
  img4:{
    width: '70%',
    height: '0.15%',
    top: '57%',
    left: '16%',
    justifyContent:'center'
  }, 
  img5:{
    width: '70%',
    height: '0.15%',
    top: '63%',
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
    top: '80%',
    borderWidth: 0.5,
    bottom: 2,
    padding: 15,
    paddingHorizontal:60,
    borderRadius:56,
    borderColor: 'white',
    backgroundColor: '#ADA0FC',
  

  },
  butonas2:{

    position:'relative',
    top: '-100%',
    borderWidth: 0.5,
    bottom: 2,
    padding: 10,
    paddingHorizontal:30,
    borderRadius:56,
    borderColor: 'white',
    backgroundColor: '#ADA0FC',
  

  },
  
  container:{
    alignItems: 'center',
    width: '70%',
      top: '65%',
      left: '16%',
      
      
  },
  container2:{
    alignItems: 'center',
    width: '80%',
      top: '-18%',
      left: '11%',
      
      
  }
});