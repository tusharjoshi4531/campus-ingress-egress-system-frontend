import { View, StyleSheet } from "react-native";
import Colors from "../../global/Colors";
import Styles from "../../global/Styles";

const Card = ({ children, style }) => {
  return <View style={[styles.cardContainer, style, Styles.shadowLight]}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.base,
    borderRadius: 8,
    padding: 20,
    margin: 8,
  },
});

export default Card;
