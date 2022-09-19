import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu'
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import {
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Home = (props) => {
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    let [fontsLoaded] = useFonts({
        JosefinSans_700Bold,
        Nunito_700Bold,
      });
      if (!fontsLoaded) {
        <AppLoading />;
      }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
          <Image style={styles.headerImage} resizeMode="contain" source={require('../../assets/logo.jpeg')}/>
          <Text style={styles.mainHeader}> Welcome to </Text>
          <Text style={styles.subHeader}>{props.channelName}</Text>
          <Text style={[styles.paraStyle, {fontSize:18, color:"#4c5dab", marginTop:10}]}>{description}</Text>
        </View>
        <View style={styles.menuStyle}>
            <View style={[styles.lineStyle, {marginVertical:5}]}></View>
                <Menu />
            <View style={[styles.lineStyle, {marginVertical:5}]}></View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      backgroundColor: "#fff",
      textAlign: "center",
    },
  
    homeTop: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
    },
  
    headerImage: {
      height: undefined,
      width: "100%",
      aspectRatio: 1,
      display: "flex",
      alignItems: "stretch",
      marginTop: 50,
      borderRadius: 20,
    },
  
    mainHeader: {
      fontSize: 30,
      color: "#344055",
      textTransform: "uppercase",
      fontFamily: "Nunito_700Bold",
    },
  
    paraStyle: {
      textAlign: "left",
      fontSize: 18,
      color: "#7d7d7d",
      marginTop: 30,
      paddingBottom: 50,
      lineHeight: 27,
      fontFamily: "JosefinSans_700Bold",
    },
  
    lineStyle: {
      marginBottom: 10,
      borderWidth: 0.5,
      borderColor: "grey",
    },
  });

export default Home

