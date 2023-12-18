import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from "@expo/vector-icons";
import DeliveryStepper from './DeliveryStepper';
const Order = ({orderid, status,date,from,to}) => {
  const [currentStep, setCurrentStep] = useState(4);
  
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <View style={styles.dlvryHead}>
          <View style={{ marginLeft: 5, marginTop: 5 }}>
            <Image
              source={require("../assets/icons/2.png")}
              style={styles.ipic}
            />
          </View>

          <View style={styles.orderTitle}>
            <Text style={styles.orderID}>{orderid}</Text>
            <Text>{status} | {date}</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={16} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.prgsbar}>
          <DeliveryStepper currentStep={currentStep} />
        </View>
        <View>
          <View style={styles.u}>
            <Text style={styles.t}>{from}</Text>
            <Text style={styles.t}>{to}</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Order

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: 165,
    width: 350,
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  dlvryHead: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    marginTop: 5,
    paddingHorizontal: 8,
  },
  ipic: {
    width: 25,
    height: 25,
  },
  orderTitle: {
    marginLeft: 20,
  },
  orderID: {
    fontSize: 20,
    fontWeight: "600",
  },
  prgsbar: {
    marginTop: 10,
  },
  u: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
  },
});