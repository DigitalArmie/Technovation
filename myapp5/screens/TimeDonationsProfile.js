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
  const PressHandler1 = () => { navigation.navigate('NGOactivityTIME') };

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
                <Text style={{ fontFamily: 'MontSemi', fontSize: 22, top: '46%', alignSelf: "center", color: '#1B0B77' }}>Where do you want to volunteer?</Text>
                <TextInput
                  placeholder="Enter here:     "
                  value={Email}
                  onChangeText={(text) => setEmail(text)}
                  style={{ top: '46%', alignSelf: "center", fontFamily: 'MontRegular', fontSize: 20 }}
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
        <View style={{ top: '20%', alignSelf: 'center' }}>
            <TouchableNativeFeedback onPress={pressHandler3}>
              <Image source={ImagePath.dreptunghi1} style={styles.drept1} />
            </TouchableNativeFeedback>

            <Image source={ImagePath.preventisimg} style={{top:'-28.5%', left:'6%'}} />
            <Image source={ImagePath.preventislogo} style={{top:'-56.5%', left:'6%'}} />
            <Text
              style={{
                fontFamily: "Mont",
                top: "-63.5%",
                left: "37%",
                fontSize: 16,
                color: "#1B0B77",
                width:220
              }}
            >
             Prevenire împotriva dependenței{" "}
            </Text>
            <Text
              style={{
                fontFamily: "Mont",
                top: "-63.5%",
                left: "35%",
                fontSize: 14,
                color: "#1B0B77",
                width:220
              }}
            >
              Voluntarii Preventis ne ajută să ajungem la elevi din Cluj{" "}
            </Text>
            <View style={styles.butonas}>
            <TouchableNativeFeedback onPress={PressHandler1}>
              <Text
                style={{ fontFamily: "Mont", fontSize: 14, color: "#1B0B77" }}
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
    top: "-67%",
    width: 100,
    left: '58%'
  },
  drept1: {
    justifyContent: "center",
    width: 356,
    height: 150,
    alignSelf: 'center'
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
