import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../../global/Colors";

const RegisterCard = ({ children, title }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
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
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.baseDark,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  }
});

export default RegisterCard;
