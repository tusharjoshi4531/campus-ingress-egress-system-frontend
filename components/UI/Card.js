import { View, StyleSheet } from "react-native";
import Colors from "../../global/Colors";

const Card = ({ children, style }) => {
  return <View style={[styles.cardContainer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.base,
    borderRadius: 16,
    padding: 20,
    margin: 8,
  },
});

export default Card;
