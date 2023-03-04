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
      <Text style={styles.text2}> Name User</Text>
      <View style={styles.container1}>
        <Text style={styles.text1}>Monthly Donation Fund</Text>
        <Svg
    width={49}
    height={47}
    left='-38%'
    top='8%'
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.371 24.153a3.94 3.94 0 0 0-1.492-1.892 4.204 4.204 0 0 0-2.358-.72v-.979h-2.042v.98a4.173 4.173 0 0 0-2.887 1.147 3.838 3.838 0 0 0-1.196 2.77c0 1.038.43 2.034 1.196 2.769a4.173 4.173 0 0 0 2.887 1.147v3.917c-.888 0-1.644-.544-1.926-1.306a.969.969 0 0 0-.198-.339c-.09-.099-.198-.18-.32-.238a1.056 1.056 0 0 0-1.142.154.983.983 0 0 0-.24.314.947.947 0 0 0-.024.762 3.94 3.94 0 0 0 1.492 1.892c.69.468 1.514.719 2.358.719v.98h2.042v-.98a4.173 4.173 0 0 0 2.887-1.147 3.837 3.837 0 0 0 1.196-2.77c0-1.038-.43-2.035-1.196-2.77a4.173 4.173 0 0 0-2.887-1.146V23.5c.422 0 .834.125 1.179.36.345.233.605.563.746.945.09.245.278.446.522.558a1.054 1.054 0 0 0 1.123-.155c.1-.086.181-.19.239-.306a.947.947 0 0 0 .041-.749ZM23.48 23.5c-.541 0-1.06.206-1.444.574a1.919 1.919 0 0 0-.598 1.384c0 .52.216 1.018.598 1.385.383.367.903.574 1.444.574V23.5Zm2.042 9.792c.541 0 1.06-.207 1.444-.574.382-.367.598-.865.598-1.385 0-.519-.216-1.017-.598-1.384a2.086 2.086 0 0 0-1.444-.574v3.917Z"
      fill="#1B0B77"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.427 8.441c2.505-1.176 6.615-2.566 11.113-2.566 4.404 0 8.405 1.333 10.897 2.493l.141.066c.751.356 1.358.693 1.784.966l-3.77 5.287C42.285 23.212 49 41.123 24.54 41.123S6.614 23.537 15.383 14.688L11.637 9.4c.288-.181.655-.392 1.092-.615.216-.112.449-.227.698-.344Zm17.741 6.176 3.019-4.233c-2.808.194-6.148.826-9.363 1.72-2.297.636-4.85.539-7.213.12a26.643 26.643 0 0 1-1.773-.377l1.96 2.768c4.2 1.434 9.168 1.434 13.37.002ZM16.62 16.283c4.916 1.822 10.823 1.822 15.738-.001a28.662 28.662 0 0 1 5.092 6.994c1.38 2.7 2.132 5.4 2.01 7.726-.12 2.246-1.04 4.164-3.143 5.59-2.192 1.485-5.878 2.572-11.777 2.572-5.906 0-9.61-1.069-11.822-2.537-2.118-1.408-3.048-3.3-3.18-5.515-.137-2.301.598-4.987 1.973-7.706 1.312-2.593 3.142-5.089 5.11-7.122ZM15.445 9.71c.817.233 1.67.436 2.536.59 2.195.388 4.396.444 6.274-.077a57.244 57.244 0 0 1 6.666-1.44c-1.878-.543-4.075-.949-6.382-.949-3.517 0-6.797.941-9.094 1.876Z"
      fill="#1B0B77"
    />
  </Svg>
  <Svg
    width={181}
    height={18}
    left='-25%'
    top='4%'
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={2} d="M8 5h165" />
    </G>
    <Defs></Defs>
  </Svg>
        <Text style={styles.text3} >250 ron</Text>
        <Svg
    width={49}
    height={47}
    left='12%'
    top='-55%'
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Path
      d="M22.458 41.125c-2.552 0-4.942-.457-7.17-1.37-2.23-.915-4.178-2.171-5.845-3.77a17.635 17.635 0 0 1-3.93-5.607c-.953-2.138-1.43-4.43-1.43-6.878 0-4.929 1.779-9.098 5.335-12.51 3.556-3.41 7.902-5.115 13.04-5.115a15.663 15.663 0 0 1 2.501.196c.443.065.817.285 1.123.66.307.376.46.792.46 1.25 0 .652-.23 1.15-.688 1.491-.46.344-1.048.483-1.762.418a14.36 14.36 0 0 0-.817-.075 14.206 14.206 0 0 0-.817-.023c-4.015 0-7.4 1.322-10.157 3.965-2.756 2.644-4.134 5.891-4.134 9.743 0 3.851 1.378 7.099 4.134 9.743 2.756 2.643 6.142 3.965 10.157 3.965 3.982 0 7.342-1.305 10.082-3.916 2.739-2.612 4.142-5.827 4.21-9.645a2.1 2.1 0 0 1 .588-1.469c.39-.424.875-.636 1.454-.636.544 0 1.02.187 1.429.562.408.376.612.808.612 1.298v.098c0 4.928-1.778 9.098-5.334 12.508-3.556 3.411-7.902 5.117-13.04 5.117Zm16.334-23.5c-.579 0-1.063-.188-1.454-.564a1.851 1.851 0 0 1-.588-1.394V11.75h-4.083c-.579 0-1.063-.187-1.454-.562a1.857 1.857 0 0 1-.588-1.396c0-.555.196-1.02.588-1.397.39-.374.875-.562 1.454-.562h4.083V3.917c0-.555.196-1.02.588-1.397.39-.374.875-.562 1.454-.562.578 0 1.063.188 1.453.562.392.376.588.842.588 1.397v3.916h4.084c.578 0 1.063.188 1.453.562.392.376.588.842.588 1.397 0 .554-.196 1.02-.588 1.396-.39.375-.875.562-1.453.562h-4.084v3.917c0 .554-.196 1.02-.588 1.394-.39.376-.875.564-1.453.564Zm-12.046 12.73-5.717-5.484a1.95 1.95 0 0 1-.612-1.42v-7.784c0-.555.196-1.02.588-1.397.39-.374.875-.562 1.453-.562.579 0 1.064.188 1.456.562.39.376.586.842.586 1.397v7.05l5.104 4.895c.375.36.562.816.562 1.371s-.188 1.012-.562 1.371c-.374.36-.85.539-1.429.539-.578 0-1.055-.18-1.43-.539Z"
      fill="#1B0B77"
    />
  </Svg>
        <Text style={styles.text4}>4 ore</Text>
        <Svg
    width={181}
    height={18}
    left='25%'
    top='-79.5%'
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={2} d="M8 5h165" />
    </G>
    <Defs></Defs>
  </Svg>
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
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 62,
    alignItems: 'center',
    width:370,
  },
  container2: {
    backgroundColor: '#FFFFFF',
    height: 206,
    width:370,
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 70,
    alignItems: 'center'
  },
  container3: {
    backgroundColor: '#FFFFFF',
    height: 110,
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 87,
    alignItems: 'center',
    width:370,
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
    
    fontFamily:'MontSemi'
  },
  text2: {
    color: '#1B0B77',
    fontSize: 24,
   
    textAlign: 'center',
    top: 45,
    fontFamily: 'MontBold'
  },
  text3: {
    color: '#1B0B77',
    fontSize: 22,
    
    top: -40,
    left: -70,
    fontFamily:"Mont",
  },
  text4: {
    color: '#1B0B77',
    fontSize: 22,
    fontFamily:"Mont",
    top: -122,
    left: 100
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