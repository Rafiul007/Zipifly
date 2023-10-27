import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const joinNow = () => {
    navigation.navigate("Signup");
  };

  const handleSignin = () => {
    console.warn("Sign in completed");
    navigation.navigate("Home");
    // code for sign in logic
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subTitle}>Welcome back you have been missed</Text>
      </View>

      <View style={styles.emailContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.passwordContainer}>
        <Text>Password</Text>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="*************"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.passwordToggle}
        >
          <MaterialIcons
            name={showPassword ? "visibility" : "visibility-off"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnTxt} onPress={handleSignin}>
          Sign In
        </Text>
      </TouchableOpacity>

      <View style={styles.join}>
        <Text>Don't have a account?</Text>
        <TouchableOpacity onPress={joinNow}>
          <Text style={styles.a}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 1,
  },
  subTitle: {
    fontSize: 12,
    marginBottom: 20,
    color: "#CACACA",
  },
  input: {
    width: 350,
    height: 40,
    borderColor: "black",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    marginTop: 4,
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
  passwordContainer: {
    position: "relative",
    marginTop: 10,
  },
  passwordInput: {
    paddingRight: 40,
  },
  passwordToggle: {
    position: "absolute",
    top: 30,
    right: 10,
  },
  join: {
    flexDirection: "row",
    marginTop: 50,
  },
  a: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 2,
  },
});

export default Signin;
