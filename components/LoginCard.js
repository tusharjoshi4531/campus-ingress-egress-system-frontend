import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function LoginCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 280,
    height: 355,
    backgroundColor: "rgba(240,240,240,1)",
    borderRadius: 15
  }
});

export default LoginCard;
