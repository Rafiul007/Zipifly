// AuthScreen.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const AuthScreen = ({ navigation }) => {
  const navigateToSignin = () => {
    navigation.navigate("Signin");
  };
  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headingcontainer}>
        <Text style={styles.heading}>Let's Start</Text>
      </View>
      <Image source={require("../assets/bg.png")} style={styles.bgImg} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnTxt} onPress={navigateToSignup}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnTxt} onPress={navigateToSignin}>
          Sign In
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingcontainer:{
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%"
  }
  ,
  heading:{
    fontSize:50,
    marginLeft: 35
  },
  bgImg: {
    width: 400,
    height: 400,
  },
  button: {
    width: 350,
    height: 40,
    backgroundColor: "black",
    marginTop: 10,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  btnTxt: {
    color: "white",
  },
});

export default AuthScreen;
