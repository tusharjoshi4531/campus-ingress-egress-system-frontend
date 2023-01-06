import { StyleSheet, Text, View } from "react-native";
import RegisterCard from "../components/Options/RegisterCard";
import PrimaryButton from "../components/UI/buttons/PrimaryButton";

function OptionsScreen({ navigation }) {

  const registerCardPressHandler = () => {
    navigation.navigate("Register");
  }

  const cameraPressHandler = () => {
    navigation.navigate('Camera');
  }

  return (
    <View style={styles.container}>
      <RegisterCard title="Today's Register" onPress={registerCardPressHandler}>
        <Text>Hello</Text>
      </RegisterCard>
      <RegisterCard title="Unfinished Trips" onPress={registerCardPressHandler}>
        <Text>Hello</Text>
      </RegisterCard>
      <PrimaryButton onPress={cameraPressHandler}>Camera</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default OptionsScreen;
