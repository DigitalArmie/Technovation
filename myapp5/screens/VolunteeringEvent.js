import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import ImagePath from "../constants/ImagePath";
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
export default function Volunteere({ navigation }) {
    const [fontsLoaded] = useFonts({
        Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
        Montt: require("../assets/fonts/Montserrat-Bold.ttf"),
        MontLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontRegular: require("../assets/fonts/Montserrat-Regular.ttf"),

    });
    if (!fontsLoaded) return null;
    const pressHandler1 = () => {
        navigation.navigate("NGOpresentation");
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


            <View style={styles.butonas1}>
            <TouchableNativeFeedback onPress={pressHandler1}>
            <Image source={require('../assets/Images/logomare.png')} style={styles.logo1} />
            </TouchableNativeFeedback>
                

                <View style={styles.butonas}>
                   
                        <Text style={{
                            fontFamily: "Mont",
                            fontSize: 25,
                            color: "#1B0B77",
                        }}
                        >
                            Prevenire împotriva dependenței!</Text>
                  
                </View>
                </View>
                <View>
                    <Image source={ImagePath.dreptunghi21} style={styles.drept1} />
                    <Text style={{
                        fontFamily: "Mont",
                        fontSize: 20,
                        color: "#1B0B77",
                        left: 45,
                        top: -60,
                    }}
                    >
                        Descriere event:
                    </Text>
                    <Text style={{
                        fontFamily: "MontRegular",
                        fontSize: 18,
                        color: "#1B0B77",
                        left: 60,
                        top: -57,
                        width:330,
                    }}
                    >
                        Campanii pentru a informa și avertiza tinerii elevi de riscurile consumului de substanțe halucinogene.
                    </Text>
                </View>

                <View style={{top:'-8%'}}>
                    <Image source={ImagePath.dreptunghi21} style={styles.drept2} />
                    <Text style={{
                        fontFamily: "Mont",
                        fontSize: 20,
                        color: "#1B0B77",
                        left: 45,
                        top: -110,
                    }}
                    >
                        Location and time:
                    </Text>
                    <Svg
                    ///locatie
                        width={41}
                        height={35}
                        fill="none"
                        top={-90}
                        left={61}
                        xmlns="http://www.w3.org/2000/svg"

                    >
                        <Path
                            d="M20.5 2.917c5.655 0 10.25 3.879 10.25 8.677 0 6.504-10.25 16.114-10.25 16.114s-10.25-9.61-10.25-16.114c0-4.798 4.595-8.677 10.25-8.677Zm0 5.833c-.906 0-1.775.307-2.416.854-.64.547-1 1.29-1 2.063 0 .773.36 1.515 1 2.062.64.547 1.51.854 2.416.854.906 0 1.775-.307 2.416-.854.64-.547 1-1.289 1-2.062 0-.774-.36-1.516-1-2.063-.64-.547-1.51-.854-2.416-.854Zm13.667 18.958c0 3.223-6.116 5.834-13.667 5.834-7.55 0-13.667-2.61-13.667-5.834 0-1.88 2.085-3.558 5.313-4.622l1.094 1.327c-1.845.656-2.99 1.56-2.99 2.566 0 2.013 4.595 3.646 10.25 3.646s10.25-1.633 10.25-3.646c0-1.006-1.145-1.91-2.99-2.566l1.094-1.328c3.229 1.065 5.313 2.742 5.313 4.623Z"
                            fill="#1B0B77"
                        />
                    </Svg>

                    <Svg
                    ///linie
                        width={304}
                        height={14}
                        left={60}
                        top={-90}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <G filter="url(#a)">
                            <Path stroke="#1B0B77" strokeWidth={1.5} d="M0 3.25h287" />
                        </G>
                        <Defs></Defs>
                    </Svg>

                    <Svg
                    ///calendar
                        width={41}
                        height={41}
                        fill="none"
                        top={-90}
                        left={60}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M20.5 23.917c-.484 0-.89-.164-1.216-.492a1.649 1.649 0 0 1-.492-1.217c0-.484.164-.89.492-1.218.326-.326.732-.49 1.216-.49s.89.163 1.218.49c.327.328.49.734.49 1.218s-.163.89-.49 1.217a1.654 1.654 0 0 1-1.218.492Zm-6.833 0c-.484 0-.89-.164-1.218-.492a1.652 1.652 0 0 1-.49-1.217c0-.484.163-.89.49-1.218.328-.326.734-.49 1.218-.49s.89.163 1.218.49c.327.328.49.734.49 1.218s-.163.89-.49 1.217a1.654 1.654 0 0 1-1.218.492Zm13.666 0c-.484 0-.89-.164-1.216-.492a1.649 1.649 0 0 1-.492-1.217c0-.484.164-.89.492-1.218.327-.326.732-.49 1.216-.49s.89.163 1.217.49c.328.328.492.734.492 1.218s-.164.89-.492 1.217a1.649 1.649 0 0 1-1.217.492ZM20.5 30.75c-.484 0-.89-.164-1.216-.492a1.649 1.649 0 0 1-.492-1.216c0-.484.164-.89.492-1.217a1.649 1.649 0 0 1 1.216-.492c.484 0 .89.164 1.218.492.327.327.49.733.49 1.217 0 .484-.163.89-.49 1.216a1.654 1.654 0 0 1-1.218.492Zm-6.833 0c-.484 0-.89-.164-1.218-.492a1.652 1.652 0 0 1-.49-1.216c0-.484.163-.89.49-1.217a1.654 1.654 0 0 1 1.218-.492c.484 0 .89.164 1.218.492.327.327.49.733.49 1.217 0 .484-.163.89-.49 1.216a1.654 1.654 0 0 1-1.218.492Zm13.666 0c-.484 0-.89-.164-1.216-.492a1.649 1.649 0 0 1-.492-1.216c0-.484.164-.89.492-1.217a1.649 1.649 0 0 1 1.216-.492c.484 0 .89.164 1.217.492.328.327.492.733.492 1.217 0 .484-.164.89-.492 1.216a1.649 1.649 0 0 1-1.217.492ZM8.542 37.583c-.94 0-1.745-.334-2.414-1.002a3.294 3.294 0 0 1-1.003-2.414V10.25c0-.94.334-1.744 1.003-2.412.67-.67 1.474-1.005 2.414-1.005h1.708V5.125c0-.484.163-.89.49-1.218.328-.327.734-.49 1.218-.49s.89.163 1.218.49c.327.328.49.734.49 1.218v1.708h13.667V5.125c0-.484.164-.89.492-1.218.327-.327.733-.49 1.217-.49.484 0 .89.163 1.216.49.328.328.492.734.492 1.218v1.708h1.708c.94 0 1.745.335 2.414 1.005a3.289 3.289 0 0 1 1.003 2.412v23.917c0 .94-.334 1.744-1.003 2.414a3.294 3.294 0 0 1-2.414 1.002H8.542Zm0-3.416h23.916V17.083H8.542v17.084Z"
                            fill="#1B0B77"
                        />
                    </Svg>
                   
                    <Svg
                    ///linie
                        width={304}
                        height={14}
                        left={60}
                        top={-90}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <G filter="url(#a)">
                            <Path stroke="#1B0B77" strokeWidth={1.5} d="M0 3.25h287" />
                        </G>
                        <Defs></Defs>
                    </Svg>
                </View>




                <View style={{top:'-10%'}}>
                    <Image source={ImagePath.dreptunghi21} style={styles.drept3} />
                    <Text style={{

                        fontFamily: "Mont",
                        fontSize: 20,
                        color: "#1B0B77",
                        left: 45,
                        top: -220,
                        width: 300,
                    }}
                    >
                        What are you going to do here:
                    </Text>
                    <Text style={{
                        fontFamily: "MontRegular",
                        fontSize: 18,
                        color: "#1B0B77",
                        left: 60,
                        top: -220,
                        width:330
                    }}
                    >
                        Voluntarii Preventis ne ajută să ajungem în fiecare lună la sute de elevi din Cluj și din afara Clujului
                    </Text>
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
    logo1: {
        alignSelf: 'center',
        top: 79,
    },
    butonas: {
        //position:'absolute',
        //flex:0.1,
        alignSelf: 'center',
      
        alignItems: "center",
        width: 353,
        left:'4%',
        top: 100,
    },
    drept1: {
        alignSelf: 'center',
        justifyContent: "center",
        top: 120,
    },
    drept2: {
        alignSelf: 'center',
        justifyContent: "center",
        top: 70,
    },
    drept3: {
        alignSelf: 'center',
        justifyContent: "center",
        top: -40,
    },
});
