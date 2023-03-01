import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import ImagePath from "../constants/ImagePath";

export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Montt: require("../assets/fonts/Montserrat-Bold.ttf"),

  });
  if (!fontsLoaded) return null;
  const pressHandler1 = () => {
    navigation.navigate("NGOpresentation");
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
        <Image source={require('../assets/Images/logomare.png')} style={styles.logo1} />
        <View style={styles.container1}>
          <Text style={{
            fontFamily: "Montt",
            fontSize: 20,
            color: "#1B0B77",
            left: 10,
            top: 0,
            width: 350,

          }}
          >
            Description:
          </Text>
          <Text style={{
            fontFamily: "Mont",
            fontSize: 18,
            color: "#1B0B77",
            left: 10,
            top: 0,
            width: 350,
          }}
          >
            We are doing a talent show for disabled children.
            We need 10 volunteers to help with the assembly of the set up and with greeting people.
          </Text>
        </View>
        <View style={styles.container2}>
          <Text style={{
            fontFamily: "Montt",
            fontSize: 20,
            color: "#1B0B77",
            left: 10,
            top: 0,
            width: 350,

          }}
          >
            Photos:
          </Text>
          <Text style={{
            fontFamily: "Mont",
            fontSize: 18,
            color: "#1B0B77",
            left: 10,
            top: 10,
            width: 350,
          }}
          >
            poze cu cateva din activitatile lor recente </Text>
        </View>
        <View style={styles.container3}>
          <Text style={{
            fontFamily: "Montt",
            fontSize: 20,
            color: "#1B0B77",
            left: 10,
            top: 0,
            width: 350,

          }}
          >
            Photos:
          </Text>
          <Text style={{
            fontFamily: "Mont",
            fontSize: 18,
            color: "#1B0B77",
            left: 10,
            top: 10,
            width: 350,
          }}
          >
            poze cu cateva din activitatile lor recente </Text>
        </View>
        <View style={styles.container3}>
          <Text style={{
            fontFamily: "Montt",
            fontSize: 20,
            color: "#1B0B77",
            left: 10,

            width: 350,

          }}
          >
            Photos:
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
    position: "absolute",
    left: "25%",
    top: "80%",
    color: "#1B0B77",
    fontFamily: "Mont",
  },

  container1: {
    backgroundColor: '#FFFFFF',
    height: 180,
    width: 364,

    alignSelf: 'center',
    borderRadius: 21,
    top: 150,
    alignItems: 'center'
  },
  container2: {
    backgroundColor: '#FFFFFF',
    height: 155,
    width: 364,

    alignSelf: 'center',
    borderRadius: 21,
    top: 350,
    alignItems: 'center'
  },
  container3: {
    backgroundColor: '#FFFFFF',
    height: 200,
    width: 364,

    alignSelf: 'center',
    borderRadius: 21,
    top: 550,


  },
  logo1: {
    alignSelf: 'center',
    top: 79,
  },
  butonas: {
    //position:'absolute',
    //flex:0.1,
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
    width: 253,
    height: 71,
    top: 100,
  },

},
);
