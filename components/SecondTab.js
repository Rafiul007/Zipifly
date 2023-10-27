import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const SecondTab = () => {
  return (
    <View style={styles.nav}>
      {/* ---------------------1 */}
      <TouchableOpacity style={styles.icon}>
        <Image source={require("../assets/icons/1.png")} style={styles.ipic} />
        <Text style={styles.itxt}>Pickup</Text>
      </TouchableOpacity>
      {/* ---------------------2 */}
      <TouchableOpacity style={styles.icon}>
        <Image source={require("../assets/icons/2.png")} style={styles.ipic} />
        <Text style={styles.itxt}>Drop off</Text>
      </TouchableOpacity>
      {/* ---------------------3 */}
      <TouchableOpacity style={styles.icon}>
        <Image source={require("../assets/icons/3.png")} style={styles.ipic} />
        <Text style={styles.itxt}>Rates</Text>
      </TouchableOpacity>
      {/* ---------------------4 */}
      <TouchableOpacity style={styles.icon}>
        <Image source={require("../assets/icons/4.png")} style={styles.ipic} />
        <Text style={styles.itxt}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondTab;

const styles = StyleSheet.create({
  nav: {
    width: "90%",
    height: 60,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    flexDirection: "column",
    justifyContent: "center",
    width: "25%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ipic: {
    width: 30,
    height: 30,
  },
  itxt: {
    fontSize: 12,
  },
});
