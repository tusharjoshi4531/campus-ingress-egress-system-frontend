import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import LoginCard from "./LoginCard";

function CardLogin(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.loginCardStack}>
        <LoginCard style={styles.loginCard}></LoginCard>
        <Text style={styles.login}>Login</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  loginCard: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 355,
    width: 280,
    backgroundColor: "#fff"
  },
  login: {
    top: 27,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 50,
    left: 78
  },
  loginCardStack: {
    width: 280,
    height: 355
  }
});

export default CardLogin;
