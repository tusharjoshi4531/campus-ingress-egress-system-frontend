import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function EmailInput(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect4}>
        <TextInput
          placeholder="Email"
          dataDetector="none"
          style={styles.textInput3}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect4: {
    width: 187,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 162,
    height: 21,
    marginTop: 9,
    marginLeft: 13
  }
});

export default EmailInput;
