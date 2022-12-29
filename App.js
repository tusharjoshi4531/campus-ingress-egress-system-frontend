import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Card from "./components/UI/Card";
import PrimaryButton from "./components/UI/buttons/PrimaryButton";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterSceen";
import OptionsScreen from "./screens/OptionsScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LoginScreen /> */}
      <RegisterScreen/>
      {/* <OptionsScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
