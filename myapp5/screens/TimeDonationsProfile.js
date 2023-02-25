import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  ScrollView,
  Modal
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

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
        <TouchableNativeFeedback onPres={PressHandler1}>
            <Text style={styles.text2}>My location</Text>
          </TouchableNativeFeedback>
          <Modal
          transparent={true}
          visible={false}
          >
            <View style={{backgroundColor:'#000000aa', flex: 1}}>
            <View style={styles.containerm}>
            <Text style={styles.text3}>Where do you want to volunteer?</Text>
            </View>
            </View>
          </Modal>
        </View>
        <View style={styles.container1}>
        <View>
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.presenting} style={styles.img1} />
          </TouchableNativeFeedback>
        </View>
        <Image source={ImagePath.logo2} style={styles.logo1} />
        <Text
          style={{
            fontFamily: "Mont",
            top: -20,
            left: 30,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >Location{" "}
        </Text>
        <Image source={ImagePath.location} style={styles.location} />
        <Text
          style={{
            fontFamily: "Mont",
            top: -90,
            left: 25,
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >6.08.2023</Text>
        <Image source={ImagePath.calendar} style={styles.calendar}/>
        <View style={styles.container2}>
          <TouchableNativeFeedback onPress={PressHandler1}>
            <Text style={styles.text1}>INFO</Text>
          </TouchableNativeFeedback>
        </View>
        </View>
        <View style={styles.container3}>
        <View>
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.presenting} style={styles.img1} />
          </TouchableNativeFeedback>
        </View>
        <Image source={ImagePath.logo2} style={styles.logo1} />
        <Text
          style={{
            fontFamily: "Mont",
            top: -20,
            left: 30,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >Location{" "}
        </Text>
        <Image source={ImagePath.location} style={styles.location} />
        <Text
          style={{
            fontFamily: "Mont",
            top: -90,
            left: 25,
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >6.08.2023</Text>
        <Image source={ImagePath.calendar} style={styles.calendar}/>
        <View style={styles.container2}>
          <TouchableNativeFeedback onPress={PressHandler1}>
            <Text style={styles.text1}>INFO</Text>
          </TouchableNativeFeedback>
        </View>
        </View>
        <View style={styles.container4}>
        <View>
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.presenting} style={styles.img1} />
          </TouchableNativeFeedback>
        </View>
        <Image source={ImagePath.logo2} style={styles.logo1} />
        <Text
          style={{
            fontFamily: "Mont",
            top: -20,
            left: 30,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >Location{" "}
        </Text>
        <Image source={ImagePath.location} style={styles.location} />
        <Text
          style={{
            fontFamily: "Mont",
            top: -90,
            left: 25,
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >6.08.2023</Text>
        <Image source={ImagePath.calendar} style={styles.calendar}/>
        <View style={styles.container2}>
          <TouchableNativeFeedback onPress={PressHandler1}>
            <Text style={styles.text1}>INFO</Text>
          </TouchableNativeFeedback>
        </View>
        </View>
        <View style={styles.container5}>
        <View>
          <TouchableNativeFeedback onPress={pressHandler3}>
            <Image source={ImagePath.presenting} style={styles.img1} />
          </TouchableNativeFeedback>
        </View>
        <Image source={ImagePath.logo2} style={styles.logo1} />
        <Text
          style={{
            fontFamily: "Mont",
            top: -20,
            left: 30,
            fontSize: 14,
            color: "#1B0B77",
          }}
        >Location{" "}
        </Text>
        <Image source={ImagePath.location} style={styles.location} />
        <Text
          style={{
            fontFamily: "Mont",
            top: -90,
            left: 25,
            fontSize: 12.5,
            color: "#1B0B77",
          }}
        >6.08.2023</Text>
        <Image source={ImagePath.calendar} style={styles.calendar}/>
        <View style={styles.container2}>
          <TouchableNativeFeedback onPress={PressHandler1}>
            <Text style={styles.text1}>INFO</Text>
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
    top: 110,
    alignSelf: 'center'
  },
  container1: {
    backgroundColor: '#FFFFFF',
    height: 156,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 262,
    alignItems: 'center'
  },
  container2: {
    backgroundColor: '#ADA0FC',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 35,
    top: -70,
    left: 105
  },
  container3: {
    backgroundColor: '#FFFFFF',
    height: 156,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 450,
    alignItems: 'center'
  },
  container4: {
    backgroundColor: '#FFFFFF',
    height: 156,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 640,
    alignItems: 'center'
  },
  container5: {
    backgroundColor: '#FFFFFF',
    height: 156,
    position: 'absolute',
    left: 20,
    right: 20,
    borderRadius: 21,
    top: 830,
    alignItems: 'center'
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
  img1: {
    top: 50,
    left: -110,
    width: 107,
    height: 83,
  },
  img2: {
    top: 15,
    left: -80
  },
  location: {
    left: -30,
    top: -45,
    width: 23,
    height: 23,
  },
  logo1: {
    left: -110,
    top: -60,
    width: 91,
    height: 15,
  },
  calendar: {
    left: -30,
    top: -110,
  }
});
