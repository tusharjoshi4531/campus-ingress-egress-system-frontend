import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import RecordCard from "./RecordCard";

function RegisterList(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <RecordCard style={styles.recordCard}></RecordCard>
        </ScrollView>
      </View>

      {/* <RecordCard style={styles.recordCard2}></RecordCard>
      <RecordCard style={styles.recordCard3}></RecordCard> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  scrollArea: {
    width: 318,
    height: 552,
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea_contentContainerStyle: {
    height: 552,
    width: 318,
  },
  recordCard: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 318,
    height: 96,
  },
  recordCard2: {
    position: "absolute",
    left: 0,
    top: 96,
    width: 318,
    height: 96,
  },
  recordCard3: {
    position: "absolute",
    left: 0,
    top: 192,
    width: 318,
    height: 96,
  },
});

export default RegisterList;
