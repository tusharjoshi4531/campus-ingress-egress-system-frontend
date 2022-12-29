import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TodaysRegisterCard from "../components/TodaysRegisterCard";
import IncompleteTripsCard from "../components/IncompleteTripsCard";
import CameraButton from "../components/CameraButton";

function OptionsScreen(props) {
  return (
    <View style={styles.container}>
      <TodaysRegisterCard
        style={styles.todaysRegisterCard}
      ></TodaysRegisterCard>
      <IncompleteTripsCard
        style={styles.incompleteTripsCard}
      ></IncompleteTripsCard>
      <CameraButton style={styles.cameraButton}></CameraButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  },
  todaysRegisterCard: {
    height: 282,
    width: 330,
    marginTop: 55
  },
  incompleteTripsCard: {
    height: 282,
    width: 330,
    marginTop: 16
  },
  cameraButton: {
    height: 57,
    width: 330,
    backgroundColor: "#fff",
    marginTop: 38
  }
});

export default OptionsScreen;
