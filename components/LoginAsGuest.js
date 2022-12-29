import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function LoginAsGuest(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.rect4}>
          <View style={styles.group8}>
            <View style={styles.group7}>
              <Text style={styles.text}>Login as Guest</Text>
            </View>
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
    height: 38
  },
  rect4: {
    width: 187,
    height: 38,
    backgroundColor: "rgba(10,132,255,1)",
    borderRadius: 10
  },
  group8: {
    width: 132,
    height: 24,
    marginTop: 7,
    marginLeft: 28
  },
  group7: {
    width: 132,
    height: 24
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  }
});

export default LoginAsGuest;
