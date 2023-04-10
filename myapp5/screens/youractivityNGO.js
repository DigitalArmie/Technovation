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
export default function Youractiv({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontSemi: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  const pressHandler2 = () => {
    navigation.navigate("NGOactivity");
  };
  const pressHandler3 = () => {
    navigation.navigate("NGOactivity");
  };
  const pressHandler4 = () => {
    navigation.navigate("NGOactivityTIME");
  };
  const pressHandler6 = () => {
    navigation.navigate("future");
  };
  const pressHandler7 = () => {
    navigation.navigate("past");
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
      
      <ScrollView style={{ flex: 0.7 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{flex:1}}>

        
        <Text
          style={{
            fontFamily: "Mont",
            top: "10%",
            left: "8%",
            fontSize: 36,
            width:200,
            color: "#1B0B77",
          }}
        >
          YOUR ACTIVITY:
        </Text>
        <TouchableNativeFeedback onPress={pressHandler6}>
        <Text
          style={{
            fontFamily: "Mont",
            top: "12.5%",
            left: "8%",
            fontSize: 22,
            color: "#1B0B77",
          }}
        >
          Future activity:
        </Text>
        </TouchableNativeFeedback>
        <View style={{top:'14%', alignSelf:'center'}}>
        <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
          </TouchableNativeFeedback>
          <Image source={require('../assets/Images/ambul.png')} style={styles.img1} />
          
          <Image source={ImagePath.certlogo} style={styles.logo1} />
          <Text
          style={{
            fontFamily: "MontBold",
            top: "-68.5%",
            left: "37%",
           width:190,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >
          MediCert - Medicii din Munți{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-66.5%",
            left: "37%",
            width:250,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >
          Proiectul presupune înființarea unui dispensar mobil - ambulanța 4×4 {" "}
        </Text>
        <Svg
    width={20}
    height={20}
    left= "70%"
    top= "-66%"
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
            top: "-71%",
            left: "76%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >
          Cluj{" "}
        </Text>


        </View>
        <View style={{top:'2%', alignSelf:'center'}}>
        <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept2} />
          </TouchableNativeFeedback>
          <Image source={ImagePath.certlogo} style={styles.logo2} />
          <Image source={ImagePath.cert} style={styles.img2} />
          
          <Text
           style={{
            fontFamily: "MontBold",
            top: "-78%",
            left: "37%",
           width:190,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >
          CERT-Prinde Radacini{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-75.5%",
            left: "36.5%",
            width:230,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >
         Evenimentul este organizat cu sprijinul Steelcase, Celot.ro, General Membrane și Romsilva. {" "}
        </Text>
        <Svg
    width={20}
    height={20}
    left= "70%"
    top= "-77.5%"
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
            top: "-81.9%",
            left: "76%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >
          Cluj{" "}
        </Text>


        </View>
        <TouchableNativeFeedback onPress={pressHandler7}>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-15%",
            left: "8%",
            fontSize: 22,
            color: "#1B0B77",
          }}
        >
          Past activity:
        </Text>
        </TouchableNativeFeedback>
        <View style={{top:'-9%', alignSelf:'center'}}>
        <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept3} />
          </TouchableNativeFeedback>
          <Image source={ImagePath.certlogo} style={styles.logo3} />
          <Image source={require('../assets/Images/imgcert3.png')} style={styles.img3} />
          <Text
           style={{
            fontFamily: "MontBold",
            top: "-84%",
            left: "37%",
           width:190,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >
          VREAU LA ȘCOALĂ! – COPIII DE LA JIBOU {" "}
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-83.5%",
            left: "37%",
            width:245,
            fontSize: 14,
            color: "#1B0B77",
          }}
        
        >44 de ghiozdane personalizate au fost pregătite pentru copii nevoiasi.{" "}
        </Text>
        <Svg
    width={20}
    height={20}
    left= "70%"
    top= "-87.5%"
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
            top: "-91.9%",
            left: "76%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >
          Cluj{" "}
        </Text>


        </View>
        <View style={{top:'-21%', alignSelf:'center'}}>
        <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept4} />
          </TouchableNativeFeedback>
          
          
          <Image source={require('../assets/Images/imgcert4.png')} style={styles.img4} />
          <Image source={ImagePath.certlogo} style={styles.logo4} />
          <Text
          
          style={{
            fontFamily: "MontBold",
            top: "-97%",
            left: "37%",
           width:220,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >
          ZÂMBETE PENTRU PITICI – TABĂRA DE LA ARIEȘENI{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-96%",
            left: "37%",
            width:220,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >6 zile în care cei mici au uitat de orice lipsuri și au învățat de ce e important să protejăm . {" "}
        </Text>
        <Svg
    width={20}
    height={20}
    left= "70%"
    top= "-100.5%"
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
            top: "-104.9%",
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
    
    padding: 14,
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "#ADA0FC",
    top:'-25%',
    width: "44%",
    alignContent:'center',
    left:'30%'
  },
  drept1: {
    justifyContent: "center",
    alignSelf:'center',
   top:-10,
  },
  drept2: {
    justifyContent: "center",
    alignSelf:'center',
    top:-50,
   
  },
  drept3: {
    justifyContent: "center",
    alignSelf:'center',
    top:-90,
  },
  drept4: {
    justifyContent: "center",
    alignSelf:'center',
    top:-150,
  },
  img1: {
    top: "-29%",
    left: "5%",
    
  },
  img2: {
    top: "-48%",
    left: "5%",
  },
  img3: {
    top: "-55.5%",
    left: "5%",
    
  },
  img4: {
    top: "-60%",
    left: "5%",
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
    top: "-58.5%",
    
  },
  logo2: {
    left: "7.5%",
    top: "-49%",
  },
  logo3: {
    left: "7.5%",
    top: "-55.5%",
  },
  logo4: {
    left: "7.5%",
    top: "-88.5%",
  },
});