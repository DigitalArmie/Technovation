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
    width: 356,
    height: 150,
    left: "6.5%",
    top: "17%",
  },
  img1: {
    top: "-408%",
    left: "10.5%",
    width: 107,
    height: 83,
  },
  img2: {
    top: "-417%",
    left: "10.5%",
  },
  img3: {
    top: "-424%",
    left: "10.5%",
    width: 107,
    height: 83,
  },
  img4: {
    top: "-434%",
    left: "10.5%",
    width: 107,
    height: 83,
  },
  location: {
    left: "70%",
    top: "-29%",
    width: 23,
    height: 23,
  },
  location2: {
    left: "70%",
    top: "-29.5%",
    width: 23,
    height: 23,
  },
  location3: {
    left: "70%",
    top: "-30.4%",
    width: 23,
    height: 23,
  },
  location4: {
    left: "70%",
    top: "-30.9%",
    width: 23,
    height: 23,
  },
  logo1: {
    left: "11.5%",
    top: "-33.2%",
    width: 91,
    height: 15,
  },
  logo2: {
    left: "11.5%",
    top: "-34%",
    width: 91,
    height: 14,
  },
  logo3: {
    left: "11.5%",
    top: "-34.5%",
    width: 91,
    height: 14,
  },
  logo4: {
    left: "11.5%",
    top: "-35.3%",
    width: 91,
    height: 14,
  },
});
