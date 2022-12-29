import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FilterButton from "../components/FilterButton";
import RegisterList from "../components/RegisterList";

function RegisterScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.register}>Register</Text>
      <FilterButton style={styles.filterButton}></FilterButton>
      <RegisterList style={styles.registerList}></RegisterList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  },
  register: {
    color: "#121212",
    fontSize: 50,
    marginTop: 54,
    alignSelf: "center"
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
