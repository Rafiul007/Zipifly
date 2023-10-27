import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cfmPass, setcfmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const joinNow = () => {
    navigation.navigate("Signin");
  };

  const handleSignup = () => {
    //code for sign up
    alert("handle sign up")
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subTitle}>
          Enter your information below to join us
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="John William"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+8801XXXXXXXXX"
          value={phone}
          onChangeText={(text) => setPhone(text)}
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
      <View style={styles.passwordContainer}>
        <Text>Confirm Password</Text>
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

      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#000000" : undefined}
        />
        <Text style={styles.paragraph}>Accept to terms and conditions</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnTxt} onPress={handleSignup}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View style={styles.join}>
        <Text>Already have a account?</Text>
        <TouchableOpacity onPress={joinNow}>
          <Text style={styles.a}>Sign In</Text>
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
  infoContainer: {
    marginTop: 10,
  },
  button: {
    width: 350,
    height: 40,
    backgroundColor: "black",
    marginTop: 15,
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
    top: 32,
    right: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
    marginTop: 10,
    width: "100%",
    marginLeft: 25,
  },
  paragraph: {
    fontWeight: "600",
  },
  join: {
    flexDirection: "row",
    marginTop: 25,
  },
  a: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 2,
  },
});

export default Signup;
