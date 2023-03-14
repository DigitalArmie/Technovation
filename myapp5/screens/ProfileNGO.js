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
  const PressHandler2=()=>{navigation.navigate('EventsNGO')}
  const PressHandler3=()=>{navigation.navigate('UpdatesNGO')}
  const PressHandler4=()=>{navigation.navigate('SetariNGO')}
  
  return (
    <LinearGradient
      colors={['#ADA0FC','#BEB3FC','#C8BFFD','#D0C8FD','#D9D3FE','#E8E4FE','#D9D3FE']}
      style={{flex: 1}}
      start={{x:0.2, y:0}}
      end={{x:1.2, y:1.1}}
    >
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
       
       <Svg
   width={111}
   height={119}
   alignSelf='center'
   top='10%'
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   
 >
   <Path
     d="M55.125 0c-14.62 0-28.641 5.61-38.98 15.597C5.809 25.583 0 39.127 0 53.25c0 24.672 17.395 45.38 40.976 51.416l14.149 13.667 14.149-13.667c23.581-6.035 40.976-26.743 40.976-51.416 0-14.123-5.808-27.667-16.146-37.653C83.766 5.61 69.745 0 55.125 0Zm0 11.833c10.168 0 18.375 7.929 18.375 17.75 0 9.822-8.207 17.75-18.375 17.75-10.167 0-18.375-7.928-18.375-17.75 0-9.821 8.208-17.75 18.375-17.75Zm0 84.609a45.34 45.34 0 0 1-20.854-5.064c-6.412-3.324-11.873-8.13-15.896-13.988.184-11.774 24.5-18.223 36.75-18.223 12.189 0 36.566 6.449 36.75 18.223-4.023 5.858-9.484 10.664-15.896 13.988a45.34 45.34 0 0 1-20.854 5.064Z"
     fill="#1B0B77"
   />
 </Svg>
     <TouchableNativeFeedback onPress={PressHandler4}>
     <Svg
   width={49}
   height={47}
   left='80%'
   top='-6%'
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   
 >
   <Path
     d="M4.083 35.25h14.292v3.917H4.083V35.25Zm0-13.708h18.375v3.916H4.083v-3.916Zm0-13.709h40.834v3.917H4.083V7.833ZM42.21 25.507l2.36-.765 2.042 3.391-1.87 1.577a7.552 7.552 0 0 1 0 3.247l1.87 1.576-2.041 3.392-2.36-.766a8.225 8.225 0 0 1-2.93 1.626l-.488 2.34h-4.084l-.49-2.342a8.245 8.245 0 0 1-2.927-1.626l-2.36.768-2.042-3.392 1.87-1.576a7.552 7.552 0 0 1 0-3.247l-1.87-1.577 2.041-3.391 2.36.765a8.225 8.225 0 0 1 2.93-1.625l.488-2.34h4.084l.49 2.342c1.094.34 2.09.9 2.927 1.625v-.002ZM36.75 35.25a4.173 4.173 0 0 0 2.887-1.147 3.837 3.837 0 0 0 1.196-2.77c0-1.038-.43-2.035-1.196-2.77a4.173 4.173 0 0 0-2.887-1.146 4.173 4.173 0 0 0-2.887 1.147 3.838 3.838 0 0 0-1.196 2.77c0 1.038.43 2.034 1.196 2.769a4.173 4.173 0 0 0 2.887 1.147Z"
     fill="#1B0B77"
   />
 </Svg>
     </TouchableNativeFeedback>
     <Text style={styles.text2}>Name NGO</Text>
     <View style={styles.container1}>
       <Text style={styles.text3}>Description:</Text>  
       <Text style={styles.text4}>We are an ong which help with children in needs by giving them the education they need etc</Text>
     </View>
     <View style={styles.container2}>
       <Text style={styles.text1}>NEW POST</Text>
       <View style={styles.container3}>
         <TouchableNativeFeedback onPress={PressHandler2}>
           <Text style={styles.text1}>EVENTS</Text>
         </TouchableNativeFeedback>
       </View>
       <View style={styles.container4}>
         <TouchableNativeFeedback onPress={PressHandler3}>
           <Text style={styles.text1}>UPDATES</Text>
         </TouchableNativeFeedback>
       </View>
     </View>
     </ScrollView>  
    </LinearGradient> 

  )
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#FFFFFF',
    height: 356,
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 62,
    width:370,
  },
  container2: {
    backgroundColor: '#FFFFFF',
    height: 110,
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 87,
    alignItems: 'center',
    width:370,
  },
  container3: {
    backgroundColor: '#ADA0FC',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    top: 15,
    left: 90
  },
  container4: {
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
    fontFamily:'Mont',
    top:'5%',
    left:'10%'
  },
  text4: {
    color: '#1B0B77',
    fontSize: 20,
    fontFamily:'Mont',
    top:'8%',
    left:'4%',
    right:'4%',
  },
})