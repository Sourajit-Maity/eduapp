import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React , { useState } from 'react';
import Checkbox from 'expo-checkbox';

const Contact = ({navigation}) => {
  const [isChecked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    if(!name && !email && !phone && !message) {
      Alert.alert("Please fill all field");
    }
    else{
      Alert.alert(`Thank You ${name}`);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Contact for more</Text>
      <Text style={styles.description}>Contact us at soura@yopmail.com</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput  style={styles.inputStyle} 
          placeholder={"Your Name"}
          value = {name}
          onChangeText = {(userdata)=> setName(userdata)}
       />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Email</Text>
        <TextInput  style={styles.inputStyle} 
          placeholder={"Your Email"}
          value = {email}
          onChangeText = {(email)=> setEmail(email)}
       />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Mobile Number</Text>
        <TextInput  style={styles.inputStyle} 
          placeholder={"Your Mobile Number"}
          value = {phone}
          onChangeText = {(phone)=> setPhone(phone)}
       />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Message</Text>
        <TextInput  style={[styles.inputStyle, styles.multiLineStyle]} 
          placeholder={"Message Us"}
          value = {message}
          onChangeText = {(message)=> setMessage(message)}
          numberOfLines={5}
          multiline={true}
       />
      </View>

        <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>I have read and agree all conditions</Text>
      </View> 

      <TouchableOpacity style={[styles.paragraph,{
        backgroundColor: isChecked ? "#4630EB" : "grey"
      }]} 
      disabled={!isChecked}
      onPress = {submit} >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 25,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 24,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "Nunito_700Bold",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "Nunito_700Bold",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    // fontWeight: "bold",
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "Nunito_700Bold",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "Nunito_700Bold",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "Nunito_700Bold",
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 12,
  },
  checkbox: {
    margin: 5,
  },
});

export default Contact;

