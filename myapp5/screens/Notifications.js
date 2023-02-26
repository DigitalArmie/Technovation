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
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Image source={require('../assets/Images/clopotel.png')} style={styles.notifi} />
          <Text
            style={{
              fontFamily: "Montt",
              top: 28,
              left: 53,
              fontSize: 24,
              color: "#1B0B77",
            }}
          >
            Notifications:
          </Text>
        </View>


        <View>
          <Image source={ImagePath.dreptunghi21} style={styles.drept1} />
          <Text
            style={{
              fontFamily: "Montt",
              top: -140,
              left: 41,
              fontSize: 20,
              color: "#1B0B77",
            }}
          >
            Two more weeks until:
          </Text>
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <Image source={require('../assets/Images/calendar.png')} style={styles.cal1} />
          <Text style={{
            fontFamily: "Mont",
            top: -144,
            left: 178,
            fontSize: 15,
            color: "#1B0B77",
          }}>16.08.2023</Text>
          <Image source={ImagePath.location} style={styles.location1} />
          <Text style={{
            fontFamily: "Mont",
            top: -157,
            left: 178,
            fontSize: 15,
            color: "#1B0B77",
          }}>Casa de Cultura  </Text>
          <Image source={ImagePath.presenting} style={styles.img1} />

          <View style={styles.butonas1}>
            <TouchableNativeFeedback onPress={pressHandler1}>
              <Text style={{
                fontFamily: "Montt",
                fontSize: 15,
                color: "#1B0B77",
              }}
              >
                INFO</Text>
            </TouchableNativeFeedback>
          </View>
        </View>



        <View>
          <Image source={ImagePath.dreptunghi21} style={styles.drept3} />
          <Text
            style={{
              
              fontFamily: "Montt",
              top: -390,
              left: 41,
              fontSize: 20,
              color: "#1B0B77",
              width:315,
            }}
          >
            It’ time for setting your 
            monthly donation of time and money:
          </Text>
          <Text
            style={{
              
              fontFamily: "Mont",
              top: -380,
              left: 80,
              fontSize: 18,
              color: "#1B0B77",
              width:250,
            }}
          >
            Set your goals for this month
          </Text>

          <Image source={require('../assets/Images/tinta.png')} style={styles.tintuta} />
          <View style={styles.butonas2}>
            <TouchableNativeFeedback onPress={pressHandler3}>
            <Text style={{
                fontFamily: "Montt",
                fontSize: 15,
                color: "#1B0B77",
              }}
              >
                MY GOALS
              </Text>
            </TouchableNativeFeedback>
          </View>
        </View>


        <View>
          <Image source={ImagePath.dreptunghi21} style={styles.drept4} />
          <Text
            style={{
              fontFamily: "Montt",
              top: -580,
              left: 41,
              fontSize: 20,
              color: "#1B0B77",
              
            }}
          >
            Two more weeks until:
          </Text>
          <Image source={ImagePath.logo2} style={styles.logo3} />
          <Image source={ImagePath.presenting} style={styles.img3} />
          
          <Image source={require('../assets/Images/calendar.png')} style={styles.cal3} />
          <Text style={{
            fontFamily: "Mont",
            top: -663,
            left: 178,
            fontSize: 15,
            color: "#1B0B77",
          }}>16.08.2023</Text>
          <Image source={ImagePath.location} style={styles.location3} />
          <Text style={{
            fontFamily: "Mont",
            top: -676,
            left: 178,
            fontSize: 15,
            color: "#1B0B77",
          }}>Casa de Cultura  </Text>
          <View style={styles.butonas3}>
            <TouchableNativeFeedback onPress={pressHandler1}>
            <Text style={{
                fontFamily: "Montt",
                fontSize: 15,
                color: "#1B0B77",
              }}
              >
                INFO</Text>
            </TouchableNativeFeedback>
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
  cal1: {
    top: -120,
    left: 151,

  },
  location1: {
    top: -135,
    left: 151,
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
  tintuta: {
    top: -420,
    left: 45,

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
  cal3: {
    top: -640,
    left: 151,

  },
  location3: {
    top: -655,
    left: 151,
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
