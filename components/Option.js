import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const Option = ({icon,txt}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={24} color="black" style={{
        left:20
      }}/>
      <Text style={styles.heading}>{txt}</Text>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    padding:5,
    width: 360,
    height: 70,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  heading: {
    fontSize: 16,
    left:50,
    fontWeight: "500"
  },
});
