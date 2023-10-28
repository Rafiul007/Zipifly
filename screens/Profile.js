import { View, Text,  StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";
const Search = () => {
  return (
    <SafeAreaView style={styles.blackContainer}>
      <View
        style={{
          alignItems: "center",
          top:80
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight:"500" }}>My Profile</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 20,
          alignItems: "center",
          top:90
        }}
      >
        <Ionicons name="person-circle-outline" size={60} color="white" />
        <View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "600",
              fontSize: 25,
            }}
          >
            Abbas Uddin
          </Text>
          <Text
            style={{
              
              color: "#fff",
              fontWeight: "400",
              fontSize: 12,
              color: "grey"
            }}
          >
            +8800 17-XXX-XXXXX
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
  blackContainer: {
    width: "100%",
    backgroundColor: "black",
    height: "30%",
  },
});

export default Search