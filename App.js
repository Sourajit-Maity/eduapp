import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import About from './src/screens/About';
import Course from './src/screens/Course';
import CourseDetails from './src/screens/CourseDetails';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserData from './src/screens/UserData';
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import {
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    JosefinSans_700Bold,
    Nunito_700Bold,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        {/*Home Screen*/}
        <Stack.Screen name="Home" options={{headerShown:false}}>
        {(props)=><Home {...props} channelName={"Education App"}/>}
        </Stack.Screen>
        <Stack.Screen name="Course" component={Course} options={{headerTitleStyle:{fontSize:25, fontFamily: "Nunito_700Bold",},headerTitle:"Courses",headerTitleAlign:"center"}} />
        <Stack.Screen name="Students" component={UserData} options={{headerTitleStyle:{fontSize:25, fontFamily: "Nunito_700Bold",},headerTitle:"Students",headerTitleAlign:"center"}}/>
        <Stack.Screen name="About" component={About} options={{headerTitleStyle:{fontSize:25, fontFamily: "Nunito_700Bold",},headerTitle:"About",headerTitleAlign:"center"}}/>
        <Stack.Screen name="Contact" component={Contact} options={{headerTitleStyle:{fontSize:25, fontFamily: "Nunito_700Bold",},headerTitle:"Contact",headerTitleAlign:"center"}}/>
        <Stack.Screen name="CourseDetails" component={CourseDetails} options={{headerTitleStyle:{fontSize:25, fontFamily: "Nunito_700Bold",},headerTitle:"Course Details",headerTitleAlign:"center"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
 