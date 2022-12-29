import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function LoginButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.group2}>
          <View style={styles.group}>
            <Text style={styles.login2}>Login</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 187,
    height: 38,
    backgroundColor: "rgba(10,132,255,1)",
    borderRadius: 10
  },
  group2: {
    width: 49,
    height: 24,
    marginTop: 7,
    marginLeft: 69
  },
  group: {
    width: 49,
    height: 24
  },
  login2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  }
});

export default LoginButton;
