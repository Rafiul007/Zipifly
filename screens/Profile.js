import { View, Text,  StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";
import Option from '../components/Option';

const Search = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.blackContainer}>
        <View
          style={{
            alignItems: "center",
            top: 50,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>
            My Profile
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginVertical: 20,
            alignItems: "center",
            top: 40,
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
                color: "grey",
              }}
            >
              +8800 17-XXX-XXXXX
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            left: 30,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          General
        </Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 15,
          }}
        >
          <Option icon={"ios-lock-closed"} txt={"Change Password"} />
          <Option icon={"at-circle"} txt={"User code"} />
          <Option icon={"ios-location-sharp"} txt={"Address"} />
          <Option icon={"notifications"} txt={"Notification"} />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            left: 30,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          Others
        </Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 15,
          }}
        >
          <Option icon={"ios-lock-closed"} txt={"Change Password"} />
          <Option icon={"at-circle"} txt={"User code"} />
        </View>
      </View>
    </View>
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
    height: "25%",
  },
});

export default Search