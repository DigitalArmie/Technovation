import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  ScrollView,
  Image, 
  TextInput
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import ImagePath from "../constants/ImagePath";

export default function Home({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  if (!fontsLoaded) return null;
  const pressHandler = () =>{
    navigation.navigate("Congratulations");
  }
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
      <Image source={ImagePath.logo2} style={{
        top: 126,
        alignSelf: 'center'
      }}/>
      <View style={styles.container1}>
        <Text style={styles.text1}>Set an amount of money:</Text>
        <Image 
        style={{top: 60, alignSelf: 'center'}}
        source={ImagePath.linemoney} 
        />
        <TextInput            
          placeholder="Type here"
          onChangeText={(text) => (text)}
          style={{alignSelf:'center', fontFamily: "MontLight",fontSize: 20,top:'6%' }}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>Donation sold at the moment:</Text>
        <Image source={ImagePath.moneybagg} style={{left:-120, top:30}}/>
        <Image 
        style={{top: 10, alignSelf: 'center'}}
        source={ImagePath.line2} 
        />
        <Text style={{alignSelf:'center', fontWeight: "500",fontSize: 20,top:-35, color:'#1B0B77'}}>500 ron</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text1}>Sold after donation:</Text>
        <Image source={ImagePath.moneybagg} style={{left:-120, top:30}}/>
        <Image 
        style={{top: 10, alignSelf: 'center'}}
        source={ImagePath.line2} 
        />
        <Text style={{alignSelf:'center', fontWeight: "500",fontSize: 20,top:-35, color:'#1B0B77'}}>200 ron</Text>
      </View>
      <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={pressHandler}>
            <Text
              style={{ fontFamily: "MontSemi", fontSize: 18, color: "#1B0B77" }}
            >
              DONATE
            </Text>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#FFFFFF',
    height: 136,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 262,
    alignItems: 'center'
  },
  container2: {
    backgroundColor: '#FFFFFF',
    height: 136,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 420,
    alignItems: 'center'
  },
  container3: {
    backgroundColor: '#FFFFFF',
    height: 136,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 580,
    alignItems: 'center'
  },
  text1: {
    color: '#1B0B77',
    fontSize: 22,
    fontWeight: '500',
    top: 15
  },
  butonas: {
    justifyContent: "center",
    padding: 14,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#ADA0FC",
    top: "84%",
    width: "42%",
    alignSelf: 'center'
  },
});
