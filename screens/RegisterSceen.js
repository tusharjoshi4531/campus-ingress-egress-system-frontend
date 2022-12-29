import React from "react";
import { StyleSheet, View, Text } from "react-native";
import RegisterList from "../components/Register/RegisterList";
import PrimaryButton from "../components/UI/buttons/PrimaryButton";
import Divider from "../components/UI/Divider";

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <PrimaryButton>Filter</PrimaryButton>
      <Divider />
      <RegisterList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    padding: 16,
  },
  title: {
    margin: 20,
    fontSize: 42,
    textAlign: "center",
  },
  filterButton: {
    height: 53,
    width: 318,
    marginTop: 33
  },
  registerList: {
    height: 552,
    width: 318,
    marginTop: 26
  }
});

export default RegisterScreen;
