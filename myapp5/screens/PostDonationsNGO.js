import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  ScrollView,
  TextInput
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path, G, Defs } from "react-native-svg";
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
    navigation.navigate("congratsngo");
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
       
      <Text
          style={{
            fontFamily: "Mont",
            top: "10%",
            left: "8%",
            fontSize: 32,
            color: "#1B0B77",
            width:'80%'
          }}
        >
          LET’S COLLECT SOME DONATIONS!
        </Text>
        <View style={{alignSelf:'center', top:'14%'}}>
        <Image source={ImagePath.dreptunghi1} />
 
        <TextInput


           
            placeholder="Tell us about your cause:"
           
            onChangeText={(text) => setMoney(text)}
            style={{left:'12%', fontFamily: "MontLight",fontSize: 20,top:'-50%' }}


          />
          <Svg
    width={314}
    height={19}
    top={-100}
    left={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={2} d="m8.997 6 297-1" />
    </G>
    <Defs></Defs>
  </Svg>
       
        </View>
        <View style={{alignSelf:'center', top:'7%'}}>
        <Image source={ImagePath.dreptunghi1} />
  <Svg
    width={314}
    height={19}
    top={-80}
    left={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={2} d="m8.997 6 297-1" />
    </G>
    <Defs></Defs>
  </Svg>
        <TextInput


           
            placeholder="Enter a description here"
           
            onChangeText={(text) => setMoney(text)}
            style={{left:'12%', fontFamily: "MontLight",fontSize: 20,top:'-60%' }}


          />
      
        </View>
        <View style={{alignSelf:'center', top:'-1%'}}>
        <Image source={ImagePath.dreptunghi1} />
  <Svg
    width={314}
    height={19}
    top={-80}
    left={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={2} d="m8.997 6 297-1" />
    </G>
    <Defs></Defs>
  </Svg>
        <TextInput


           
            placeholder=" Use of money:"
           
            onChangeText={(text) => setMoney(text)}
            style={{left:'12%', fontFamily: "MontLight",fontSize: 20,top:'-60%' }}


          />
      
        </View>
        <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={pressHandler2}>
            <Text
              style={{ fontFamily: "MontSemi", fontSize: 20, color: "#1B0B77" }}
            >
              POST
            </Text>
          </TouchableNativeFeedback>
          <View>
            
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
    top:'-3.5%',
    width: "38%",
    alignContent:'center',
    left:'30%'
  },
})