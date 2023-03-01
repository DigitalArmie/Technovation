import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import ImagePath from "../constants/ImagePath";

export default function Home({ navigation }) {
    const [fontsLoaded] = useFonts({
        Mont: require("../assets/fonts/Montserrat-SemiBold.ttf"),
        Montt: require("../assets/fonts/Montserrat-Bold.ttf"),

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
                            fontFamily: "Montt",
                            fontSize: 30,
                            color: "#1B0B77",
                        }}
                        >
                            Nume Event</Text>
                  
                </View>
                </View>
                <View>
                    <Image source={ImagePath.dreptunghi21} style={styles.drept1} />
                    <Text style={{
                        fontFamily: "Montt",
                        fontSize: 20,
                        color: "#1B0B77",
                        left: 29,
                        top: -60,
                    }}
                    >
                        Descriere event:
                    </Text>
                    <Text style={{
                        fontFamily: "Mont",
                        fontSize: 18,
                        color: "#1B0B77",
                        left: 29,
                        top: -60,
                    }}
                    >
                        event pentru
                    </Text>
                </View>

                <View>
                    <Image source={ImagePath.dreptunghi21} style={styles.drept2} />
                    <Text style={{
                        fontFamily: "Montt",
                        fontSize: 20,
                        color: "#1B0B77",
                        left: 29,
                        top: -110,
                    }}
                    >
                        Location and time:
                    </Text>
                    <Image source={ImagePath.location}  style={{left:41, top:-80}} />
                    <Image style={{left:35, top:-80}} source={ImagePath.linemoney} />
                    <Image source={require('../assets/Images/calendar.png')} style={{left:41, top:-80}} />
                    <Image style={{left:35, top:-80}} source={ImagePath.linemoney} />
                </View>
                
                    
                

                <View>
                    <Image source={ImagePath.dreptunghi21} style={styles.drept3} />
                    <Text style={{
                        
                        fontFamily: "Montt",
                        fontSize: 20,
                        color: "#1B0B77",
                        left:29,
                        top: -220,
                        width:300,
                    }}
                    >
                        What are you going to do here:
                    </Text>
                    <Text style={{
                        fontFamily: "Mont",
                        fontSize: 18,
                        color: "#1B0B77",
                        left: 29,
                        top: -220,
                    }}
                    >
                        event pentru
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
        justifyContent: "center",
        alignItems: "center",
        width: 253,
        height: 71,
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
