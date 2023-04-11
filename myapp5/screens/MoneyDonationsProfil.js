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

import AppNav from "../navigation/AppNavigation";
import { Button } from "react-native-paper";
import { auth } from "../firebase";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "../navigation/AuthNavigation";
import Magazine from "./Magazine";
import Svg, { G, Path, Defs } from "react-native-svg";

import ImagePath from "../constants/ImagePath";
import { TouchableHighlight } from "react-native-gesture-handler";
export default function MoneyDonation({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });
  if (!fontsLoaded) return null;
  const pressHandler3 = () => {
    navigation.navigate("PastMonth");
  };
  const pressHandler2 = () => {
    navigation.navigate("investmoney");
  };
  const pressHandler4 = () => {
    navigation.navigate("NGOactivityMONEY");
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
        <Text
          style={{
            fontFamily: "Mont",
            top: "10%",
            fontSize: 24,
            color: "#1B0B77",
            justifyContent: "center",
            textAlign: "center",
            alignSelf:'center',
            width: 350,
          }}
        >
          {" "}
          CHOOSE WHERE YOU WANT TO DONATE THIS MONTH:
        </Text>
        <View style={{top: "17%",}}>
          <TouchableNativeFeedback onPress={pressHandler4}>
             <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
          </TouchableNativeFeedback>
         
          <Image source={ImagePath.certlogo} style={{top: "-39%", left: "10.5%"}} />
          <Image source={ImagePath.ambulanta} style={{top: "-39%", left: "10%"}} />
          <Text
          style={{
            fontFamily: "MontBold",
            top: "-68.5%",
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
            top: "-66.5%",
            left: "40%",
            fontSize: 14,
            color: "#1B0B77",
            width: 220,
          }}
        >
          Proiectul presupune înființarea unui dispensar mobil - ambulanța 4×4 {" "}
        </Text>
        <View style={styles.butonas1}>
          <TouchableNativeFeedback onPress={pressHandler2}>
            <Text
              style={{ fontFamily: "Mont", fontSize: 16, color: "#1B0B77" }}
            >
              DONATE
            </Text>
          </TouchableNativeFeedback>
        </View>
        </View>
        <View style={{top: "2%",}}>
          <Image source={ImagePath.dreptunghi1} style={styles.drept2} />
          <Image source={require('../assets/Images/bblogo.png')} style={{left: "7.5%",top: "-56.7%" }} />
          <Image source={require('../assets/Images/bbpoza.png')} style={{left: "11%",top: "-60%" }} />
          <Text
          style={{
            fontFamily: "MontBold",
            top: "-87.5%",
            left: "37%",
            fontSize: 14,
            color: "#1B0B77",
            width:230
          }}
        >
          Beard Brothers construieşte o şcoală!{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-87%",
            left: "37%",
            fontSize: 14,
            color: "#1B0B77",
            width:230
          }}
        >
          Ne-am propus o altfel de şcoală: unde toti oamenii se vor dezvolta învăţând o meserie{" "}
        </Text>
        <View style={styles.butonas2}>
          <TouchableNativeFeedback onPress={pressHandler2}>
            <Text
              style={{ fontFamily: "Mont", fontSize: 16, color: "#1B0B77" }}
            >
              DONATE
            </Text>
          </TouchableNativeFeedback>
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
  butonas1: {
    //position:'absolute',
    //flex:0.1,
    
    padding: 2,
    alignItems: "center",
    borderRadius: 27,
    backgroundColor: "#ADA0FC",
   top: "-66%",
    width: "25%",
    left:'65%'
   
  },
  butonas2: {
    //position:'absolute',
    //flex:0.1,
    
    padding: 2,
    alignItems: "center",
    borderRadius: 27,
    backgroundColor: "#ADA0FC",
   top: "-91.5%",
    width: "25%",
    left:'65%'
   
  },
  drept1: {
    justifyContent: "center",
    width: 356,
    height: 150,
    
    alignSelf:'center'
  },
  img1: {
   top: "-39%",
   left: "7%",
  
  },
  
  
  logo1: {
    top: "-39%",
    left: "7.5%",
    
  },
  drept2: {
    justifyContent: "center",
    width: 356,
    height: 150,
    alignSelf:'center',
    top: -90
  },
  img2: {
   top: "-60.4%",
   left: "8.5%",
  },
  
  
  logo2: {
    left: "0.5%",
    top: "-56.7%",
    
  },
  
});