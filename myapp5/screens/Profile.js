import React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function Home({navigation}) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf")
  })
  if(!fontsLoaded) return null;
  const PressHandler=()=>{navigation.navigate('MyGoals')}
  return (
    <LinearGradient
      colors={['#ADA0FC','#BEB3FC','#C8BFFD','#D0C8FD','#D9D3FE','#E8E4FE','#D9D3FE']}
      style={{flex: 1}}
      start={{x:0.2, y:0}}
      end={{x:1.2, y:1.1}}
    >
      <Image 
      style={styles.img1}
      source={require('../assets/Images/user-profile.png')} 
      />
      <Image 
      style={styles.img2}
      source={require('../assets/Images/settings.png')} 
      />
      <Text style={styles.text2}> Name User</Text>
      <View style={styles.container1}>
        <Text style={styles.text1}>Monthly Donation Fund</Text>
        <Image 
        style={styles.img3}
        source={require('../assets/Images/money.png')} 
        />
        <Image 
        style={styles.img4}
        source={require('../assets/Images/lineProfile.png')} 
        />
        <Text style={styles.text3}>250 ron</Text>
        <View style={styles.container4}>
          <TouchableNativeFeedback onPress={PressHandler}>
            <Text style={styles.text1}>Edit</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>My current donations</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text1}>INVEST NEXT</Text>
      </View>
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
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 262,
    alignItems: 'center'
  },
  container2: {
    backgroundColor: '#FFFFFF',
    height: 206,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 450,
    alignItems: 'center'
  },
  container3: {
    backgroundColor: '#FFFFFF',
    height: 110,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 687,
    alignItems: 'center'
  },
  container4: {
    backgroundColor: '#ADA0FC',
    borderRadius: 20,
    justifyContent:'center'
  },
  text1: {
    color: '#1B0B77',
    fontSize: 22,
    fontWeight: 'bold'
  },
  text2: {
    color: '#1B0B77',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 45
  },
  text3: {
    color: '#1B0B77',
    fontSize: 22,
    fontWeight: 'bold',
    top: -50,
    left: 15
  },
  img2: {
    left: 330,
    top: -40
  },
  img3: {
    left:-55
  },
  img4: {
    justifyContent:'center'
  },
})