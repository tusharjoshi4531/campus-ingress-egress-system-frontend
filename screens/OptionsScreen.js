import { StyleSheet, Text, View } from "react-native";
import RegisterCard from "../components/Options/RegisterCard";
import PrimaryButton from "../components/UI/buttons/PrimaryButton";

function OptionsScreen() {
  return (
    <View style={styles.container}>
      <RegisterCard title="Today's Register">
        <Text>Hello</Text>
      </RegisterCard>
      <RegisterCard title="Unfinished Trips">
        <Text>Hello</Text>
      </RegisterCard>
      <PrimaryButton>Camera</PrimaryButton>
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
