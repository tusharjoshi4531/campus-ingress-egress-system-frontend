import { FlatList, View } from "react-native";
import RecordCard from "./RecordCard";

const RegisterList = () => {
  const data = [
    { rollNo: "123", name: "hello", time: "12:20", completed: true },
    { rollNo: "153", name: "heo", time: "12:10" },
    { rollNo: "53", name: "heo", time: "12:10" },
    { rollNo: "o153", name: "heo", time: "12:10" },
    { rollNo: "1253", name: "heo", time: "12:10" },
    { rollNo: "1r3", name: "heo", time: "12:10" },
    { rollNo: "15eg3", name: "heo", time: "12:10" },
    { rollNo: "15w3", name: "heo", time: "12:10" },
    { rollNo: "15e3", name: "heo", time: "12:10" },
    { rollNo: "15g3", name: "heo", time: "12:10" },
  ];

  return (
    <View style={{
      height: "80%"
    }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <RecordCard data={item} />}
        keyExtractor={(item) => item.rollNo}
      />
    </View>
  );
};

export default RegisterList;
