import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function FilterButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.filter}>Filter</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 318,
    height: 53,
    backgroundColor: "rgba(10,132,255,1)",
    borderRadius: 15
  },
  filter: {
    
    color: "#121212",
    fontSize: 20,
    marginTop: 16,
    marginLeft: 136
  }
});

export default FilterButton;
