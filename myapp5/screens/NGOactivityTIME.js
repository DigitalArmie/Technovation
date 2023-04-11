import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import ImagePath from "../constants/ImagePath";

export default function ActivTime({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  if (!fontsLoaded) return null;
  const pressHandler3 = () => {
    navigation.navigate("NGOpresentation");
  };
  const pressHandler2 = () => {
    navigation.navigate("Investtime");
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
        <View>
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.logo2} style={styles.name} />
          </TouchableNativeFeedback>
        </View>
        <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={pressHandler2}>
            <Text
              style={{ fontFamily: "MontSemi", fontSize: 18, color: "#1B0B77" }}
            >
              INVEST MY TIME
            </Text>
          </TouchableNativeFeedback>
        </View>
        <Image
          source={ImagePath.rectangle1}
          style={{ top: "23%", left: "3.5%" }}
        />
        <Text
          style={{
            fontFamily: "MontSemi",
            fontSize: 20,
            color: "#1B0B77",
            left: "12%",
            top: "4.7%",
          }}
        >
          Description:
        </Text>
        <Text
          style={{
            fontFamily: "MontRegular",
            fontSize: 18,
            color: "#1B0B77",
            left: "9%",
            top: "5%",
            textAlignVertical: "center",
            width: 350,
          }}
        >
         Campanii pentru a informa și avertiza tinerii elevi și adolescenți de riscurile consumului de substanțe halucinogene.
        </Text>
        <Image
          source={ImagePath.rectangle2}
          style={{ top: "7.5%", left: "3.5%" }}
        />
        <Text
          style={{
            fontFamily: "MontSemi",
            fontSize: 20,
            color: "#1B0B77",
            left: "12%",
            top: "-10%",
          }}
        >
          Photos from past activities:
        </Text>
        <Image
          source={ImagePath.rectangle3}
          style={{ top: "4.3%", left: "3.5%" }}
        />
        <Text
          style={{
            fontFamily: "MontSemi",
            fontSize: 20,
            color: "#1B0B77",
            left: "12%",
            top: "-14%",
          }}
        >
         What are you going to do:
        </Text>
        <Text
          style={{
            fontFamily: "MontRegular",
            fontSize: 18,
            color: "#1B0B77",
            left: "9%",
            top: "-12%",
            textAlignVertical: "center",
            width: 350,
          }}
        >
         Voluntarii Preventis ne ajută să ajungem în fiecare lună la sute de elevi din Cluj și din afara Clujului
        </Text>
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
  name: {
    justifyContent: "center",
    width: 178,
    height: 38,
    top: "250%",
    left: "26%",
  },
  butonas: {
    justifyContent: "center",
    padding: 14,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#ADA0FC",
    top: "18%",
    width: "62%",
    left: "17%",
  },
});
