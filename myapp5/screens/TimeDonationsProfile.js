import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  ScrollView,
  Modal,
  TouchableOpacity,
  Pressable,
  Alert,
  TextInput
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
import PopupDialog from 'react-native-popup-dialog';
import ImagePath from "../constants/ImagePath";
import { TouchableHighlight } from "react-native-gesture-handler";
import Svg, { G, Path, Rect, Defs } from "react-native-svg"
export default function Timedonat({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [Email, setEmail] = useState("");
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontSemi: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
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
        <Svg
    width={33}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    left={-73}
    top={15}
    
  >
    <Path
      d="M16.5 2.417c4.551 0 8.25 3.214 8.25 7.19 0 5.388-8.25 13.351-8.25 13.351S8.25 14.995 8.25 9.606c0-3.975 3.699-7.19 8.25-7.19Zm0 4.833c-.73 0-1.429.255-1.944.708-.516.453-.806 1.068-.806 1.709 0 .64.29 1.255.806 1.709.515.453 1.215.707 1.944.707.73 0 1.429-.254 1.945-.707.515-.454.805-1.068.805-1.71 0-.64-.29-1.255-.805-1.708-.516-.453-1.216-.708-1.945-.708Zm11 15.708c0 2.67-4.922 4.834-11 4.834s-11-2.163-11-4.834c0-1.558 1.678-2.948 4.276-3.83l.88 1.1c-1.485.543-2.406 1.292-2.406 2.126 0 1.668 3.699 3.021 8.25 3.021s8.25-1.353 8.25-3.02c0-.835-.921-1.584-2.406-2.128l.88-1.1c2.599.883 4.276 2.273 4.276 3.831Z"
      fill="#1B0B77"
    />
  </Svg>
  <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          
          setModalVisible(!modalVisible);
        }}>
        <View >
          <View >
          <Svg
    width={370}
    height={151}
    top={250}
    alignSelf="center"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <G filter="url(#a)">
      <Path
        d="M4 21C4 9.402 13.402 0 25 0h320c11.598 0 21 9.402 21 21v101c0 11.598-9.402 21-21 21H25c-11.598 0-21-9.402-21-21V21Z"
        fill="#7C66FB"
      />
    </G>
    <G filter="url(#b)">
      <Rect
        x={14}
        y={10}
        width={337}
        height={121}
        rx={21}
        fill="#D7D2F2"
        fillOpacity={0.9}
        shapeRendering="crispEdges"
      />
    </G>
    <Defs></Defs>
  </Svg> 
            
          </View>
          <Text style={{fontFamily:'MontSemi', fontSize:22, top:'46%', alignSelf:"center", color:'#1B0B77'}}>Where do you want to volunteer?</Text>
          <TextInput
            placeholder="Enter here:     "
            value={Email}
            onChangeText={(text) => setEmail(text)}
            style={{top:'46%', alignSelf:"center", fontFamily:'MontRegular', fontSize:20}}
          />
          <Svg
    width={304}
    height={14}
    top={'47%'}
    alignSelf={"center"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={1.5} d="M0 3.25h287" />
    </G>
    <Defs></Defs>
  </Svg>
        </View>
      </Modal>
      <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
            <Text style={styles.text2}>My location</Text>
          </TouchableNativeFeedback>
    </View>
        </View>
        <View style={{top: "17%",}}>
        
        <Svg
    width={376}
    height={154}
    alignSelf={"center"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G filter="url(#a)">
      <Path
        d="M10 22c0-11.598 9.402-21 21-21h314c11.598 0 21 9.402 21 21v92c0 11.598-9.402 21-21 21H31c-11.598 0-21-9.402-21-21V22Z"
        fill="#fff"
      />
    </G>
    <Defs></Defs>
  </Svg>
  
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.presenting} style={styles.img1} />
          </TouchableNativeFeedback>
          <Svg
    width={28}
    height={20}
    top={'-53%'}
    left={'41%'}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M14 1.667c3.862 0 7 2.216 7 4.958 0 3.717-7 9.208-7 9.208s-7-5.491-7-9.208c0-2.742 3.138-4.958 7-4.958ZM14 5c-.619 0-1.212.176-1.65.488-.438.313-.683.737-.683 1.179 0 .442.245.866.683 1.178.438.313 1.031.488 1.65.488s1.212-.175 1.65-.488c.437-.312.683-.736.683-1.178 0-.442-.245-.866-.683-1.179C15.212 5.176 14.619 5 14 5Zm9.333 10.833c0 1.842-4.176 3.334-9.333 3.334s-9.333-1.492-9.333-3.334c0-1.075 1.423-2.033 3.628-2.641l.747.758C7.782 14.325 7 14.842 7 15.417c0 1.15 3.138 2.083 7 2.083s7-.933 7-2.083c0-.575-.782-1.092-2.042-1.467l.747-.758c2.205.608 3.628 1.566 3.628 2.641Z"
      fill="#1B0B77"
    />
  </Svg>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-68%",
            left: "48%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >6.08.2023</Text>
         <Svg
    width={24}
    height={24}
    top={'-74%'}
    left={'41%'}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
 
  >
    <Path
      d="M12 14a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 13c0-.283.096-.521.288-.713A.967.967 0 0 1 12 12a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 13c0 .283-.096.52-.287.712A.968.968 0 0 1 12 14Zm-4 0a.968.968 0 0 1-.713-.288A.967.967 0 0 1 7 13a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 12a.97.97 0 0 1 .713.287A.97.97 0 0 1 9 13c0 .283-.096.52-.287.712A.968.968 0 0 1 8 14Zm8 0a.965.965 0 0 1-.712-.288A.965.965 0 0 1 15 13c0-.283.096-.521.288-.713A.967.967 0 0 1 16 12c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 16 14Zm-4 4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 17c0-.283.096-.52.288-.712A.965.965 0 0 1 12 16c.283 0 .521.096.713.288A.967.967 0 0 1 13 17c0 .283-.096.52-.287.712A.968.968 0 0 1 12 18Zm-4 0a.968.968 0 0 1-.713-.288A.967.967 0 0 1 7 17c0-.283.096-.52.287-.712A.968.968 0 0 1 8 16c.283 0 .521.096.713.288A.967.967 0 0 1 9 17c0 .283-.096.52-.287.712A.968.968 0 0 1 8 18Zm8 0a.965.965 0 0 1-.712-.288A.965.965 0 0 1 15 17c0-.283.096-.52.288-.712A.965.965 0 0 1 16 16c.283 0 .52.096.712.288A.965.965 0 0 1 17 17c0 .283-.096.52-.288.712A.965.965 0 0 1 16 18ZM5 22c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 20V6c0-.55.196-1.02.587-1.412A1.927 1.927 0 0 1 5 4h1V3a.97.97 0 0 1 .287-.713A.97.97 0 0 1 7 2a.97.97 0 0 1 .713.287A.97.97 0 0 1 8 3v1h8V3c0-.283.096-.521.288-.713A.967.967 0 0 1 17 2c.283 0 .52.096.712.287.192.192.288.43.288.713v1h1c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 22H5Zm0-2h14V10H5v10Z"
      fill="#1B0B77"
    />
  </Svg>
  
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
        <View style={{top:"-6%"}}>
          
        <Svg
    width={376}
    height={154}
    alignSelf={"center"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G filter="url(#a)">
      <Path
        d="M10 22c0-11.598 9.402-21 21-21h314c11.598 0 21 9.402 21 21v92c0 11.598-9.402 21-21 21H31c-11.598 0-21-9.402-21-21V22Z"
        fill="#fff"
      />
    </G>
    <Defs></Defs>
  </Svg>
  
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.presenting} style={styles.img1} />
          </TouchableNativeFeedback>
          <Svg
    width={28}
    height={20}
    top={'-53%'}
    left={'41%'}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M14 1.667c3.862 0 7 2.216 7 4.958 0 3.717-7 9.208-7 9.208s-7-5.491-7-9.208c0-2.742 3.138-4.958 7-4.958ZM14 5c-.619 0-1.212.176-1.65.488-.438.313-.683.737-.683 1.179 0 .442.245.866.683 1.178.438.313 1.031.488 1.65.488s1.212-.175 1.65-.488c.437-.312.683-.736.683-1.178 0-.442-.245-.866-.683-1.179C15.212 5.176 14.619 5 14 5Zm9.333 10.833c0 1.842-4.176 3.334-9.333 3.334s-9.333-1.492-9.333-3.334c0-1.075 1.423-2.033 3.628-2.641l.747.758C7.782 14.325 7 14.842 7 15.417c0 1.15 3.138 2.083 7 2.083s7-.933 7-2.083c0-.575-.782-1.092-2.042-1.467l.747-.758c2.205.608 3.628 1.566 3.628 2.641Z"
      fill="#1B0B77"
    />
  </Svg>
        <Text
          style={{
            fontFamily: "Mont",
            top: "-68%",
            left: "48%",
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >6.08.2023</Text>
         <Svg
    width={24}
    height={24}
    top={'-74%'}
    left={'41%'}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
 
  >
    <Path
      d="M12 14a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 13c0-.283.096-.521.288-.713A.967.967 0 0 1 12 12a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 13c0 .283-.096.52-.287.712A.968.968 0 0 1 12 14Zm-4 0a.968.968 0 0 1-.713-.288A.967.967 0 0 1 7 13a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 12a.97.97 0 0 1 .713.287A.97.97 0 0 1 9 13c0 .283-.096.52-.287.712A.968.968 0 0 1 8 14Zm8 0a.965.965 0 0 1-.712-.288A.965.965 0 0 1 15 13c0-.283.096-.521.288-.713A.967.967 0 0 1 16 12c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 16 14Zm-4 4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 17c0-.283.096-.52.288-.712A.965.965 0 0 1 12 16c.283 0 .521.096.713.288A.967.967 0 0 1 13 17c0 .283-.096.52-.287.712A.968.968 0 0 1 12 18Zm-4 0a.968.968 0 0 1-.713-.288A.967.967 0 0 1 7 17c0-.283.096-.52.287-.712A.968.968 0 0 1 8 16c.283 0 .521.096.713.288A.967.967 0 0 1 9 17c0 .283-.096.52-.287.712A.968.968 0 0 1 8 18Zm8 0a.965.965 0 0 1-.712-.288A.965.965 0 0 1 15 17c0-.283.096-.52.288-.712A.965.965 0 0 1 16 16c.283 0 .52.096.712.288A.965.965 0 0 1 17 17c0 .283-.096.52-.288.712A.965.965 0 0 1 16 18ZM5 22c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 20V6c0-.55.196-1.02.587-1.412A1.927 1.927 0 0 1 5 4h1V3a.97.97 0 0 1 .287-.713A.97.97 0 0 1 7 2a.97.97 0 0 1 .713.287A.97.97 0 0 1 8 3v1h8V3c0-.283.096-.521.288-.713A.967.967 0 0 1 17 2c.283 0 .52.096.712.287.192.192.288.43.288.713v1h1c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 22H5Zm0-2h14V10H5v10Z"
      fill="#1B0B77"
    />
  </Svg>
  
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
    borderRadius: 25,
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
    top: -14,
    left: 15,
    fontFamily: "MontRegular"
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
