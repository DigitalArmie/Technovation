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

export default function Patmonthe({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  if (!fontsLoaded) return null;
  const pressHandler3 = () => {
    navigation.navigate("NGOpresentation");
  };
  const pressHandler2 = () => {
    navigation.navigate("Investmoney");
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
            <Image source={ImagePath.certlogo2} style={styles.name} />
          </TouchableNativeFeedback>
        </View>
        <Image
          source={ImagePath.rectmare}
          style={{ top: "18%", left: "3.5%" }}
        />
        <Text
          style={{
            fontFamily: "MontSemi",
            fontSize: 20,
            color: "#1B0B77",
            left: "12%",
            top: "-30%",
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
            top: "-27.5%",
            textAlignVertical: "center",
            width: 350,
            justifyContent:"flex-end"
          }}
        >
          Copiii de la centrul de plasament de la Jibou, bineînțeles, care, începând de luni, vor merge la cursuri echipați cu toate cele necesare și care ne-au promis că și anul acesta vor învăța foarte bine și vor lua cu toții premiul I.
44 de ghiozdane personalizate au fost pregătite pentru tot atâția copii fără posibilități materiale, dar cu cel puțin la fel de multe aspirații și vise precum noi toți.
Suntem bucuroși că le putem fi alături pe calea frumoasă și importantă a educației și le mulțumim prietenilor noștri care au făcut posibilă această acțiune: angajații AROBS, voluntarii și donatorii CERT cu sprijinul cărora ne-am asigurat că toți copiii sunt pregătiți cum se cuvine pentru noul an școlar.
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
    
    top: "100%",
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
