import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import RecordCard from "./RecordCard";

function IncompleteTripsCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect6}>
        <RecordCard style={styles.recordCard2}></RecordCard>
        <RecordCard style={styles.recordCard1}></RecordCard>
      </View>
      <View style={styles.rect10}>
        <Text style={styles.incompleteTrips}>Incomplete Trips</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect6: {
    width: 330,
    height: 225,
    backgroundColor: "rgba(208,206,206,1)",
    borderRadius: 15,
    marginTop: 57
  },
  recordCard2: {
    width: 318,
    height: 96,
    marginTop: 16,
    marginLeft: 5
  },
  recordCard1: {
    width: 318,
    height: 96,
    marginLeft: 5
  },
  rect10: {
    width: 330,
    height: 57,
    backgroundColor: "rgba(10,132,255,1)",
    borderRadius: 15,
    marginTop: -282
  },
  incompleteTrips: {
    
    color: "#121212",
    fontSize: 20,
    marginTop: 16,
    marginLeft: 91
  }
});

export default IncompleteTripsCard;
