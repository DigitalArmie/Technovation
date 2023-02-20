import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableNativeFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function Home({navigation}) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf")
  })
  if(!fontsLoaded) return null;
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
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Image 
      style={styles.img1}
      source={require('../assets/Images/user-profile.png')} 
      />
      <TouchableNativeFeedback onPress={PressHandler4}>
        <Image 
        style={styles.img2}
        source={require('../assets/Images/settings.png')} 
        />
      </TouchableNativeFeedback>
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
        <Image 
        style={styles.img6}
        source={require('../assets/Images/time.png')} 
        />
        <Text style={styles.text4}>4 ore</Text>
        <Image 
        style={styles.img5}
        source={require('../assets/Images/lineProfile.png')} 
        />
        <View style={styles.container4}>
          <TouchableNativeFeedback onPress={PressHandler}>
            <Text style={styles.text1}>Edit</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>My current donations</Text>
        <View>
          <TouchableNativeFeedback onPress={PressHandler5}>
            <Image style={styles.img7} 
            source={require('../assets/Images/image14.png')}/>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text1}>INVEST NEXT</Text>
        <View style={styles.container5}>
          <TouchableNativeFeedback onPress={PressHandler2}>
            <Text style={styles.text1}>MY TIME</Text>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.container6}>
          <TouchableNativeFeedback onPress={PressHandler3}>
            <Text style={styles.text1}>MY MONEY</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
      </ScrollView>
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
    left: -75
  },
  text4: {
    color: '#1B0B77',
    fontSize: 22,
    fontWeight: 'bold',
    top: -122,
    left: 95
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