import { Text, StyleSheet, View } from "react-native";
import Colors from "../../global/Colors";
import Card from "../UI/Card";

const RecordCard = ({ data }) => {
  let cardStyle = styles.card;
  let textStyle = styles.textData;
  let textContainerStyle = styles.textContainer;
  let dividerStyle = styles.divider;

  if (data.inTime) {
    cardStyle = styles.cardCompleted;
    textStyle = styles.textDataCompleted;
    textContainerStyle = styles.textContainerCompleted;
    dividerStyle = styles.dividerCompleted;
  }

  return (
    <Card style={cardStyle}>
      <View style={[textContainerStyle, {flex: 3}]}>
        <Text style={textStyle}>{data.rollNo}</Text>
      </View>
      <View style={[dividerStyle, textContainerStyle, {flex: 4}]}>
        <Text style={textStyle}>{data.name}</Text>
      </View>
      <View style={[dividerStyle, textContainerStyle]}>
        <Text style={textStyle}>{data.outTime}</Text>
      </View>
      <View style={[dividerStyle, textContainerStyle]}>
        <Text style={textStyle}>{data.inTime}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    flexDirection: "row",
  },
  textContainer:{
    flex: 2,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  textData: {
    color: "black",
    fontSize: 14,
  },
  divider: {
    borderLeftWidth: 1,
    borderColor: "black",
  },
  cardCompleted: {
    marginHorizontal: 10,
    flexDirection: "row",
    backgroundColor: Colors.success,
  },
  textContainerCompleted:{
    flex: 2,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  textDataCompleted: {
    color: "white",
    fontSize: 14,
  },
  dividerCompleted: {
    borderLeftWidth: 1,
    borderColor: "white",
  },
});

export default RecordCard;
