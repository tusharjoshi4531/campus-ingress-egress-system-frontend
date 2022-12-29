import { Pressable, View, StyleSheet, Text } from "react-native";
import Colors from "../../../global/Colors";

const PrimaryButton = ({ children, onPress, style }) => {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "white" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 8,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary,
    padding: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
});

export default PrimaryButton;
