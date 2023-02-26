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
  const pressHandler2 = () => {
    navigation.navigate("Homescreen");
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
      <View style={{top:'45%', alignSelf:'center'}}>
      <Image source={ImagePath.rectcongr} />
      <Image source={ImagePath.fireworks} style={{top:'-58%', alignSelf:'center'}}/>
        <Text
          style={{
            fontFamily: "Mont",
            fontSize: 20,
            color: "#1B0B77",
            top: "-58%",
            alignSelf:'center'
            
          }}
        >
          Congratulations!
          
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            fontSize: 20,
            color: "#1B0B77",
            top: "-50%",
            
            width:370,
            textAlign:'center'
            
          }}
        >
          You have just set your goals for making the world a better place!
          
        </Text>
      </View>
      <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={pressHandler2}>
            <Text
              style={{ fontFamily: "Mont", fontSize: 20, color: "#1B0B77" }}
            >
              Homepage
            </Text>
          </TouchableNativeFeedback>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  butonas: {
    //position:'absolute',
    //flex:0.1,
    
    padding: 12,
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "#ADA0FC",
   top: "30%",
    width: "45%",
    alignSelf:'center',
   
  },
});
