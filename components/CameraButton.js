import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function CameraButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect11}>
        <Text style={styles.camera}>Camera</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect11: {
    width: 330,
    height: 57,
    backgroundColor: "rgba(10,132,255,1)",
    borderRadius: 15
  },
  camera: {
    
    color: "#121212",
    fontSize: 20,
    marginTop: 16,
    marginLeft: 131
  }
});

export default CameraButton;
