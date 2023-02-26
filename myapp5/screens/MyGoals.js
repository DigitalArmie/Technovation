import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import ImagePath from "../constants/ImagePath";

export default function MyGoals({ navigation }) {
  const [Money, setMoney] = useState("");
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontSemi: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  const pressHandler2 = () => {
    navigation.navigate("Congratulations");
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
      <Image source={ImagePath.goal} style={styles.logo1} />
      <Text
          style={{
            fontFamily: "Mont",
            top: '6.3%',
            left: "19%",
            fontSize: 20,
            color: "#1B0B77",
          }}
        >
          My goals:
        </Text>
        <Text
          style={{
            fontFamily: "Mont",
            top: "10%",
            fontSize: 22,
            color: "#1B0B77",
            justifyContent: "center",
            textAlign: "center",
            
          }}
        >
          LET’S PLAN HOW YOU ARE GOING TO HELP THE WORLD THIS MONTH:
        </Text>
        <View style={{top:'-10%'}}>
        <Image source={ImagePath.mygoalrec} style={{top:'68%', alignSelf:'center',}} />
        <Text
          style={{
            fontFamily: "MontLight",
            top: '18%',
            left: "7%",
            fontSize: 20,
            color: "#1B0B77",
            justifyContent: "center",
            textAlign: "center",
            width: 350,
          }}
        >
          How much
          <Text style={{fontFamily: "MontBold",}}> money </Text>
          do you want to invest:
        </Text> 
        <Image 
        style={{top:'21%',left:'12%'}}
        source={require('../assets/Images/money.png')} 
        />
        <Image 
        style={{left:'10.5%', top:'20%'}}
        source={ImagePath.linemoney} 
        />
        <TextInput

            
            placeholder="Type here"
            
            onChangeText={(text) => setMoney(text)}
            style={{left:'25%', fontFamily: "MontLight",fontSize: 20,top:'6%' }}

          />
        </View>
        <View style={{top:'-27%'}}>
        <Image source={ImagePath.mygoalrec} style={{top:'68%', alignSelf:'center',}} />
        <Text
          style={{
            fontFamily: "MontLight",
            top: '18%',
            left: "7%",
            fontSize: 20,
            color: "#1B0B77",
            justifyContent: "center",
            textAlign: "center",
            width: 350,
          }}
        >
          How many
          <Text style={{fontFamily: "MontBold",}}> hours </Text>
          do you want to invest:
        </Text> 
        <Image 
        style={{top:'21%',left:'12%'}}
        source={require('../assets/Images/timeicon.png')} 
        />
        <Image 
        style={{left:'10.5%', top:'20%'}}
        source={ImagePath.linemoney} 
        />
        <TextInput

            
            placeholder="Type here"
            onChangeText={(text) => setMoney(text)}
            style={{left:'25%', fontFamily: "MontLight",fontSize: 20,top:'6%' }}

          />
        </View>
        <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={pressHandler2}>
            <Text
              style={{ fontFamily: "Mont", fontSize: 20, color: "#1B0B77" }}
            >
              SAVE
            </Text>
          </TouchableNativeFeedback>
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
  logo1:{
    top:'10%',
    left:'10%',
    width:30,
    height:30,

  },
  imgline:{
    left:'20%',
    
  },
  butonas: {
    //position:'absolute',
    //flex:0.1,
    
    padding: 12,
    alignItems: "center",
    borderRadius: 27,
    backgroundColor: "#ADA0FC",
   top: "-16%",
    width: "35%",
    alignSelf:'center',
   
  },
});
