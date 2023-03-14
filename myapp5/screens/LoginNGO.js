import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TextInput,
  text,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import signup from "./signup";
import Home from "./Home";
import { auth } from "../firebase";
export default function LogInNgo({ navigation }) {
 
  const pressHandler = () => {
    navigation.navigate("signup");
  };
  const pressHandlerNGO = () => {
    navigation.navigate("signup");
  };
  const pressHandler2 = () => {
    navigation.navigate("AppNGO");
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("AppNGO");
      }
    });
  }, []);
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleLogIn = () => {
    auth
      .signInWithEmailAndPassword(Email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.Email);
      })
      .catch((error) => alert(error.message));
  };
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontSemi: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <LinearGradient
      colors={["#4831CE", "#4831CE", "#5F4AD8", "#7A68E5", "#ADA0FC"]}
      start={{ x: 2.5, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView>
        <Text style={styles.text}>Log in to continue:</Text>
        <View style={styles.logins1}>
          <TextInput
            placeholder="Email"
            value={Email}
            onChangeText={(text) => setEmail(text)}
            style={styles.inputLog1}
          />
        </View>

        <View style={styles.logins2}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.inputLog2}
            secureTextEntry
          />
        </View>
        <View style={styles.butonas}>
          <TouchableNativeFeedback onPress={pressHandler2}>
            <Text style={styles.text8}>LOG IN</Text>
          </TouchableNativeFeedback>
        </View>
        
        <Text style={styles.text5}>New user?</Text>

        <TouchableHighlight
          style={styles.button2}
          onPress={pressHandler}
          activeOpacity={1}
        >
          <Text style={styles.text7}>Sign Up</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    position: "absolute",
    left: "22%",
    top: "140%",
    color: "white",
    fontFamily:"Mont",
    letter: "6.5%",
  },
  text5: {
    fontSize: 20,
    position: "absolute",
    left: "22%",
    top: "380%",
    color: "white",
    
    letter: "6.5%",
    fontFamily:"Mont"
  },
  logins1: {
    //flex:0.5,
    justifyContent: "center",
    left: "10%",
    top: "210%",
  },
  logins2: {
    //flex:0.01,
    justifyContent: "center",
    left: "10%",
    top: "220%",
  },
  inputcontainer: {
    paddingHorizontal: 15,
    borderRadius: 56,
    borderColor: "white",
  },
  inputLog1: {
    fontSize: 22,
    paddingHorizontal: 10,
    borderColor: "white",
    width: "80%",
    borderWidth: 1,
    borderRadius: 70,
    padding: 10,
    fontFamily:"Mont"
  },
  inputLog2: {
    fontSize: 22,
    paddingHorizontal: 10,
    borderColor: "white",
    width: "80%",
    borderWidth: 1,
    borderRadius: 70,
    padding: 10,
    fontFamily:"Mont"
  },

  text8: {
    fontFamily:"MontSemi",
    fontSize: 22,
    color: "#1B0B77",
  },
  text6: {
    fontSize: 20,
    position: "absolute",
    left: "20%",
    top: "8%",
    color: "white",
    fontFamily:"Mont",
    letter: "6.5%",
  },
  text7: {
    fontSize: 20,
    position: "absolute",
    left: "74%",
    top: "77%",
    color: "white",
    fontFamily:"Mont",
    textDecorationLine: "underline",
  },
  text3: {
    fontSize: 22,
    position: "absolute",
    top: "-25%",
    color: "white",
    fontWeight: "semibold",
    letter: "6.5%",
    fontFamily:"Mont",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderColor: "green",
  },
  button2: {
    position: "absolute",
    left: "52%",
    top: "380%",
  },
  button3: {
    position: "absolute",
    
    top: "400%",
    left: "35%",
  },
  text4: {
    fontSize: 22,
    position: "absolute",
    top: "-16%",
    color: "white",
    fontFamily:"Mont",
    letter: "6.5%",
    textDecorationLine: "underline",
  },
  text2: {
    fontSize: 22,
    position: "absolute",
    left: "25%",
    top: "56%",
    color: "white",
    fontFamily:"Mont",
    letter: "6.5%",
  },
  img: {
    width: "70%",
    height: "0.15%",
    top: "43%",
    left: "16%",
    justifyContent: "center",
  },
  casuta: {
    width: "70%",
    height: "60%",
    top: "90%",
    left: "30%",
    justifyContent: "center",
    color: "#ffffff",

    position: "absolute",
  },
  input: {
    fontFamily:"Mont",
    fontSize: 54,
    height: "100%",
    left: "16%",
    top: "55%",
  },
  img2: {
    width: "70%",
    height: "0.15%",
    top: "52%",
    left: "16%",
    justifyContent: "center",
  },
  casuta2: {
    fontFamily:"Mont",
    fontSize: 22,
    height: "50%",
    left: "89%",
    top: "30%",
  },
  input2: {
    fontFamily:"Mont",
    fontSize: 22,
  },
  butonas: {
    //position:'absolute',
    //flex:0.1,
    justifyContent: "center",
    borderWidth: 0.5,
    padding: 20,
    alignItems: "center",
    borderRadius: 56,
    borderColor: "white",
    backgroundColor: "#ADA0FC",
    width: "56%",
    top: "240%",
    left: "22%",
  },
  container: {
    alignItems: "center",
    width: "68%",
    top: "3%",
    left: "16%",
  },
});
