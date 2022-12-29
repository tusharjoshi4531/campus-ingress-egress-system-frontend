import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

// Replace Name time and Rollno from props feilds.
// Also pass the proper props where ever it is used.
// Call the component by array.map at all the locations.

function RecordCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}></View>
      <Text style={styles.name}>Name</Text>
      <Text style={styles.rollNo}>Roll no</Text>
      <Text style={styles.time}>Time</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  rect2: {
    width: 318,
    height: 66,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    padding: 0,
    margin: 0,
    marginTop: 15,
    marginBottom: 15
  },
  name: {
    top: 40,
    left: 18,
    position: "absolute",
    
    color: "#121212",
    fontSize: 17,
    width: 141,
    height: 20
  },
  rollNo: {
    top: 40,
    left: 159,
    position: "absolute",
    
    color: "#121212",
    fontSize: 17
  },
  time: {
    top: 40,
    left: 234,
    position: "absolute",
    
    color: "#121212",
    fontSize: 17,
    width: 66,
    height: 20
  }
});

export default RecordCard;
