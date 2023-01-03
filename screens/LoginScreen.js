import { Text, View, StyleSheet } from "react-native";
import Card from "../components/UI/Card";
import PrimaryButton from "../components/UI/buttons/PrimaryButton";
import PrimaryTextInput from "../components/UI/PrimaryTextInput";
import PrimaryButtonGroup from "../components/UI/buttons/PrimaryButtonGroup";

const LoginScreen = ({ navigation }) => {
  const buttonGroupItems = [
    { text: "Faculty", id: "fac" },
    { text: "Gaurd", id: "grd" },
  ];

  const loginPressHandler = () => {
    console.log("Login");
    navigation.navigate("Options");
  };

  const loginTypeSelectHandler = (id) => {
    console.log(id);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.loginFormContainer}>
        <Text style={styles.title}>LOGIN</Text>
        <PrimaryTextInput placeholder="Email" />
        <PrimaryTextInput placeholder="Password" />
        <PrimaryButton onPress={loginPressHandler}>Login</PrimaryButton>
        <PrimaryButtonGroup
          groupItems={buttonGroupItems}
          onSelect={loginTypeSelectHandler}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginFormContainer: {
    width: "50%",
    maxWidth: 300,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
  },
});

export default LoginScreen;
