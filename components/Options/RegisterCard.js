import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../../global/Colors";
import Styles from "../../global/Styles";

const RegisterCard = ({ children, title, onPress }) => {
  return (
    <Pressable
      style={[styles.container, Styles.shadowLight]}
      onPress={onPress}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    backgroundColor: Colors.baseDark,
    borderRadius: 16,
  },
  titleContainer: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});

export default RegisterCard;
