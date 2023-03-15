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
import Svg, {
  G,
  Mask,
  Path,
  Defs,
  Pattern,
  Use,
  
  ClipPath,
} from "react-native-svg"
import AppNav from "../navigation/AppNavigation";
import { Button } from "react-native-paper";
import { auth } from "../firebase";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "../navigation/AuthNavigation";
import Magazine from "./Magazine";

import ImagePath from "../constants/ImagePath";
import { TouchableHighlight } from "react-native-gesture-handler";
export default function Congrats({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });
  if (!fontsLoaded) return null;
  const pressHandler3 = () => {
    navigation.navigate("PastMonth");
  };
  const pressHandler2 = () => {
    navigation.navigate("Profile");
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
     
     
      <View style={{ top: "45%", alignSelf: "center" }}>
        <Image source={ImagePath.rectcongr} />
        <Svg
          width={64}
          height={64}
          top={"-60%"}
          alignSelf="center"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M32 30.774s-1.712-10.722-1.712-11.469c0-.747.768-1.354 1.712-1.354s1.712.606 1.712 1.354c0 .748-1.712 11.469-1.712 11.469Zm0 2.503s1.712 10.721 1.712 11.469c0 .748-.768 1.354-1.712 1.354s-1.712-.605-1.712-1.354c0-.749 1.712-11.469 1.712-11.469Zm-1.252-1.252s-10.721 1.712-11.468 1.712c-.748 0-1.354-.767-1.354-1.712 0-.944.606-1.711 1.354-1.711.747 0 11.468 1.711 11.468 1.711Zm2.504 0s10.721-1.711 11.469-1.711c.747 0 1.354.767 1.354 1.711 0 .945-.606 1.712-1.354 1.712-.748 0-11.469-1.712-11.469-1.712Zm-2.138-.884s-8.791-6.37-9.318-6.899c-.529-.528-.416-1.499.253-2.167.668-.668 1.638-.781 2.167-.253.527.528 6.898 9.319 6.898 9.319Zm1.772 1.77s8.791 6.37 9.318 6.899c.529.529.416 1.499-.253 2.168-.668.668-1.638.781-2.167.252-.527-.529-6.898-9.319-6.898-9.319Zm-1.772 0s-6.371 8.79-6.898 9.319c-.529.529-1.499.416-2.167-.252-.669-.669-.782-1.639-.253-2.168.527-.529 9.318-6.899 9.318-6.899Zm1.772-1.77s6.371-8.791 6.898-9.319c.529-.528 1.499-.415 2.167.253.669.668.782 1.639.253 2.167-.527.529-9.318 6.899-9.318 6.899Zm-1.73-1.203s-8.815-17.252-9.319-18.5c-.504-1.248-.203-2.546.673-2.9.877-.354 1.995.371 2.499 1.619.504 1.246 6.147 19.781 6.147 19.781Zm1.688 4.177s8.815 17.251 9.319 18.5c.504 1.247.203 2.545-.673 2.898-.877.355-1.995-.369-2.499-1.617s-6.147-19.781-6.147-19.781Zm-2.933-1.245s-17.252 8.815-18.5 9.319c-1.248.505-2.546.203-2.9-.674-.354-.875.371-1.995 1.619-2.499 1.247-.504 19.781-6.146 19.781-6.146Zm4.178-1.688s17.252-8.815 18.5-9.319c1.248-.505 2.546-.202 2.9.674.354.876-.371 1.995-1.619 2.499-1.247.503-19.781 6.146-19.781 6.146Zm-4.163-.036s-18.433-5.965-19.671-6.491c-1.238-.525-1.943-1.656-1.574-2.527.369-.869 1.674-1.148 2.912-.622 1.238.524 18.333 9.64 18.333 9.64Zm4.148 1.76s18.433 5.965 19.671 6.49c1.238.526 1.943 1.658 1.574 2.527-.369.871-1.674 1.15-2.912.623-1.238-.525-18.333-9.64-18.333-9.64ZM31.12 34.1s-5.965 18.433-6.491 19.672c-.526 1.238-1.657 1.943-2.527 1.574-.87-.37-1.148-1.674-.624-2.912.527-1.239 9.642-18.334 9.642-18.334Zm1.76-4.148s5.965-18.433 6.491-19.671c.526-1.239 1.657-1.943 2.527-1.574.87.369 1.149 1.672.624 2.911-.527 1.239-9.642 18.334-9.642 18.334Zm-.874 17.116s1.714 12.484 1.714 13.354c0 .87-.766 1.578-1.711 1.578-.945 0-1.711-.705-1.711-1.576 0-.871 1.708-13.356 1.708-13.356Zm-.011-31.113S30.28 4.287 30.28 3.474c0-.813.766-1.474 1.711-1.474.945 0 1.711.659 1.711 1.473 0 .814-1.707 12.482-1.707 12.482ZM42.659 42.65s10.04 7.616 10.654 8.231c.617.616.574 1.656-.094 2.325-.668.668-1.709.711-2.324.096-.616-.614-8.236-10.652-8.236-10.652ZM20.651 20.658s-9.463-7.038-10.039-7.613c-.575-.576-.5-1.584.168-2.252.668-.669 1.677-.744 2.252-.168.576.574 7.619 10.033 7.619 10.033Zm22.008.691s7.62-10.036 8.236-10.651c.615-.616 1.656-.573 2.324.096.668.668.711 1.709.094 2.324-.614.614-10.654 8.231-10.654 8.231ZM20.651 43.341s-7.043 9.46-7.619 10.034c-.575.576-1.584.5-2.252-.168-.668-.669-.743-1.677-.168-2.252.576-.575 10.039-7.614 10.039-7.614Zm26.417-11.347s12.484-1.714 13.355-1.714c.871-.001 1.577.766 1.577 1.71.001.945-.704 1.712-1.575 1.712-.871.001-13.357-1.708-13.357-1.708Zm-31.112.012S4.286 33.719 3.474 33.72C2.659 33.72 2 32.953 2 32.009c0-.945.659-1.712 1.474-1.712.812 0 12.482 1.709 12.482 1.709ZM20.728 6.936a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68ZM43.544 6.936a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68ZM20.209 60.866a1.841 1.841 0 1 0 0-3.682 1.841 1.841 0 0 0 0 3.682ZM43.025 60.866a1.841 1.841 0 1 0 0-3.682 1.841 1.841 0 0 0 0 3.682ZM4.912 45.049a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68ZM4.912 22.233a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68ZM58.841 45.569a1.841 1.841 0 1 0 0-3.682 1.841 1.841 0 0 0 0 3.682ZM58.841 22.752a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68Z"
            fill="#1B0B77"
          />
        </Svg>
        <Text
          style={{
            fontFamily: "Mont",
            fontSize: 20,
            color: "#1B0B77",
            top: "-58%",
            alignSelf: "center",
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

            width: 370,
            textAlign: "center",
          }}
        >
          You have just set your goals for making the world a better place!
        </Text>
      </View>
      <View style={styles.butonas}>
        <TouchableNativeFeedback onPress={() => navigation.popToTop()}>
          <Text style={{ fontFamily: "Mont", fontSize: 20, color: "#1B0B77" }}>
            Go Back
          </Text>
        </TouchableNativeFeedback>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  butonas: {
    padding: 12,
    alignItems: "center",
    borderRadius: 22,
    backgroundColor: "#ADA0FC",
    top: "30%",
    width: "45%",
    alignSelf: "center",
  },
});
