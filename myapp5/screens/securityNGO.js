import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableNativeFeedback, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import ImagePath from '../constants/ImagePath';
import { ScrollView } from "react-native-gesture-handler";
export default function Setari({navigation}) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf")
  })
  if(!fontsLoaded) return null;
  const PressHandler4=()=>{navigation.navigate('SetariNGO')}
  const PressHandler5=()=>{navigation.navigate('Security')}
  return (
    <LinearGradient
      colors={['#ADA0FC','#BEB3FC','#C8BFFD','#D0C8FD','#D9D3FE','#E8E4FE','#D9D3FE']}
      style={{flex: 1}}
      start={{x:0.2, y:0}}
      end={{x:1.2, y:1.1}}
    >
      <ScrollView>
      <View>
      <TouchableNativeFeedback onPress={PressHandler4}>
        <Image source={ImagePath.back} style={{top:'95%',left: '4%'}}/>
      </TouchableNativeFeedback>
      <Text style={{fontFamily: 'Mont', top: '40%',left: '12%', fontSize: 24, color: '#1B0B77',}}>Security:</Text>
     
      </View>
     
      <View style={{top:'15%',alignSelf:'center'}}>
        
      <Image source={ImagePath.set1} />
      <Text style={{fontFamily: 'Mont',fontSize: 20, color: '#1B0B77',top:'-55%',alignSelf:'center'}}>Change Password:</Text>
      
      </View>
      <View style={{top:'12%',alignSelf:'center'}}>
        <Image source={ImagePath.rectsecurity} />
        <View style={{top:'-30%',alignSelf:'center'}}>
          <Image source={ImagePath.linemoney} style={{top:'-50%',alignSelf:'center', width: 241}}/>
        <TextInput
            placeholder="Old Password"
            value={Name}
            onChangeText={(text) => setName(text)}
            style={{fontFamily: 'Mont',fontSize: 18, color: '#1B0B77',top:'-140%',textAlign:'left'}}  
          />
        </View>
        <View style={{top:'-30%',alignSelf:'center'}}>
           <Image source={ImagePath.linemoney} style={{top:'-40%',alignSelf:'center', width: 241}}/>
          <TextInput
            placeholder="New Password"
            value={Name}
            onChangeText={(text) => setName(text)}
            style={{fontFamily: 'Mont',fontSize: 18, color: '#1B0B77',top:'-130%',textAlign:'left'}}
            
          />
        </View>
 
      </View>
      <View style={{top:'3%',alignSelf:'center'}}>
      <Image source={ImagePath.set1} />
      <Text style={{fontFamily: 'Mont',fontSize: 20, color: '#1B0B77',top:'-55%',alignSelf:'center'}}>Change Location:</Text>
      </View>
      <View style={{top:'0%',alignSelf:'center'}}>
        <Image source={ImagePath.rectsecurity} />
        <View style={{top:'-30%',alignSelf:'center'}}>
          <Image source={ImagePath.linemoney} style={{top:'-50%',alignSelf:'center', width: 241}}/>
        <TextInput
            placeholder="New Location"
            value={Name}
            onChangeText={(text) => setName(text)}
            style={{fontFamily: 'Mont',fontSize: 18, color: '#1B0B77',top:'-140%',textAlign:'left'}}  
          />
        </View>
        <View style={{top:'-30%',alignSelf:'center'}}>
           <Image source={ImagePath.linemoney} style={{top:'-40%',alignSelf:'center', width: 241}}/>
          <TextInput
            placeholder="New Location"
            value={Name}
            onChangeText={(text) => setName(text)}
            style={{fontFamily: 'Mont',fontSize: 18, color: '#1B0B77',top:'-130%',textAlign:'left'}}
            
          />
        </View>  
      </View>
      <View style={{top:'-8%',alignSelf:'center'}}>
      <Image source={ImagePath.set1} />
      <Text style={{fontFamily: 'Mont',fontSize: 20, color: '#1B0B77',top:'-55%',alignSelf:'center'}}>IBAN Account:</Text>
      </View>
      <View style={{top:'-10%',alignSelf:'center'}}>
        <Image source={ImagePath.rectsecurity} />
        <View style={{top:'-30%',alignSelf:'center'}}>
          <Image source={ImagePath.linemoney} style={{top:'-50%',alignSelf:'center', width: 241}}/>
        <TextInput
            placeholder="acsgdshdsyry"
            value={Name}
            onChangeText={(text) => setName(text)}
            style={{fontFamily: 'Mont',fontSize: 18, color: '#1B0B77',top:'-140%',textAlign:'left'}}  
          />
        </View>
        <View style={{top:'-30%',alignSelf:'center'}}>
           <Image source={ImagePath.linemoney} style={{top:'-40%',alignSelf:'center', width: 241}}/>
          <TextInput
            placeholder="New Account"
            value={Name}
            onChangeText={(text) => setName(text)}
            style={{fontFamily: 'Mont',fontSize: 18, color: '#1B0B77',top:'-130%',textAlign:'left'}}
            
          />
        </View>  
      </View>
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
    
  }
})