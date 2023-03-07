import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import ImagePath from "../constants/ImagePath";
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Montt: require("../assets/fonts/Montserrat-Bold.ttf"),

  });
  if (!fontsLoaded) return null;
  const pressHandler3 = () => {
    navigation.navigate("MyGoals");
  };
  if (!fontsLoaded) return null;
  const pressHandler1 = () => {
    navigation.navigate("VolunteeringEvent");
  };
  if (!fontsLoaded) return null;
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

  notifi: {
    top: 60,
    left: 19,
  },

  drept1: {
    alignSelf: 'center',
    justifyContent: "center",
    top: 50,
  },
  butonas1: {
    //position:'absolute',
    //flex:0.1,
    justifyContent: "center",
    padding: 5,
    alignItems: "center",
    borderRadius: 13,
    backgroundColor: "#ADA0FC",
    width: 110,
    height: 30,
    left: 240,
    top: -230,
  },
  img1: {
    top: -225,
    left: 34,

  },
  logo1: {
    left: 40,
    top: -135,
    width: 91,
    height: 15,
  },
  drept3: {
    alignSelf: 'center',
    justifyContent: "center",
    top: -200,
  },
  butonas2: {
    //position:'absolute',
    //flex:0.1,
    justifyContent: "center",
    padding: 5,
    alignItems: "center",
    borderRadius: 13,
    backgroundColor: "#ADA0FC",
    width: 110,
    height: 30,
    left: 240,
    top: -420,
  },
  drept4: {
    alignSelf: 'center',
    justifyContent: "center",
    top: -390,
  },
  img3: {
    top: -570,
    left: 34,

  },
  logo3: {
    left: 40,
    top: -575,
    width: 91,
    height: 15,
  },
  butonas3: {
    //position:'absolute',
    //flex:0.1,
    justifyContent: "center",
    padding: 5,
    alignItems: "center",
    borderRadius: 13,
    backgroundColor: "#ADA0FC",
    width: 110,
    height: 30,
    left: 240,
    top: -670,
  },
});
