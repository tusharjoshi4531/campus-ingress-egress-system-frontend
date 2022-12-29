import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import RecordCard from "./RecordCard";

function TodaysRegisterCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <RecordCard style={styles.recordCard}></RecordCard>
        <RecordCard style={styles.recordCard2}></RecordCard>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.todaysRegister}>Today&#39;s Register</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 330,
    height: 225,
    backgroundColor: "rgba(208,206,206,1)",
    borderRadius: 15,
    marginTop: 57
  },
  recordCard: {
    width: 318,
    height: 96,
    marginTop: 16,
    marginLeft: 5
  },
  recordCard2: {
    width: 318,
    height: 96,
    marginLeft: 5
  },
  rect2: {
    width: 330,
    height: 57,
    backgroundColor: "rgba(10,132,255,1)",
    borderRadius: 15,
    marginTop: -282
  },
  todaysRegister: {
    
    color: "#121212",
    fontSize: 20,
    marginTop: 16,
    marginLeft: 91
  }
});

export default TodaysRegisterCard;
