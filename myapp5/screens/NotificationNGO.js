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

export default function Notifu({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Montt: require("../assets/fonts/Montserrat-Bold.ttf"),

  });

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

          <Text
            style={{
              fontFamily: "Montt",
              top: 60,
              left: 53,
              fontSize: 24,
              color: "#1B0B77",
            }}
          >
            Notifications:
          </Text>
          <Svg
            width={30}
            height={27}
            left={19}
            top={30}

            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="M15.023 27a3.216 3.216 0 0 1-2.126-.794c-.565-.505-.886-1.19-.894-1.906h6.009c.004.36-.072.719-.224 1.053a2.81 2.81 0 0 1-.868 1.03c-.376.278-.82.47-1.295.563h-.07c-.175.033-.353.05-.532.054Zm12.018-4.05H3.005v-2.7l3.004-1.35v-7.425a9.992 9.992 0 0 1 1.388-5.481 6.558 6.558 0 0 1 1.946-1.97 7.394 7.394 0 0 1 2.675-1.081V0h6.009v2.943c3.874.829 6.01 3.858 6.01 8.532V18.9l3.004 1.35v2.7ZM30 10.8h-3.005a10.789 10.789 0 0 0-1.441-4.947c-.88-1.533-2.127-2.873-3.651-3.922L24.036 0c1.797 1.256 3.249 2.866 4.244 4.706A14.308 14.308 0 0 1 30 10.8Zm-26.995 0H0a14.3 14.3 0 0 1 1.72-6.094C2.715 2.866 4.167 1.256 5.964 0l2.133 1.93c-1.524 1.05-2.77 2.39-3.65 3.923A10.786 10.786 0 0 0 3.004 10.8Z"
              fill="#1B0B77"
            />
          </Svg>
        </View>


        <View>
          <Image source={ImagePath.dreptunghi21} style={styles.drept1} />
          <Text
            style={{
              fontFamily: "Montt",
              top: -120,
              left: 31,
              fontSize: 20,
              color: "#1B0B77",
            }}
          >
            10 people have joined your volunteer team
          </Text>

          <Svg
            //scris
            width={27}
            height={27}
            top={-110}
            left={31}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="m11.25 22.5 4.5-4.5h9v4.5h-13.5Zm9.337-13.584-4.78-4.725 1.574-1.575a2.161 2.161 0 0 1 1.59-.647 2.16 2.16 0 0 1 1.588.647l1.575 1.575c.432.43.657.951.675 1.561a2.032 2.032 0 0 1-.618 1.56l-1.604 1.604Zm-1.63 1.659L7.03 22.5H2.25v-4.781L14.175 5.794l4.781 4.781Z"
              fill="#1B0B77"
            />
          </Svg>

          <Text style={{
            fontFamily: "Mont",
            top: -135,
            left: 61,
            fontSize: 15,
            color: "#1B0B77",
          }}>CERT event </Text>

          <Svg
            ///calendar
            width={27}
            height={27}
            top={-120}
            left={31}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="M13.5 15.75c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.802.323.215.216.323.483.323.802 0 .319-.108.586-.323.801a1.09 1.09 0 0 1-.802.324Zm-4.5 0a1.09 1.09 0 0 1-.802-.324 1.088 1.088 0 0 1-.323-.801c0-.319.108-.586.323-.802.216-.215.483-.323.802-.323.319 0 .586.108.802.323.215.216.323.483.323.802 0 .319-.108.586-.323.801A1.09 1.09 0 0 1 9 15.75Zm9 0c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.801.323.216.216.324.483.324.802 0 .319-.108.586-.324.801a1.086 1.086 0 0 1-.801.324Zm-4.5 4.5c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.801.215-.216.482-.324.801-.324.319 0 .586.108.802.324.215.215.323.482.323.801 0 .319-.108.586-.323.801a1.09 1.09 0 0 1-.802.324Zm-4.5 0a1.09 1.09 0 0 1-.802-.324 1.087 1.087 0 0 1-.323-.801c0-.319.108-.586.323-.801A1.09 1.09 0 0 1 9 18c.319 0 .586.108.802.324.215.215.323.482.323.801 0 .319-.108.586-.323.801A1.09 1.09 0 0 1 9 20.25Zm9 0c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.801.215-.216.482-.324.801-.324.319 0 .586.108.801.324.216.215.324.482.324.801 0 .319-.108.586-.324.801a1.086 1.086 0 0 1-.801.324Zm-12.375 4.5a2.17 2.17 0 0 1-1.59-.66 2.17 2.17 0 0 1-.66-1.59V6.75c0-.619.22-1.148.66-1.588.441-.441.971-.662 1.59-.662H6.75V3.375c0-.319.108-.586.323-.802.216-.215.483-.323.802-.323.319 0 .586.108.802.323.215.216.323.483.323.802V4.5h9V3.375c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.801.323.216.216.324.483.324.802V4.5h1.125c.619 0 1.149.22 1.59.662.44.44.66.97.66 1.588V22.5a2.17 2.17 0 0 1-.66 1.59c-.441.44-.971.66-1.59.66H5.625Zm0-2.25h15.75V11.25H5.625V22.5Z"
              fill="#1B0B77"
            />
          </Svg>
          <Text style={{
            fontFamily: "Mont",
            top: -143,
            left: 61,
            fontSize: 15,
            color: "#1B0B77",
          }}>16.08.2023</Text>
          <Svg
            ///location
            width={28}
            height={24}
            top={-130}
            left={31}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="M14 2c3.862 0 7 2.66 7 5.95C21 12.41 14 19 14 19S7 12.41 7 7.95C7 4.66 10.138 2 14 2Zm0 4c-.619 0-1.212.21-1.65.586-.438.375-.683.884-.683 1.414 0 .53.245 1.04.683 1.414A2.544 2.544 0 0 0 14 10c.619 0 1.212-.21 1.65-.586.437-.375.683-.884.683-1.414 0-.53-.245-1.04-.683-1.414A2.544 2.544 0 0 0 14 6Zm9.333 13c0 2.21-4.176 4-9.333 4s-9.333-1.79-9.333-4c0-1.29 1.423-2.44 3.628-3.17l.747.91C7.782 17.19 7 17.81 7 18.5c0 1.38 3.138 2.5 7 2.5s7-1.12 7-2.5c0-.69-.782-1.31-2.042-1.76l.747-.91c2.205.73 3.628 1.88 3.628 3.17Z"
              fill="#1B0B77"
            />
          </Svg>
          <Text style={{
            fontFamily: "Mont",
            top: -153,
            left: 61,
            fontSize: 15,
            color: "#1B0B77",
          }}>Bucuresti </Text>


          <View style={styles.butonas1}>

            <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
              <Text style={{
                fontFamily: "Montt",
                fontSize: 15,
                color: "#1B0B77",
              }}
              >
                SEE MORE</Text>
            </TouchableNativeFeedback>
          </View>

        </View>










        <View>
          <Image source={ImagePath.dreptunghi21} style={styles.drept2} />
          <Text
            style={{
              fontFamily: "Montt",
              top: -340,
              left: 31,
              fontSize: 20,
              color: "#1B0B77",
            }}
          >
            10 people have joined your volunteer team
          </Text>

          <Svg
            //scris
            width={27}
            height={27}
            top={-330}
            left={31}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="m11.25 22.5 4.5-4.5h9v4.5h-13.5Zm9.337-13.584-4.78-4.725 1.574-1.575a2.161 2.161 0 0 1 1.59-.647 2.16 2.16 0 0 1 1.588.647l1.575 1.575c.432.43.657.951.675 1.561a2.032 2.032 0 0 1-.618 1.56l-1.604 1.604Zm-1.63 1.659L7.03 22.5H2.25v-4.781L14.175 5.794l4.781 4.781Z"
              fill="#1B0B77"
            />
          </Svg>

          <Text style={{
            fontFamily: "Mont",
            top: -355,
            left: 61,
            fontSize: 15,
            color: "#1B0B77",
          }}>CERT event </Text>

          <Svg
            ///calendar
            width={27}
            height={27}
            top={-340}
            left={31}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="M13.5 15.75c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.802.323.215.216.323.483.323.802 0 .319-.108.586-.323.801a1.09 1.09 0 0 1-.802.324Zm-4.5 0a1.09 1.09 0 0 1-.802-.324 1.088 1.088 0 0 1-.323-.801c0-.319.108-.586.323-.802.216-.215.483-.323.802-.323.319 0 .586.108.802.323.215.216.323.483.323.802 0 .319-.108.586-.323.801A1.09 1.09 0 0 1 9 15.75Zm9 0c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.801.323.216.216.324.483.324.802 0 .319-.108.586-.324.801a1.086 1.086 0 0 1-.801.324Zm-4.5 4.5c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.801.215-.216.482-.324.801-.324.319 0 .586.108.802.324.215.215.323.482.323.801 0 .319-.108.586-.323.801a1.09 1.09 0 0 1-.802.324Zm-4.5 0a1.09 1.09 0 0 1-.802-.324 1.087 1.087 0 0 1-.323-.801c0-.319.108-.586.323-.801A1.09 1.09 0 0 1 9 18c.319 0 .586.108.802.324.215.215.323.482.323.801 0 .319-.108.586-.323.801A1.09 1.09 0 0 1 9 20.25Zm9 0c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.801.215-.216.482-.324.801-.324.319 0 .586.108.801.324.216.215.324.482.324.801 0 .319-.108.586-.324.801a1.086 1.086 0 0 1-.801.324Zm-12.375 4.5a2.17 2.17 0 0 1-1.59-.66 2.17 2.17 0 0 1-.66-1.59V6.75c0-.619.22-1.148.66-1.588.441-.441.971-.662 1.59-.662H6.75V3.375c0-.319.108-.586.323-.802.216-.215.483-.323.802-.323.319 0 .586.108.802.323.215.216.323.483.323.802V4.5h9V3.375c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.801.323.216.216.324.483.324.802V4.5h1.125c.619 0 1.149.22 1.59.662.44.44.66.97.66 1.588V22.5a2.17 2.17 0 0 1-.66 1.59c-.441.44-.971.66-1.59.66H5.625Zm0-2.25h15.75V11.25H5.625V22.5Z"
              fill="#1B0B77"
            />
          </Svg>
          <Text style={{
            fontFamily: "Mont",
            top: -363,
            left: 61,
            fontSize: 15,
            color: "#1B0B77",
          }}>16.08.2023</Text>
          <Svg
            ///location
            width={28}
            height={24}
            top={-350}
            left={31}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="M14 2c3.862 0 7 2.66 7 5.95C21 12.41 14 19 14 19S7 12.41 7 7.95C7 4.66 10.138 2 14 2Zm0 4c-.619 0-1.212.21-1.65.586-.438.375-.683.884-.683 1.414 0 .53.245 1.04.683 1.414A2.544 2.544 0 0 0 14 10c.619 0 1.212-.21 1.65-.586.437-.375.683-.884.683-1.414 0-.53-.245-1.04-.683-1.414A2.544 2.544 0 0 0 14 6Zm9.333 13c0 2.21-4.176 4-9.333 4s-9.333-1.79-9.333-4c0-1.29 1.423-2.44 3.628-3.17l.747.91C7.782 17.19 7 17.81 7 18.5c0 1.38 3.138 2.5 7 2.5s7-1.12 7-2.5c0-.69-.782-1.31-2.042-1.76l.747-.91c2.205.73 3.628 1.88 3.628 3.17Z"
              fill="#1B0B77"
            />
          </Svg>
          <Text style={{
            fontFamily: "Mont",
            top: -373,
            left: 61,
            fontSize: 15,
            color: "#1B0B77",
          }}>Bucuresti  </Text>


          <View style={styles.butonas2}>

            <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
              <Text style={{
                fontFamily: "Montt",
                fontSize: 15,
                color: "#1B0B77",
              }}
              >
                SEE MORE</Text>
            </TouchableNativeFeedback>
          </View>

        </View>







        <View>
          <Image source={ImagePath.dreptunghi21} style={styles.drept3} />
          <Text
            style={{
              fontFamily: "Montt",
              top: -560,
              left: 31,
              fontSize: 20,
              color: "#1B0B77",
            }}
          >
            10 people have joined your volunteer team
          </Text>

          <Svg
            //scris
            width={27}
            height={27}
            top={-550}
            left={31}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="m11.25 22.5 4.5-4.5h9v4.5h-13.5Zm9.337-13.584-4.78-4.725 1.574-1.575a2.161 2.161 0 0 1 1.59-.647 2.16 2.16 0 0 1 1.588.647l1.575 1.575c.432.43.657.951.675 1.561a2.032 2.032 0 0 1-.618 1.56l-1.604 1.604Zm-1.63 1.659L7.03 22.5H2.25v-4.781L14.175 5.794l4.781 4.781Z"
              fill="#1B0B77"
            />
          </Svg>

          <Text style={{
            fontFamily: "Mont",
            top: -575,
            left: 61,
            fontSize: 15,
            color: "#1B0B77",
          }}>CERT event </Text>

          <Svg
            ///calendar
            width={27}
            height={27}
            top={-560}
            left={31}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="M13.5 15.75c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.802.323.215.216.323.483.323.802 0 .319-.108.586-.323.801a1.09 1.09 0 0 1-.802.324Zm-4.5 0a1.09 1.09 0 0 1-.802-.324 1.088 1.088 0 0 1-.323-.801c0-.319.108-.586.323-.802.216-.215.483-.323.802-.323.319 0 .586.108.802.323.215.216.323.483.323.802 0 .319-.108.586-.323.801A1.09 1.09 0 0 1 9 15.75Zm9 0c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.801.323.216.216.324.483.324.802 0 .319-.108.586-.324.801a1.086 1.086 0 0 1-.801.324Zm-4.5 4.5c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.801.215-.216.482-.324.801-.324.319 0 .586.108.802.324.215.215.323.482.323.801 0 .319-.108.586-.323.801a1.09 1.09 0 0 1-.802.324Zm-4.5 0a1.09 1.09 0 0 1-.802-.324 1.087 1.087 0 0 1-.323-.801c0-.319.108-.586.323-.801A1.09 1.09 0 0 1 9 18c.319 0 .586.108.802.324.215.215.323.482.323.801 0 .319-.108.586-.323.801A1.09 1.09 0 0 1 9 20.25Zm9 0c-.319 0-.586-.108-.801-.324a1.086 1.086 0 0 1-.324-.801c0-.319.108-.586.324-.801.215-.216.482-.324.801-.324.319 0 .586.108.801.324.216.215.324.482.324.801 0 .319-.108.586-.324.801a1.086 1.086 0 0 1-.801.324Zm-12.375 4.5a2.17 2.17 0 0 1-1.59-.66 2.17 2.17 0 0 1-.66-1.59V6.75c0-.619.22-1.148.66-1.588.441-.441.971-.662 1.59-.662H6.75V3.375c0-.319.108-.586.323-.802.216-.215.483-.323.802-.323.319 0 .586.108.802.323.215.216.323.483.323.802V4.5h9V3.375c0-.319.108-.586.324-.802.215-.215.482-.323.801-.323.319 0 .586.108.801.323.216.216.324.483.324.802V4.5h1.125c.619 0 1.149.22 1.59.662.44.44.66.97.66 1.588V22.5a2.17 2.17 0 0 1-.66 1.59c-.441.44-.971.66-1.59.66H5.625Zm0-2.25h15.75V11.25H5.625V22.5Z"
              fill="#1B0B77"
            />
          </Svg>
          <Text style={{
            fontFamily: "Mont",
            top: -583,
            left: 61,
            fontSize: 15,
            color: "#1B0B77",
          }}>16.08.2023</Text>
          <Svg
            ///location
            width={28}
            height={24}
            top={-570}
            left={31}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <Path
              d="M14 2c3.862 0 7 2.66 7 5.95C21 12.41 14 19 14 19S7 12.41 7 7.95C7 4.66 10.138 2 14 2Zm0 4c-.619 0-1.212.21-1.65.586-.438.375-.683.884-.683 1.414 0 .53.245 1.04.683 1.414A2.544 2.544 0 0 0 14 10c.619 0 1.212-.21 1.65-.586.437-.375.683-.884.683-1.414 0-.53-.245-1.04-.683-1.414A2.544 2.544 0 0 0 14 6Zm9.333 13c0 2.21-4.176 4-9.333 4s-9.333-1.79-9.333-4c0-1.29 1.423-2.44 3.628-3.17l.747.91C7.782 17.19 7 17.81 7 18.5c0 1.38 3.138 2.5 7 2.5s7-1.12 7-2.5c0-.69-.782-1.31-2.042-1.76l.747-.91c2.205.73 3.628 1.88 3.628 3.17Z"
              fill="#1B0B77"
            />
          </Svg>
          <Text style={{
            fontFamily: "Mont",
            top: -593,
            left: 61,
            fontSize: 15,
            color: "#1B0B77",
          }}>Bucuresti  </Text>






          <View >
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
                    width={361}
                    height={372}
                    top={123}
                    alignSelf={'center'}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"

                  >
                    <G filter="url(#a)">
                      <Path
                        d="M4 21C4 9.402 13.402 0 25 0h311c11.598 0 21 9.402 21 21v322c0 11.598-9.402 21-21 21H25c-11.598 0-21-9.402-21-21V21Z"
                        fill="#7C66FB"
                      />
                    </G>
                    <G filter="url(#b)">
                      <Rect
                        x={14}
                        y={10}
                        width={337}
                        height={131}
                        rx={21}
                        fill="#D7D2F2"
                        fillOpacity={0.9}
                        shapeRendering="crispEdges"
                      />
                    </G>
                    <G filter="url(#b)">
                      <Rect
                        x={14}
                        y={150}
                        top={100}
                        width={337}
                        height={200}
                        rx={21}
                        fill="#D7D2F2"
                        fillOpacity={0.9}
                        shapeRendering="crispEdges"
                      />
                    </G>
                    <Defs></Defs>
                  </Svg>

                </View>

                <Image source={ImagePath.cert} style={styles.cert} />
                <Image source={require('../assets/Images/certlogo.png')} style={styles.certlogo} />
                <Svg
                  ///statistuc
                  width={36}
                  height={33}
                  top={-290}
                  left={170}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  <Path
                    d="M4.5 4.125v22c0 .73.316 1.429.879 1.945a3.144 3.144 0 0 0 2.121.805h24"
                    stroke="#1B0B77"
                    strokeWidth={2}
                    strokeMiterlimit={5.759}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="m10.5 19.25 6-5.5 6 5.5 9-8.25"
                    stroke="#1B0B77"
                    strokeWidth={2}
                    strokeMiterlimit={5.759}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M27 11h4.5v4.125"
                    stroke="#1B0B77"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
                <Text style={{
                  fontFamily: "Mont",
                  fontSize: 20,
                  color: "#1B0B77",
                  left: 210,
                  top: -320,
                }}
                >
                  Statistics:</Text>

                <Text style={{
                  fontFamily: "Mont",
                  fontSize: 20,
                  color: "#1B0B77",
                  alignSelf: "center",
                  top: -270,
                }}
                >
                  Volunteers that joined:</Text>
                <Svg
                  //plus oameni
                  width={36}
                  height={25}
                  top={-250}
                  left={130}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  <Path
                    d="M18.783 10.714c.928 0 1.836-.314 2.608-.903.773-.588 1.374-1.425 1.73-2.404a6.061 6.061 0 0 0 .267-3.095 5.626 5.626 0 0 0-1.285-2.743C21.446.82 20.61.31 19.699.103a4.16 4.16 0 0 0-2.713.305c-.858.405-1.592 1.092-2.108 1.973a5.908 5.908 0 0 0-.791 2.976c0 1.42.495 2.784 1.375 3.788.88 1.005 2.075 1.57 3.32 1.57Zm0-7.143c.31 0 .612.105.87.301.257.197.457.475.576.802.118.326.15.685.089 1.032-.06.346-.21.664-.429.914-.218.25-.497.42-.801.489a1.387 1.387 0 0 1-.904-.102 1.63 1.63 0 0 1-.703-.658 1.97 1.97 0 0 1-.264-.992c0-.473.165-.928.459-1.263a1.474 1.474 0 0 1 1.107-.523Zm6.433 6.893c.915-1.498 1.406-3.28 1.406-5.107 0-1.826-.49-3.609-1.406-5.107.45-.165.92-.25 1.393-.25 1.245 0 2.44.564 3.32 1.57.88 1.004 1.375 2.366 1.375 3.787 0 1.42-.494 2.784-1.375 3.788-.88 1.005-2.075 1.57-3.32 1.57-.473-.001-.943-.085-1.393-.25Zm-6.433 3.822c-9.392 0-9.392 7.143-9.392 7.143V25h18.783v-3.571s0-7.143-9.391-7.143Zm-6.261 7.143c0-.518.5-3.572 6.26-3.572 5.479 0 6.168 2.786 6.262 3.572m10.956 0V25h-4.696v-3.571a11.179 11.179 0 0 0-.788-3.842 10.062 10.062 0 0 0-2.029-3.194C36 15.268 36 21.429 36 21.429ZM9.923 7l1.816 2.518L4.304 18 0 12.643l1.816-2.072 2.488 2.822L9.924 7Z"
                    fill="#1B0B77"
                  />
                </Svg>
                <Text style={{
                  fontFamily: "Mont",
                  fontSize: 20,
                  color: "#1B0B77",
                  alignSelf: "center",
                  top: -275,
                }}
                >
                  30</Text>
                <Svg
                  ///linie1
                  width={304}
                  height={200}
                  top={-275}
                  alignSelf={"center"}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  <G filter="url(#a)">
                    <Path stroke="#1B0B77" strokeWidth={1.5} d="M0 3.25h287" />
                  </G>
                  <Defs></Defs>
                </Svg>

                <Text style={{
                  fontFamily: "Mont",
                  fontSize: 20,
                  color: "#1B0B77",
                  alignSelf: "center",
                  top: -450,
                }}
                >
                  In need:</Text>
                <Svg
                  //mai avem nevoie
                  width={36}
                  height={33}
                  top={-450}
                  left={130}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  <Path
                    d="M19.5 15.125c.89 0 1.76-.242 2.5-.695a4.225 4.225 0 0 0 1.657-1.851c.341-.754.43-1.584.256-2.384a4.031 4.031 0 0 0-1.231-2.112 4.64 4.64 0 0 0-2.304-1.129 4.881 4.881 0 0 0-2.6.235 4.44 4.44 0 0 0-2.02 1.52A3.885 3.885 0 0 0 15 11c0 1.094.474 2.143 1.318 2.917.844.773 1.988 1.208 3.182 1.208Zm0-5.5c.297 0 .587.08.833.232.247.15.44.366.553.617.113.251.143.527.085.794-.058.267-.2.512-.41.704-.21.193-.477.324-.768.377-.291.053-.593.025-.867-.079a1.48 1.48 0 0 1-.673-.506A1.295 1.295 0 0 1 18 11c0-.365.158-.714.44-.972a1.572 1.572 0 0 1 1.06-.403Zm6.165 5.307A6.486 6.486 0 0 0 27.013 11c0-1.406-.47-2.779-1.348-3.933A4.73 4.73 0 0 1 27 6.875c1.194 0 2.338.435 3.182 1.208.844.774 1.318 1.823 1.318 2.917 0 1.094-.474 2.143-1.318 2.917-.844.773-1.988 1.208-3.182 1.208-.453 0-.904-.065-1.335-.193ZM19.5 17.875c-9 0-9 5.5-9 5.5v2.75h18v-2.75s0-5.5-9-5.5Zm-6 5.5c0-.399.48-2.75 6-2.75 5.25 0 5.91 2.145 6 2.75m10.5 0v2.75h-4.5v-2.75a7.175 7.175 0 0 0-.755-2.958 7.766 7.766 0 0 0-1.945-2.46c7.2.674 7.2 5.418 7.2 5.418ZM12 16.5H7.5v4.125h-3V16.5H0v-2.75h4.5V9.625h3v4.125H12v2.75Z"
                    fill="#1B0B77"
                  />
                </Svg>
                <Text style={{
                  fontFamily: "Mont",
                  fontSize: 20,
                  color: "#1B0B77",
                  alignSelf: "center",
                  top: -480,
                }}
                >
                  10</Text>
                <Svg
                  ///linie1
                  width={304}
                  height={200}
                  top={-480}
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

          </View>

          <View style={styles.butonas3}>

            <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
              <Text style={{
                fontFamily: "Montt",
                fontSize: 15,
                color: "#1B0B77",
              }}
              >
                SEE MORE</Text>
            </TouchableNativeFeedback>
          </View>

        </View>









      </ScrollView>
    </LinearGradient >


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
    top: 70,
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
    top: -190,
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
    top: -410,
  },


  drept2: {
    alignSelf: 'center',
    justifyContent: "center",
    top: -150,
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
  drept3: {
    alignSelf: 'center',
    justifyContent: "center",
    top: -370,
  },
  cert: {
    left: 40,
    top: -213,
  },
  certlogo: {
    left: 170,
    top: -300,
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
    top: -640,
  },
});
