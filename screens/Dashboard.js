import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import SecondTab from "../components/SecondTab";
import Order from "../components/Order";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.blackContainer}>
        <View style={styles.location}>
          <Ionicons name="location-sharp" size={25} color="black" />
          <Text>Uttara, Dhaka</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let's track your package</Text>
          <Text style={styles.subtitle}>Please enter your tracking number</Text>
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="#XXXXXXXXXX"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          <TouchableOpacity style={styles.searchicon}>
            <Image
              source={require("../assets/icons/search.png")}
              style={styles.ipic}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tab}>
          <SecondTab />
        </View>
      </SafeAreaView>

      <View style={{justifyContent:"center",alignItems:"center",marginTop:100}}>
        <Order/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
  input: {
    height: 40,
    borderColor: "white",
    borderRadius: 15,
    backgroundColor: "white",
    width: "90%",
    marginVertical: 8,
    paddingHorizontal: 15,
    marginLeft: 10,
    marginRight: 10,
    position: "relative",
  },
  searchicon: {
    borderColor: "white",
    position: "absolute",
    top: 18,
    right: 40,
  },
  blackContainer: {
    width: "100%",
    backgroundColor: "black",
    height: "40%",
  },
  tab: {
    position: "relative",
    top: 30,
    left: 20,
  },
  ipic:{
    width: 20,
    height: 20,
  },
  titleContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    color: "#ffffff",
    width: "100%",
  },
  subtitle: {
    fontSize: 14,
    color: "#CACACA",
  },
  search: {
    alignItems: "center",
    marginTop: 20,
  },
  location: {
    backgroundColor: "#CACACA",
    height: 35,
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 20,
    marginTop: 50,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

export default Dashboard;
