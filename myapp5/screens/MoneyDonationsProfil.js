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
export default function Home({ navigation }) {
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
          <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
          <Image source={ImagePath.presenting} style={styles.img1} />
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <Text
          style={{
            fontFamily: "Mont",
            top: "-70%",
            
            fontSize: 14,
            color: "#1B0B77",
            left:'40%'

          }}
        >
          Descrierea evenimentului{" "}
        </Text>
        <View style={styles.butonas}>
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
          <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
          <Image source={ImagePath.presenting} style={styles.img1} />
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <Text
          style={{
            fontFamily: "Mont",
            top: "-70%",
            
            fontSize: 14,
            color: "#1B0B77",
            left:'40%'

          }}
        >
          Descrierea evenimentului{" "}
        </Text>
        <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={pressHandler2}>
            <Text
              style={{ fontFamily: "Mont", fontSize: 16, color: "#1B0B77" }}
            >
              DONATE
            </Text>
          </TouchableNativeFeedback>
        </View>
        </View>
        <View style={{top: "-13%",}}>
          <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
          <Image source={ImagePath.presenting} style={styles.img1} />
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <Text
          style={{
            fontFamily: "Mont",
            top: "-70%",
            
            fontSize: 14,
            color: "#1B0B77",
            left:'40%'

          }}
        >
          Descrierea evenimentului{" "}
        </Text>
        <View style={styles.butonas}>
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
  butonas: {
    //position:'absolute',
    //flex:0.1,
    
    padding: 2,
    alignItems: "center",
    borderRadius: 27,
    backgroundColor: "#ADA0FC",
   top: "-59%",
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
   top: "-38%",
    left: "10.5%",
    width: 107,
    height: 83,
  },
  
  
  logo1: {
    left: "11.5%",
    top: "-73%",
    width: 91,
    height: 15,
  },
  
});