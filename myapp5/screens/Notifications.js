import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import ImagePath from "../constants/ImagePath";
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export default function Notifu({ navigation }) {
  const [fontsLoaded] = useFonts({
    Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Montt: require("../assets/fonts/Montserrat-Bold.ttf"),

  });
  if (!fontsLoaded) return null;
  const pressHandler3 = () => {
    navigation.navigate("MyGoals");
  };
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
              top: -140,
              left: 41,
              fontSize: 20,
              color: "#1B0B77",
            }}
          >
            Two more weeks until:
          </Text>
          <Image source={ImagePath.logo2} style={styles.logo1} />
          <Svg
            ///calendar
            width={27}
            height={27}
            top={-120}
            left={151}
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
            top: -144,
            left: 178,
            fontSize: 15,
            color: "#1B0B77",
          }}>16.08.2023</Text>
          <Svg
            ///location
            width={28}
            height={24}
            top={-135}
            left={151}
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
            top: -157,
            left: 178,
            fontSize: 15,
            color: "#1B0B77",
          }}>Casa de Cultura  </Text>
          <Image source={ImagePath.presenting} style={styles.img1} />

          <View style={styles.butonas1}>
            <TouchableNativeFeedback onPress={pressHandler1}>
              <Text style={{
                fontFamily: "Montt",
                fontSize: 15,
                color: "#1B0B77",
              }}
              >
                INFO</Text>
            </TouchableNativeFeedback>
          </View>
        </View>



        <View>
          <Image source={ImagePath.dreptunghi21} style={styles.drept3} />
          <Text
            style={{

              fontFamily: "Montt",
              top: -390,
              left: 41,
              fontSize: 20,
              color: "#1B0B77",
              width: 315,
            }}
          >
            It’ time for setting your
            monthly donation of time and money:
          </Text>
          <Text
            style={{

              fontFamily: "Mont",
              top: -380,
              left: 80,
              fontSize: 18,
              color: "#1B0B77",
              width: 250,
            }}
          >
            Set your goals for this month
          </Text>

          <Svg
            width={27}
            height={27}
            top={-420}
            left={45}
            
            
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
           
          >
            <Path
              d="M22.694 7.594H20.6l-5.137 5.134a2.108 2.108 0 1 1-1.192-1.192L19.406 6.4V4.306c0-.28.112-.548.31-.747l1.946-1.946a.28.28 0 0 1 .476.144l.517 2.589 2.588.517a.28.28 0 0 1 .217.345.28.28 0 0 1-.073.13l-1.948 1.946a1.054 1.054 0 0 1-.745.31Z"
              fill="#1B0B77"
            />
            <Path
              d="M2.953 13.5a10.547 10.547 0 1 0 21.094 0c0-1.01-.142-1.987-.406-2.91a.843.843 0 0 1 1.62-.465c.31 1.073.473 2.205.473 3.375 0 6.757-5.477 12.234-12.234 12.234S1.266 20.257 1.266 13.5 6.743 1.266 13.5 1.266a12.23 12.23 0 0 1 3.375.471.843.843 0 1 1-.465 1.622A10.564 10.564 0 0 0 6.042 6.042 10.547 10.547 0 0 0 2.953 13.5Z"
              fill="#1B0B77"
            />
            <Path
              d="M8.016 13.5a5.483 5.483 0 1 0 10.931-.64.842.842 0 0 1 1.178-.898.842.842 0 0 1 .497.703 7.17 7.17 0 0 1-12.19 5.91 7.173 7.173 0 0 1 5.89-12.2.844.844 0 1 1-.19 1.677A5.486 5.486 0 0 0 8.015 13.5Z"
              fill="#1B0B77"
            />
          </Svg>
          <View style={styles.butonas2}>
            <TouchableNativeFeedback onPress={pressHandler3}>
              <Text style={{
                fontFamily: "Montt",
                fontSize: 15,
                color: "#1B0B77",
              }}
              >
                MY GOALS
              </Text>
            </TouchableNativeFeedback>
          </View>
        </View>


        <View>
          <Image source={ImagePath.dreptunghi21} style={styles.drept4} />
          <Text
            style={{
              fontFamily: "Montt",
              top: -580,
              left: 41,
              fontSize: 20,
              color: "#1B0B77",

            }}
          >
            Two more weeks until:
          </Text>
          <Image source={ImagePath.logo2} style={styles.logo3} />
          <Image source={ImagePath.presenting} style={styles.img3} />

          <Svg
            ///calendar
            width={27}
            height={27}
            top={-640}
            left={151}

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
            top: -663,
            left: 178,
            fontSize: 15,
            color: "#1B0B77",
          }}>16.08.2023</Text>
          <Svg
            ///location
            width={28}
            height={24}
            top={-655}
            left={151}
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
            top: -676,
            left: 178,
            fontSize: 15,
            color: "#1B0B77",
          }}>Casa de Cultura  </Text>
          <View style={styles.butonas3}>
            <TouchableNativeFeedback onPress={pressHandler1}>
              <Text style={{
                fontFamily: "Montt",
                fontSize: 15,
                color: "#1B0B77",
              }}
              >
                INFO</Text>
            </TouchableNativeFeedback>
          </View>
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

  notifi: {
    top: 60,
    left: 19,
  },

  drept1: {
    alignSelf: 'center',
    justifyContent: "center",
    top: 50,
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
    top: -230,
  },
  img1: {
    top: -225,
    left: 34,

  },
  logo1: {
    left: 40,
    top: -135,
    width: 91,
    height: 15,
  },
  drept3: {
    alignSelf: 'center',
    justifyContent: "center",
    top: -200,
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
  drept4: {
    alignSelf: 'center',
    justifyContent: "center",
    top: -390,
  },
  img3: {
    top: -570,
    left: 34,

  },
  logo3: {
    left: 40,
    top: -575,
    width: 91,
    height: 15,
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
    top: -670,
  },
});
