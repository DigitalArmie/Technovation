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
import Svg, { G, Path, Defs } from "react-native-svg";
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
      <Svg
    width={30}
    height={30}
    top={82}
    left={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M25.215 8.438H22.89l-5.708 5.705a2.342 2.342 0 1 1-1.325-1.325l5.707-5.707V4.785c0-.311.123-.61.343-.83l2.163-2.162a.312.312 0 0 1 .529.16l.575 2.876 2.875.575a.31.31 0 0 1 .241.382.312.312 0 0 1-.081.145l-2.164 2.163a1.17 1.17 0 0 1-.829.344Z"
      fill="#1B0B77"
    />
    <Path
      d="M3.281 15a11.719 11.719 0 0 0 23.438 0c0-1.123-.158-2.207-.452-3.234a.938.938 0 0 1 1.802-.516c.342 1.193.525 2.45.525 3.75 0 7.508-6.087 13.594-13.594 13.594-7.508 0-13.594-6.087-13.594-13.594S7.493 1.406 15 1.406a13.59 13.59 0 0 1 3.75.524.938.938 0 1 1-.516 1.803c-1.052-.3-2.14-.453-3.234-.452A11.719 11.719 0 0 0 3.281 15Z"
      fill="#1B0B77"
    />
    <Path
      d="M8.906 15a6.092 6.092 0 1 0 12.146-.711.935.935 0 0 1 1.31-.998c.313.14.524.439.552.781a7.967 7.967 0 0 1-15.77 2.262 7.97 7.97 0 0 1 8.77-9.25.938.938 0 1 1-.213 1.862A6.095 6.095 0 0 0 8.906 15Z"
      fill="#1B0B77"
    />
  </Svg>
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
        <Svg
    width={49}
    height={47}
    top={72}
    left={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.371 24.153a3.94 3.94 0 0 0-1.492-1.892 4.205 4.205 0 0 0-2.358-.72v-.979h-2.042v.98a4.173 4.173 0 0 0-2.887 1.147 3.838 3.838 0 0 0-1.196 2.77c0 1.038.43 2.034 1.196 2.769a4.173 4.173 0 0 0 2.887 1.147v3.917c-.888 0-1.645-.544-1.926-1.306a.97.97 0 0 0-.198-.339c-.09-.099-.198-.18-.32-.238a1.056 1.056 0 0 0-1.142.154.983.983 0 0 0-.24.314.946.946 0 0 0-.024.762 3.94 3.94 0 0 0 1.492 1.892c.69.468 1.514.719 2.358.719v.98h2.042v-.98a4.173 4.173 0 0 0 2.887-1.147 3.837 3.837 0 0 0 1.196-2.77c0-1.038-.43-2.035-1.196-2.77a4.173 4.173 0 0 0-2.887-1.146V23.5c.422 0 .834.125 1.179.36.345.233.605.563.746.945.09.245.278.446.522.558a1.054 1.054 0 0 0 1.123-.155c.1-.086.18-.19.239-.306a.947.947 0 0 0 .041-.749ZM23.48 23.5c-.541 0-1.06.206-1.444.574a1.919 1.919 0 0 0-.598 1.384c0 .52.215 1.018.598 1.385s.903.574 1.444.574V23.5Zm2.042 9.792c.541 0 1.06-.207 1.443-.574s.598-.865.598-1.385c0-.519-.215-1.017-.598-1.384a2.086 2.086 0 0 0-1.443-.574v3.917Z"
      fill="#1B0B77"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.427 8.441c2.505-1.176 6.615-2.566 11.113-2.566 4.404 0 8.405 1.333 10.897 2.493l.141.066c.751.356 1.358.693 1.784.966l-3.77 5.287C42.284 23.212 49 41.123 24.54 41.123S6.614 23.537 15.383 14.688L11.636 9.4c.29-.181.656-.392 1.093-.615.216-.112.449-.227.698-.344Zm17.741 6.176 3.019-4.233c-2.808.194-6.148.826-9.363 1.72-2.297.636-4.85.539-7.213.12a26.643 26.643 0 0 1-1.773-.377l1.96 2.768c4.2 1.434 9.168 1.434 13.37.002Zm-14.549 1.666c4.915 1.822 10.823 1.822 15.738-.001a28.665 28.665 0 0 1 5.092 6.994c1.38 2.7 2.132 5.4 2.01 7.726-.12 2.246-1.04 4.164-3.143 5.59-2.192 1.485-5.878 2.572-11.777 2.572-5.906 0-9.61-1.069-11.822-2.537-2.118-1.408-3.048-3.3-3.18-5.515-.137-2.301.598-4.987 1.973-7.706 1.312-2.593 3.142-5.089 5.11-7.122ZM15.445 9.71c.817.233 1.67.436 2.536.59 2.195.388 4.396.444 6.274-.077a57.244 57.244 0 0 1 6.666-1.44c-1.878-.543-4.075-.949-6.382-.949-3.517 0-6.797.941-9.094 1.876Z"
      fill="#1B0B77"
    />
  </Svg>
         <Svg
    width={314}
    height={19}
    top={65}
    left={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={2} d="m8.997 6 297-1" />
    </G>
    <Defs></Defs>
  </Svg>
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
        <Svg
    width={49}
    height={47}
    top={72}
    left={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M22.458 41.125c-2.552 0-4.942-.457-7.17-1.37-2.23-.915-4.178-2.171-5.845-3.77a17.635 17.635 0 0 1-3.93-5.607c-.953-2.138-1.43-4.43-1.43-6.878 0-4.929 1.779-9.098 5.335-12.51 3.555-3.41 7.902-5.115 13.04-5.115a15.663 15.663 0 0 1 2.501.196c.443.065.817.285 1.123.66.306.376.46.792.46 1.25 0 .652-.23 1.15-.689 1.491-.46.344-1.047.483-1.761.418a14.368 14.368 0 0 0-.817-.075 14.206 14.206 0 0 0-.817-.023c-4.015 0-7.4 1.322-10.157 3.965-2.756 2.644-4.134 5.891-4.134 9.743 0 3.851 1.378 7.099 4.134 9.743 2.756 2.643 6.142 3.965 10.157 3.965 3.982 0 7.342-1.305 10.082-3.916 2.739-2.612 4.142-5.827 4.21-9.645a2.1 2.1 0 0 1 .588-1.469c.39-.424.875-.636 1.454-.636.544 0 1.02.187 1.429.562.408.376.612.808.612 1.298v.098c0 4.928-1.778 9.098-5.335 12.508-3.555 3.411-7.902 5.117-13.04 5.117Zm16.334-23.5c-.579 0-1.063-.188-1.454-.564a1.851 1.851 0 0 1-.588-1.394V11.75h-4.083c-.579 0-1.063-.187-1.454-.562a1.857 1.857 0 0 1-.588-1.396c0-.555.196-1.02.588-1.397.39-.374.875-.562 1.454-.562h4.083V3.917c0-.555.196-1.02.588-1.397.39-.374.875-.562 1.454-.562.578 0 1.063.188 1.453.562.392.376.588.842.588 1.397v3.916h4.084c.578 0 1.063.188 1.453.562.392.376.588.842.588 1.397 0 .554-.196 1.02-.588 1.396-.39.375-.875.562-1.453.562h-4.084v3.917c0 .554-.196 1.02-.588 1.394-.39.376-.875.564-1.453.564Zm-12.046 12.73-5.717-5.484a1.95 1.95 0 0 1-.612-1.42v-7.784c0-.555.196-1.02.588-1.397.39-.374.875-.562 1.453-.562.579 0 1.064.188 1.456.562.39.376.586.842.586 1.397v7.05l5.104 4.895c.374.36.562.816.562 1.371s-.188 1.012-.562 1.371c-.374.36-.85.539-1.43.539-.578 0-1.054-.18-1.428-.539Z"
      fill="#1B0B77"
    />
  </Svg>
        <Svg
    width={314}
    height={19}
    top={65}
    left={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G filter="url(#a)">
      <Path stroke="#1B0B77" strokeWidth={2} d="m8.997 6 297-1" />
    </G>
    <Defs></Defs>
  </Svg>
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
