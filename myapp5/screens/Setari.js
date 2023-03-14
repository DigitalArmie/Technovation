import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TextInput,
  Animated,
  Easing,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import ImagePath from "../constants/ImagePath";
export default function Securit({ navigation }) {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const startAnimation = (toValue) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const left = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['2%', '50%'],
    extrapolate: 'clamp',
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.9, 1],
    extrapolate: 'clamp',
  });

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  if (!fontsLoaded) return null;
  const PressHandler4 = () => {
    navigation.navigate("Profile");
  };
  const PressHandler5 = () => {
    navigation.navigate("Security");
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
      <View>
        <TouchableNativeFeedback onPress={PressHandler4}>
          <Image source={ImagePath.back} style={{ top: "95%", left: "4%" }} />
        </TouchableNativeFeedback>
        <Text
          style={{
            fontFamily: "Mont",
            top: "40%",
            left: "12%",
            fontSize: 24,
            color: "#1B0B77",
          }}
        >
          Settings:
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "Mont",
          top: "10%",
          left: "8%",
          fontSize: 24,
          color: "#1B0B77",
        }}
      >
        Account Settings:
      </Text>
      <View style={{ top: "15%", alignSelf: "center" }}>
        <Image source={ImagePath.set1} />
        <Text
          style={{
            fontFamily: "Mont",
            fontSize: 20,
            color: "#1B0B77",
            top: "-55%",
            alignSelf: "center",
          }}
        >
          Edit Name:
        </Text>
      </View>
      <View style={{ top: "12%", alignSelf: "center" }}>
        <Image source={ImagePath.set2} />
        <Image
          source={ImagePath.linemoney}
          style={{ top: "-32%", alignSelf: "center", width: 241 }}
        />
        <TextInput
          placeholder="ex: Miruna Pandache"
          value={Name}
          onChangeText={(text) => setName(text)}
          style={{
            fontFamily: "Mont",
            fontSize: 18,
            color: "#1B0B77",
            top: "-63%",
            textAlign: "center",
          }}
        />
      </View>
      <View style={{ top: "7%", alignSelf: "center" }}>
        <Image source={ImagePath.set1} />
        <Text
          style={{
            fontFamily: "Mont",
            fontSize: 20,
            color: "#1B0B77",
            top: "-55%",
            alignSelf: "center",
          }}
        >
          Edit E-mail:
        </Text>
      </View>
      <View style={{ top: "4%", alignSelf: "center" }}>
        <Image source={ImagePath.set2} />
        <Image
          source={ImagePath.linemoney}
          style={{ top: "-32%", alignSelf: "center", width: 241 }}
        />
        <TextInput
          placeholder="ex: miruna@gmail.com"
          value={Email}
          onChangeText={(text) => setEmail(text)}
          style={{
            fontFamily: "Mont",
            fontSize: 18,
            color: "#1B0B77",
            top: "-63%",
            textAlign: "center",
          }}
        />
      </View>
      <View style={{ top: "-1%", alignSelf: "center" }}>
        <Image source={ImagePath.set1} />
        <Text
          style={{
            fontFamily: "Mont",
            fontSize: 20,
            color: "#1B0B77",
            top: "-40%",
            left: "10%",
          }}
        >
          Security
        </Text>
        <TouchableNativeFeedback onPress={PressHandler5}>
          <Image
            source={ImagePath.secgo}
            style={{ top: "-63%", left: "60%" }}
          />
        </TouchableNativeFeedback>
      </View>
      <View style={{ top: "-9%", alignSelf: "center" }}>
        <Image source={ImagePath.set1} />
        <Text
          style={{
            fontFamily: "Mont",
            fontSize: 20,
            color: "#1B0B77",
            top: "-45%",
            left: "6%",
          }}
        >
          Push Notifications
        </Text>
        <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <Animated.View style={[styles.slider, { left }]} />
          <Pressable
            style={styles.clickableArea}
            onPress={startAnimation.bind(null, 0)}>
            
          </Pressable>
          <Pressable
            style={styles.clickableArea}
            onPress={startAnimation.bind(null, 1)}>
            
          </Pressable>
        </View>
      </View>
      </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  hello: {
    justifyContent: "center",
    fontSize: 36,
    position: "absolute",
    left: "25%",
   
    color: "#1B0B77",
    fontFamily: "Mont",
  },
  container: {
    
    left: "27%",
    alignItems: 'center',
     top: "-66%",
  },
  sliderContainer: {
    width: '18%',
    height: 30,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  clickableArea: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderText: {
    fontSize: 8,
    fontWeight: '500',
  },
  slider: {
    position: 'absolute',
    width: '45%',
    height: '85%',
    borderRadius: 70,
    backgroundColor: '#f4f4f4',
  },
});
