import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import AppNav from "../navigation/AppNavigation";
import { Button } from "react-native-paper";
import { auth } from "../firebase";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "../navigation/AuthNavigation";
import Magazine from "./Magazine";

import ImagePath from "../constants/ImagePath";
import { TouchableHighlight } from "react-native-gesture-handler";
export default function Homes({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontSemi: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  const pressHandler2 = () => {
    navigation.navigate("Magazine");
  };
  const pressHandler3 = () => {
    navigation.navigate("NGOactivity");
  };
  const pressHandler4 = () => {
    navigation.navigate("NGOactivityTIME");
  };
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
        <View style={{flex:1}}>

        
        <Text
          style={{
            fontFamily: "Mont",
            top: "10%",
            left: "8%",
            fontSize: 36,
            color: "#1B0B77",
          }}
        >
          HELLO,
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "10%",
            left: "8%",
            fontSize: 36,
            color: "#1B0B77",
          }}
        >
          MIRUNA!
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "12.5%",
            left: "8%",
            fontSize: 22,
            color: "#1B0B77",
          }}
        >
          Let's see the situation of the NGOs:
        </Text>
        <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={pressHandler2}>
            <Text
              style={{ fontFamily: "MontSemi", fontSize: 18, color: "#1B0B77" }}
            >
              MY RESULTS
            </Text>
          </TouchableNativeFeedback>
          <View>
            
          </View>
        </View>
        <View style={{top:'17%', alignSelf:'center'}}>
        <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
          </TouchableNativeFeedback>
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <Image source={require('../assets/Images/preventispoza.png')} style={styles.img1} />
          <Text
          style={{
            fontFamily: "MontBold",
            top: "-62%",
            left: "36%",
            fontSize: 14,
            color: "#1B0B77",
            width: 230
          }}
        >
        Prevenire împotriva dependenței{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-61.5%",
            left: "36%",
            fontSize: 14,
            width: 220,
            color: "#1B0B77",
          }}
        >
          Voluntarii Preventis ne ajută să ajungem în la sute de elevi din și din afara Clujului.{" "}
        </Text>
        <Svg
    width={20}
    height={20}
    left= "70%"
    top= "-63.5%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M10 1.667c2.758 0 5 2.216 5 4.958 0 3.717-5 9.208-5 9.208s-5-5.491-5-9.208c0-2.742 2.242-4.958 5-4.958ZM10 5a1.667 1.667 0 1 0 0 3.333A1.667 1.667 0 0 0 10 5Zm6.667 10.833c0 1.842-2.984 3.334-6.667 3.334s-6.667-1.492-6.667-3.334c0-1.075 1.017-2.033 2.592-2.641l.533.758c-.9.375-1.458.892-1.458 1.467 0 1.15 2.242 2.083 5 2.083s5-.933 5-2.083c0-.575-.558-1.092-1.458-1.467l.533-.758c1.575.608 2.592 1.566 2.592 2.641Z"
      fill="#1B0B77"
    />
  </Svg>
  <Text
          style={{
            fontFamily: "Mont",
            top: "-67.9%",
            left: "76%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >
          Cluj{" "}
        </Text>


        </View>
        <View style={{top:'2.5%', alignSelf:'center'}}>
        <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept2} />
          </TouchableNativeFeedback>
          
          
          <Image source={ImagePath.certlogo} style={styles.logo2} />
          <Image source={ImagePath.ambulanta} style={styles.img2} />
          <Text
          style={{
            fontFamily: "MontBold",
            top: "-80.5%",
            left: "36%",
            fontSize: 14,
            color: "#1B0B77",
            width: 240,
          }}
        >
         MediCert-Medicii din Munți{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-75.5%",
            left: "37%",
            fontSize: 14,
            color: "#1B0B77",
            width: 220,
          }}
        >
          Proiectul presupune înființarea unui dispensar mobil - ambulanța 4×4 {" "}
        </Text>
        <Svg
    width={20}
    height={20}
    left= "70%"
    top= "-73.5%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M10 1.667c2.758 0 5 2.216 5 4.958 0 3.717-5 9.208-5 9.208s-5-5.491-5-9.208c0-2.742 2.242-4.958 5-4.958ZM10 5a1.667 1.667 0 1 0 0 3.333A1.667 1.667 0 0 0 10 5Zm6.667 10.833c0 1.842-2.984 3.334-6.667 3.334s-6.667-1.492-6.667-3.334c0-1.075 1.017-2.033 2.592-2.641l.533.758c-.9.375-1.458.892-1.458 1.467 0 1.15 2.242 2.083 5 2.083s5-.933 5-2.083c0-.575-.558-1.092-1.458-1.467l.533-.758c1.575.608 2.592 1.566 2.592 2.641Z"
      fill="#1B0B77"
    />
  </Svg>
  <Text
          style={{
            fontFamily: "Mont",
            top: "-78%",
            left: "76%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >
          Cluj{" "}
        </Text>


        </View>
        <View style={{top:'-12%', alignSelf:'center'}}>
        <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept3} />
          </TouchableNativeFeedback>
          <Image source={require('../assets/Images/bblogo.png')} style={styles.logo3} />
          <Image source={require('../assets/Images/bbpoza.png')} style={styles.img3} />
          <Text
          style={{
            fontFamily: "MontBold",
            top: "-80.5%",
            left: "37%",
            fontSize: 14,
            color: "#1B0B77",
            width:230
          }}
        >
          DeBeard Brothers construieşte o şcoală!{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-80.5%",
            left: "37%",
            fontSize: 14,
            color: "#1B0B77",
            width:230
          }}
        >
          Ne-am propus o altfel de şcoală: unde toti oamenii se vor dezvolta învăţând o meserie{" "}
        </Text>
        <Svg
    width={20}
    height={20}
    left= "70%"
    top= "-83.5%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M10 1.667c2.758 0 5 2.216 5 4.958 0 3.717-5 9.208-5 9.208s-5-5.491-5-9.208c0-2.742 2.242-4.958 5-4.958ZM10 5a1.667 1.667 0 1 0 0 3.333A1.667 1.667 0 0 0 10 5Zm6.667 10.833c0 1.842-2.984 3.334-6.667 3.334s-6.667-1.492-6.667-3.334c0-1.075 1.017-2.033 2.592-2.641l.533.758c-.9.375-1.458.892-1.458 1.467 0 1.15 2.242 2.083 5 2.083s5-.933 5-2.083c0-.575-.558-1.092-1.458-1.467l.533-.758c1.575.608 2.592 1.566 2.592 2.641Z"
      fill="#1B0B77"
    />
  </Svg>
  <Text
          style={{
            fontFamily: "Mont",
            top: "-87.5%",
            left: "76%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >
          Cluj{" "}
        </Text>


        </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  hello: {
    justifyContent: "center",
    fontSize: 36,
    position: "absolute",
    left: "25%",
    top: "80%",
    color: "#1B0B77",
    fontFamily: "Mont",
  },
  butonas: {
    //position:'absolute',
    //flex:0.1,
    justifyContent: "center",
    padding: 14,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#ADA0FC",
    top: "14%",
    width: "42%",
    left: "8%",
  },
  drept1: {
    justifyContent: "center",
    alignSelf:'center',
   
  },
  drept2: {
    justifyContent: "center",
    alignSelf:'center',
   top:-44
  },
  drept3: {
    justifyContent: "center",
    alignSelf:'center',
   top:-70
  },
  
  img1: {
    top: "-33%",
    left: "6%",
    
  },
  img2: {
    top: "-50%",
    left: "6%",
  },
  img3: {
    top: "-54.5%",
    left: "6%",
  },
 
  location: {
    
    width: 23,
    height: 23,
  },
  location2: {
    left: "70%",
    top: "-26.5%",
    width: 23,
    height: 23,
  },
  location3: {
    left: "70%",
    top: "-27.5%",
    width: 23,
    height: 23,
  },
  location4: {
    left: "70%",
    top: "-28.5%",
    width: 23,
    height: 23,
  },
  logo1: {
    left: "7.5%",
    top: "-35%",
    width: 95,
    height: 19,
  },
  logo2: {
    left: "7.5%",
    top: "-50%",
  },
  logo3: {
    left: "0.5%",
    top: "-51%",
  },
  
});