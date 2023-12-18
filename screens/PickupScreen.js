import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
const PickupScreen = () => {
  const [parcel, setParcel] = useState([
    {
      id: "",
      sendercode: "",
      receivercode: "",
      weight: 0,
      category: "",
      applicable: "",
      payment: 0,
    },
  ]);
  //random code generator
  const generateRandomCode = () => {
    const generateRandomPart = (length, isNumber) => {
      const characters = isNumber ? "0123456789" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let randomPart = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomPart += characters.charAt(randomIndex);
      }
      return randomPart;
    };

    const numericPart = generateRandomPart(2, true);
    const alphabeticPart = generateRandomPart(4, false);
    const secondNumericPart = generateRandomPart(2, true);

    return numericPart + alphabeticPart + secondNumericPart;
  };
  //handle pickup Request function
  const handlePickupRequest = () => {
    const randomCode = generateRandomCode();
    parcel.id = randomCode;
    console.log(parcel);

    //POST request to database
    // database saving logic.
    // random id generator for percel id
  };
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.heading}>Pick Up</Text>

        <View style={styles.inputContainer}>
          <Text style={{ fontWeight: "500" }}>Your Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Sender Code"
            value={parcel}
            onChangeText={(text) => setParcel({ ...parcel, sendercode: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{ fontWeight: "500" }}>Receive Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Receiver Code"
            value={parcel}
            onChangeText={(text) =>
              setParcel({ ...parcel, receivercode: text })
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{ fontWeight: "500" }}>Weight</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="kg"
            value={parcel}
            onChangeText={(text) =>
              setParcel({ ...parcel, weight: parseInt(text) })
            }
          />
        </View>

        <View style={{ width: 350, marginBottom: 10 }}>
          <Text style={{ fontWeight: "500" }}>Select Category</Text>
          <View style={styles.pickerbox}>
            <Picker
              selectedValue={parcel.category}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setParcel({ ...parcel, category: itemValue })
              }
            >
              <Picker.Item
                label="Paper"
                value="Paper"
                style={styles.pickerItem}
              />
              <Picker.Item
                label="Glass"
                value="Glass"
                style={styles.pickerItem}
              />
              <Picker.Item
                label="Cloth"
                value="Cloth"
                style={styles.pickerItem}
              />
              <Picker.Item
                label="Electronics"
                value="Electronics"
                style={styles.pickerItem}
              />
              <Picker.Item
                label="Others"
                value="Others"
                style={styles.pickerItem}
              />
            </Picker>
          </View>
        </View>

        <View style={{ width: 350, marginBottom: 10 }}>
          <Text style={{ fontWeight: "500" }}>Select if applicable</Text>
          <View style={styles.pickerbox}>
            <Picker
              selectedValue={parcel.applicable}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setParcel({ ...parcel, applicable: itemValue })
              }
            >
              <Picker.Item label="N/A" value="N/A" style={styles.pickerItem} />
              <Picker.Item
                label="Fragile"
                value="Fragile"
                style={styles.pickerItem}
              />
              <Picker.Item
                label="Liquid"
                value="Liquid"
                style={styles.pickerItem}
              />
              <Picker.Item
                label="Frozen"
                value="Frozen"
                style={styles.pickerItem}
              />
            </Picker>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt} onPress={handlePickupRequest}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PickupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    marginTop: 35,
    fontWeight: "600",
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
  label: {
    fontSize: 10,
    fontWeight: "bold",
  },
  picker: {
    width: "100%",
    height: 40,
  },
  pickerbox: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
  },
  pickerItem: {
    fontSize: 14,
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
