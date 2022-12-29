import { TextInput, View, StyleSheet } from "react-native";

const PrimaryTextInput = ({ placeholder }) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginVertical: 8,
    backgroundColor: "white",
    padding: 4,
  },
});

export default PrimaryTextInput;
