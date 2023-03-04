import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, ScrollView, TextInput, SafeAreaView } from "react-native";
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
        <SafeAreaView>
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
            fontSize: 18,
            color: "#1B0B77",
            left: 10,
            top: 10,
            width: 350,
          }}>On going activities:</Text>
        </View>
        <View style={styles.container4}>
          <Text style={{
            fontFamily: "Mont",
            fontSize: 18,
            color: "#1B0B77",
            left: 10,
            top: 10,
            width: 350,
          }}>descriere bla bla</Text>
          <Image source={ImagePath.presenting} style={styles.img3} />
          <Image source={ImagePath.logo2} style={styles.logo2} />
        </View>


        
        </SafeAreaView>
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

  container1: {
    backgroundColor: '#FFFFFF',
    height: 180,
    width: 364,

    alignSelf: 'center',
    borderRadius: 21,
    top: 150,
   
  },
  container2: {
    backgroundColor: '#FFFFFF',
    height: 155,
    width: 364,
    alignSelf: 'center',
    borderRadius: 21,
    top: 180,
   
  },
  container3: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 364,

    alignSelf: 'center',
    borderRadius: 21,
    top: 200,
    

  },
  container4: {
    backgroundColor: '#FFFFFF',
    height: 180,
    width: 364,

    alignSelf: 'center',
    borderRadius: 21,
    top: 220,
    
  },
  
  logo1: {
    alignSelf: 'center',
    top: 79,
  },
  logo2: {
    left: 10,
    top:10,
    width: 91,
    height: 15,
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
