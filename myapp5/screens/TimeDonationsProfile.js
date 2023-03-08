import React from "react";
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  ScrollView,
  Modal,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import AppNav from "../navigation/AppNavigation";
import { Button } from "react-native-paper";
import { auth } from "../firebase";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "../navigation/AuthNavigation";
import Magazine from "./Magazine";

import ImagePath from "../constants/ImagePath";
import { TouchableHighlight } from "react-native-gesture-handler";
export default function Home({ navigation }) {
 
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });
  if (!fontsLoaded) return null;
  const pressHandler3 = () => {
    navigation.navigate("PastMonth");
  };
  const PressHandler1 = ()=>{navigation.navigate('NGOactivityTIME')};
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
        <Text
          style={{
            fontFamily: "Mont",
            top: "10%",
            fontSize: 24,
            color: "#1B0B77",
            justifyContent: "center",
            textAlign: "center",
          }}
        >SEE WERE YOU CAN BE A VOLUNTEER
        </Text>
        <View style={styles.Container}>
        <Image source={ImagePath.location2} style={styles.img2}></Image>
        <TouchableNativeFeedback   onPress={() => {
      this.setState({ visible: true });
    }}>
            <Text style={styles.text2}>My location</Text>
          </TouchableNativeFeedback>
          <Dialog
    visible={this.state.visible}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
  >
    <DialogContent>
     <Text>Ana</Text>
    </DialogContent>
  </Dialog>
        </View>
        <View style={{top: "17%",}}>
          <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.presenting} style={styles.img1} />
          </TouchableNativeFeedback>
          <Image source={ImagePath.location} style={styles.location} />
        <Text
          style={{
            fontFamily: "Mont",
            top: "-68%",
            left: "48%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >6.08.2023</Text>
        <Image source={ImagePath.calendar} style={styles.calendar}/>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-70%",
            left: "48%",
            fontSize: 14,
            color: "#1B0B77",
          }}
        >Location{" "}
        </Text>
        <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={PressHandler1}>
            <Text
              style={{ fontFamily: "Mont", fontSize: 16, color: "#1B0B77" }}
            >
              INFO
            </Text>
          </TouchableNativeFeedback>
        </View>
        </View>
        <View style={{top: "2%",}}>
          <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.presenting} style={styles.img1} />
          </TouchableNativeFeedback>
          <Image source={ImagePath.location} style={styles.location} />
        <Text
          style={{
            fontFamily: "Mont",
            top: "-68%",
            left: "48%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >6.08.2023</Text>
        <Image source={ImagePath.calendar} style={styles.calendar}/>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-70%",
            left: "48%",
            fontSize: 14,
            color: "#1B0B77",
          }}
        >Location{" "}
        </Text>
        <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={PressHandler1}>
            <Text
              style={{ fontFamily: "Mont", fontSize: 16, color: "#1B0B77" }}>
              INFO
            </Text>
          </TouchableNativeFeedback>
        </View>
        </View>
        <View style={{top: "-13%",}}>
          <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.presenting} style={styles.img1} />
          </TouchableNativeFeedback>
          <Image source={ImagePath.location} style={styles.location} />
        <Text
          style={{
            fontFamily: "Mont",
            top: "-68%",
            left: "48%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >6.08.2023</Text>
        <Image source={ImagePath.calendar} style={styles.calendar}/>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-70%",
            left: "48%",
            fontSize: 14,
            color: "#1B0B77",
          }}
        >Location{" "}
        </Text>
        <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={PressHandler1}>
            <Text
              style={{ fontFamily: "Mont", fontSize: 16, color: "#1B0B77" }}
            >
              INFO
            </Text>
          </TouchableNativeFeedback>
        </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}        
const styles = StyleSheet.create({
  containerm: {
    backgroundColor: '#D7D2F2',
    height: 156,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 222,
    alignItems: 'center'
  },
  Container: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 210,
    height: 55,
    top: 130,
    alignSelf: 'center'
  },
  
  text1: {
    color: '#1B0B77',
    fontSize: 22,
    fontWeight: 'bold'
  },
  text2: {
    color: '#1B0B77',
    fontSize: 22,
    fontWeight: 'normal',
    top: -12,
    left: 10
  },
  text3: {
    color: '#1B0B77',
    fontSize: 24,
    fontWeight: '500',
    top: 11,
    alignSelf: 'center',
    textAlign: 'center'
    
  },
  img2: {
    top: 15,
    left: -80
  },
  location: {
    left: "41%",
    top: "-54%",
    width: 23,
    height: 23,
  },
  calendar: {
    left: "41%",
    top: "-73%",
  },
  butonas: {
    padding: 2,
    alignItems: "center",
    borderRadius: 27,
    backgroundColor: "#ADA0FC",
    top: "-66%",
    width: "25%",
    left:'65%'
  },
  drept1: {
    justifyContent: "center",
    width: 356,
    height: 150,
    alignSelf:'center'
  },
  img1: {
   top: "-38%",
    left: "10.5%",
    width: 107,
    height: 83,
  },
  logo1: {
    left: "11.5%",
    top: "-41%",
    width: 91,
    height: 15,
  },
});
