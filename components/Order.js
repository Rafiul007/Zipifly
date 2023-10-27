import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Order = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.dlvryHead}>
          <View style={{ marginLeft: 5, marginTop:5 }}>
            <Image
              source={require("../assets/icons/2.png")}
              style={styles.ipic}
            />
          </View>
          <View style={styles.orderTitle}>
            <Text style={styles.orderID}>#MRFA007RSR</Text>
            <Text>on the way | 13 September 2023</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Order

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 2,
    height: 150,
    width: 350,
    backgroundColor: "#fff"
  },
  dlvryHead:{
    flexDirection:"row" ,
    alignItems:"flex-start",
    justifyContent:"space-between",
    marginTop: 5,
    paddingHorizontal: 8,
  },
  ipic: {
    width: 25,
    height: 25,
  },
  orderTitle:{
    marginLeft:20
  },
  orderID:{
    fontSize: 20,
    fontWeight: "600",
  }
});