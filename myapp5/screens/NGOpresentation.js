import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import ImagePath from "../constants/ImagePath";
import Svg, { Path } from "react-native-svg";
export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Montt: require("../assets/fonts/Montserrat-Bold.ttf"),

  });
  if (!fontsLoaded) return null;
  const pressHandler3 = () => {
    navigation.navigate("PastMonth");
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
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>

        <Image source={require('../assets/Images/logomare.png')} style={styles.logo} />

        <View>
          <Image source={ImagePath.dreptunghi21} style={styles.drept1} />
          <Text style={{
            fontFamily: "Montt",
            fontSize: 20,
            color: "#1B0B77",
            left: 29,
            top: -70,
          }}
          >
            Descriere event:
          </Text>
          <Text style={{
            fontFamily: "Mont",
            fontSize: 18,
            color: "#1B0B77",
            left: 29,
            top: -70,
          }}
          >
            event pentru
          </Text>
        </View>

        <View>
          <Image source={require('../assets/Images/dreptunghi.png')} style={styles.drept2} />
          <Text style={{
            fontFamily: "Montt",
            fontSize: 20,
            color: "#1B0B77",
            left: 29,
            top: -100,
          }}
          >
            Photos:
          </Text>
          <Text style={{
            fontFamily: "Mont",
            fontSize: 18,
            color: "#1B0B77",
            left: 29,
            top: -100,
          }}
          >
            poze cu cateva din activitatile lor anterioare
          </Text>
        </View>

        <View>
          <Image source={require('../assets/Images/dreptunghi2.png')} style={styles.set} />
          <Text style={{
            fontFamily: "Montt",
            fontSize: 20,
            color: "#1B0B77",
            left: 29,
            top: -60,
          }}
          >
            Ongoing activities:
          </Text>
        </View>
        <View >
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept4} />
          </TouchableNativeFeedback>
          <Image source={ImagePath.logo1} style={{ left: 35, top: -160, }} />
          <Image source={ImagePath.presenting} style={{ left: 30, top: -150, }} />

          <Text
            style={{
              fontFamily: "Montt",
              top: -220,
              left: 150,
              fontSize: 14,
              color: "#1B0B77",
            }}
          >
            Descrierea evenimentului{" "}
          </Text>

        </View>
        <View >
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept5} />
          </TouchableNativeFeedback>
          <Image source={ImagePath.logo1} style={{ left: 35, top: -270, }} />
          <Image source={ImagePath.presenting} style={{ left: 30, top: -260, }} />

          <Text
            style={{
              fontFamily: "Montt",
              top: -330,
              left: 150,
              fontSize: 14,
              color: "#1B0B77",
            }}
          >
            Descrierea evenimentului{" "}
          </Text>

        </View>

        <View>
          <Image source={require('../assets/Images/dreptunghi2.png')} style={{ top: -240,alignSelf: 'center',
    justifyContent: "center", }} />
          <Text style={{
            fontFamily: "Montt",
            fontSize: 20,
            color: "#1B0B77",
            left: 29,
            top: -300,
          }}
          >
            Past activities:
          </Text>
        </View>
        <View >
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept6} />
          </TouchableNativeFeedback>
          <Image source={ImagePath.logo1} style={{ left: 35, top: -400, }} />
          <Image source={ImagePath.presenting} style={{ left: 30, top: -390, }} />

          <Text
            style={{
              fontFamily: "Montt",
              top: -450,
              left: 150,
              fontSize: 14,
              color: "#1B0B77",
            }}
          >
            Descrierea evenimentului{" "}
          </Text>

        </View>
        <View >
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.dreptunghi1} style={styles.drept7} />
          </TouchableNativeFeedback>
          <Image source={ImagePath.logo1} style={{ left: 35, top: -510, }} />
          <Image source={ImagePath.presenting} style={{ left: 30, top: -500, }} />

          <Text
            style={{
              fontFamily: "Montt",
              top: -560,
              left: 150,
              fontSize: 14,
              color: "#1B0B77",
            }}
          >
            Descrierea evenimentului{" "}
          </Text>

        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  hello: {
    justifyContent: "center",
    fontSize: 36,
    left: "25%",
    top: "80%",
    color: "#1B0B77",
    fontFamily: "Mont",
  },
  logo: {
    alignSelf: 'center',
    top: 79,
  },
  drept1: {
    alignSelf: 'center',
    justifyContent: "center",
    top: 120,
  },
  drept2: {
    alignSelf: 'center',
    justifyContent: "center",
    top: 70,
  },
  set: {
    alignSelf: 'center',
    justifyContent: "center",
    top: 0,

  },
  drept4: {
    alignSelf: 'center',
    justifyContent: "center",
    top: -20,
  },
  drept5: {
    alignSelf: 'center',
    justifyContent: "center",
    top: -130,
  },
  drept6: {
    alignSelf: 'center',
    justifyContent: "center",
    top: -260,
  },
  drept7: {
    alignSelf: 'center',
    justifyContent: "center",
    top: -370,
  },
},
);
