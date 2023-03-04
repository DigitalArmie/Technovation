import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image, 
  TextInput
} from "react-native";
import Svg, { Path, G, Defs } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import ImagePath from "../constants/ImagePath";
import {ScrollView} from "react-native-gesture-handler"

export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontSemi: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  const pressHandler = () =>{
    navigation.navigate("Congratulations");
  }
  return (
    <LinearGradient
      colors={[
        "#ADA0FC",
        "#BEB3FC",
        "#C8BFFD",
        "#D0C8FD",
        "#D9D3FE",
        "#E8E4FE",
        "#D9D3FE",
      ]}
      style={{ flex: 1 }}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 1.2, y: 1.1 }}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Image source={ImagePath.logo2} style={{
        top: 126,
        alignSelf: 'center'
      }}/>
      <View style={styles.container1}>
        <Text style={styles.text1}>Set an amount of money:</Text>
        <Svg
    width={295}
    height={19}
    fill="none"
    top={60}
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={2} d="M7.999 5.5h279.002" />
    </G>
    <Defs></Defs>
  </Svg>
        <TextInput            
          placeholder="Type here"
          onChangeText={(text) => (text)}
          style={{alignSelf:'center', fontFamily: "MontLight",fontSize: 20,top:'6%', width:120 }}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>Donation sold at the moment:</Text>
        <Svg
    width={49}
    height={47}
    top={24}
    left={-105}
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
    width={184}
    height={18}
    top={10}
    left={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={2} d="M8 5h168" />
    </G>
    <Defs></Defs>
  </Svg>
        <Text style={{alignSelf:'center', fontWeight: "500",fontSize: 20,top:-35, color:'#1B0B77',fontFamily: "MontRegular"}}>500 ron</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text1}>Sold after donation:</Text>
        <Svg
    width={49}
    height={47}
    top={20}
    left={-105}
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
    width={184}
    height={18}
    top={8}
    left={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={2} d="M8 5h168" />
    </G>
    <Defs></Defs>
  </Svg>
        <Text style={{alignSelf:'center', fontWeight: "500",fontSize: 20,top:-35, color:'#1B0B77',fontFamily: "MontRegular"}}>200 ron</Text>
      </View>
      <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={pressHandler}>
            <Text
              style={{ fontFamily: "MontSemi", fontSize: 18, color: "#1B0B77" }}
            >
              DONATE
            </Text>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#FFFFFF',
    height: 136,
    //position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 210,
    alignItems: 'center',
    width: 370
  },
  container2: {
    backgroundColor: '#FFFFFF',
    height: 136,
   // position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 230,
    alignItems: 'center',
    width: 370
  },
  container3: {
    backgroundColor: '#FFFFFF',
    height: 136,
    //position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 250,
    alignItems: 'center',
    width: 370,
    
  },
  text1: {
    color: '#1B0B77',
    fontSize: 20,
    fontWeight: '500',
    top: 15,
    fontFamily: "Mont"
  },
  butonas: {
    justifyContent: "center",
    padding: 14,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ADA0FC",
    top: "35%",
    width: "40%",
    alignSelf: 'center'
  },
});
