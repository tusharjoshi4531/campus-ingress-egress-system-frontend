import { Text, StyleSheet, View } from "react-native";
import Colors from "../../global/Colors";
import Card from "../UI/Card";

const RecordCard = ({ data }) => {
  let cardStyle = styles.card;
  let textStyle = styles.textData;
  let textContainerStyle = styles.textContainer;
  let dividerStyle = styles.divider;

  if (data.completed) {
    cardStyle = styles.cardCompleted;
    textStyle = styles.textDataCompleted;
    textContainerStyle = styles.textContainerCompleted;
    dividerStyle = styles.dividerCompleted;
  }

  return (
    <Card style={cardStyle}>
      <View style={textContainerStyle}>
        <Text style={textStyle}>{data.name}</Text>
      </View>
      <View style={[dividerStyle, textContainerStyle]}>
        <Text style={textStyle}>{data.rollNo}</Text>
      </View>
      <View style={[dividerStyle, textContainerStyle]}>
        <Text style={textStyle}>{data.time}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 0,
    flexDirection: "row",
  },
  textContainer:{
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  textData: {
    color: "black",
    fontSize: 18,
  },
  divider: {
    borderLeftWidth: 1,
    borderColor: "black",
  },
  cardCompleted: {
    marginHorizontal: 0,
    flexDirection: "row",
    backgroundColor: Colors.success,
  },
  textContainerCompleted:{
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  textDataCompleted: {
    color: "white",
    fontSize: 18,
  },
  dividerCompleted: {
    borderLeftWidth: 1,
    borderColor: "white",
  },
});

export default RecordCard;