import { View, StyleSheet } from "react-native"
import Colors from "../../global/Colors"

const Divider = () => {
  return (
    <View style={styles.divider} />
  )
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: Colors.baseDark,
    marginVertical: 8,
    borderRadius: 5,
    height: 3
  }
})

export default Divider
