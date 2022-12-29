import { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Colors from "../../../global/Colors";

const PrimaryButtonGroup = ({ groupItems, onSelect }) => {
  const [selected, setSelected] = useState("");

  const buttonPressHandler = (id) => {
    setSelected(id);
    if(onSelect !== null && selected !== id) onSelect(id);
  }

  const buttons = groupItems.map((item, index) => (
    <Pressable
      style={
        index === 0 ? styles.button : [styles.button, styles.buttonSeparator]
      }
      onPress={buttonPressHandler.bind(this, item.id)}
    >
      <Text
        style={
          selected === item.id
            ? styles.buttonTextSelected
            : styles.buttonTextUnselected
        }
      >
        {item.text}
      </Text>
    </Pressable>
  ));

  return <View style={styles.buttonContainer}>{buttons}</View>;
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 8,
    flexDirection: "row",
    backgroundColor: Colors.primary,
  },
  button: {
    marginVertical: 8,
    flexGrow: 1,
  },
  buttonTextUnselected: {
    color: "lightgray",
    textAlign: "center",
  },
  buttonTextSelected: {
    color: "white",
    textAlign: "center",
  },
  buttonSeparator: {
    borderColor: "white",
    borderLeftWidth: 1,
  },
});

export default PrimaryButtonGroup;
