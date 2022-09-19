import { Linking, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const About = () => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  return (
    <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>Sourajit</Text>
        <Text style={styles.paraStyle}>Education Tool</Text>
      <View>
        <Image style={styles.imgStyle} source={{uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About Me </Text>
        <Text style={styles.paraStyle}> {content} </Text>
      </View>
      <Text style={styles.mainHeader}>Follow Me on Socail Network</Text>
      <View  style={styles.menuContainer}>

      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() =>
        Linking.openURL("https://www.instagram.com/thapatechnical/")
      }>
      <Image
        style={styles.iconStyle}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
        }}
      />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() =>
        Linking.openURL(
          "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
        )
      }>
      <Image
        style={styles.iconStyle}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
        }}
      />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => Linking.openURL("https://discord.gg/AN8ThRBXtY")}>
      <Image
        style={styles.iconStyle}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
        }}
      />
    </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    // marginTop: 50,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Nunito_700Bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "red",
    paddingBottom: 30,
    fontFamily: "Nunito_700Bold",
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    // marginVertical: 30,
    marginTop: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Nunito_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Nunito_700Bold",
    lineHeight: 26,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About

