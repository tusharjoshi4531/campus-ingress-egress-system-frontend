import { FlatList, Text, View, StyleSheet } from "react-native";
import RecordCard from "./RecordCard";

const RegisterList = () => {
  const data = [
    {
      rollNo: "123",
      name: "hello",
      outTime: "12:20",
      inTime: "14:00",
      completed: true,
    },
    { rollNo: "153", name: "heo", outTime: "12:10" },
    { rollNo: "53", name: "heo", outTime: "12:10" },
    { rollNo: "o153", name: "heo", outTime: "12:10" },
    { rollNo: "1253", name: "heo", outTime: "12:10" },
    { rollNo: "1r3", name: "heo", outTime: "12:10" },
    { rollNo: "15eg3", name: "heo", outTime: "12:10" },
    { rollNo: "15w3", name: "heo", outTime: "12:10" },
    { rollNo: "15e3", name: "heo", outTime: "12:10" },
    { rollNo: "15g3", name: "heo", outTime: "12:10" },
  ];

  return (
    <View
      style={{
        height: "80%",
      }}
    >
      <View style={styles.registerHeader}>
        <Text style={styles.registerHeaderText}>Roll No</Text>
        <Text style={styles.registerHeaderText}>Name</Text>
        <Text style={styles.registerHeaderText}>Out Time</Text>
        <Text style={styles.registerHeaderText}>In Time</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <RecordCard data={item} />}
        keyExtractor={(item) => item.rollNo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  registerHeader: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 4
  },
  registerHeaderText: {
    flex: 1,
  },
});

export default RegisterList;
