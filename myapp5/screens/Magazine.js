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
export default function Maga({ navigation }) {
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
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Mont",
              top: "10%",
              fontSize: 24,
              color: "#1B0B77",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {" "}
            LET’S SEE WHAT YOUR DONATION CONTRIBUTED TO:
          </Text>
          <View style={{ top: '20%', alignSelf: 'center' }}>
            <TouchableNativeFeedback onPress={pressHandler3}>
              <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
            </TouchableNativeFeedback>

            <Image source={ImagePath.presenting} style={styles.img1} />
            <Image source={ImagePath.logo2} style={styles.logo1} />
            <Text
              style={{
                fontFamily: "Mont",
                top: "-65.5%",
                left: "37%",
                fontSize: 14,
                color: "#1B0B77",
              }}
            >
              Descrierea evenimentului{" "}
            </Text>
            <Svg
              width={20}
              height={20}
              left="70%"
              top="-55.5%"
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
                top: "-60.9%",
                left: "76%",
                fontSize: 12.5,
                color: "#1B0B77",
              }}
            >
              Cluj{" "}
            </Text>


          </View>
          <View style={{ top: '6%', alignSelf: 'center' }}>
            <TouchableNativeFeedback onPress={pressHandler3}>
              <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
            </TouchableNativeFeedback>

            <Image source={ImagePath.presenting} style={styles.img1} />
            <Image source={ImagePath.logo2} style={styles.logo1} />
            <Text
              style={{
                fontFamily: "Mont",
                top: "-65.5%",
                left: "37%",
                fontSize: 14,
                color: "#1B0B77",
              }}
            >
              Descrierea evenimentului{" "}
            </Text>
            <Svg
              width={20}
              height={20}
              left="70%"
              top="-55.5%"
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
                top: "-60.9%",
                left: "76%",
                fontSize: 12.5,
                color: "#1B0B77",
              }}
            >
              Iasi{" "}
            </Text>


          </View>
          <View style={{ top: '-8%', alignSelf: 'center' }}>
            <TouchableNativeFeedback onPress={pressHandler3}>
              <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
            </TouchableNativeFeedback>

            <Image source={ImagePath.presenting} style={styles.img1} />
            <Image source={ImagePath.logo2} style={styles.logo1} />
            <Text
              style={{
                fontFamily: "Mont",
                top: "-65.5%",
                left: "37%",
                fontSize: 14,
                color: "#1B0B77",
              }}
            >
              Descrierea evenimentului{" "}
            </Text>
            <Svg
              width={20}
              height={20}
              left="70%"
              top="-55.5%"
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
                top: "-60.9%",
                left: "76%",
                fontSize: 12.5,
                color: "#1B0B77",
              }}
            >
              Titu{" "}
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
    alignSelf: 'center',

  },
  img1: {
    top: "-38%",
    left: "6%",

  },
  img2: {
    top: "-405%",
    left: "10.5%",
  },
  img3: {
    top: "-419%",
    left: "10.5%",
    width: 107,
    height: 83,
  },
  img4: {
    top: "-437%",
    left: "10.5%",
    width: 107,
    height: 83,
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
    top: "-72.3%",
    width: 95,
    height: 19,
  },
  logo2: {
    left: "11.5%",
    top: "-30.3%",
    width: 95,
    height: 19,
  },
  logo3: {
    left: "11.5%",
    top: "-31%",
    width: 95,
    height: 19,
  },
  logo4: {
    left: "11.5%",
    top: "-32%",
    width: 95,
    height: 19,
  },
});

