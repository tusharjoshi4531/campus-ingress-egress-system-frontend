import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/UI/Card";
import PrimaryButton from "./components/UI/buttons/PrimaryButton";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterSceen";
import OptionsScreen from "./screens/OptionsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen/> */}
      <OptionsScreen/>
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
