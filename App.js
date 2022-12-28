import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/UI/Card";
import PrimaryButton from "./components/UI/PrimaryButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Text>Hello</Text>
        <PrimaryButton>Press</PrimaryButton>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
