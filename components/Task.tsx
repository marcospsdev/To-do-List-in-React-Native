import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { useState } from "react";

type TaskProps = {
  text: string;
  initialCompleted: boolean;
};

export default function Task({ text, initialCompleted }: TaskProps) {
  const [completed, setCompleted] = useState(initialCompleted);
  return (
    <View style={style.rowContainer}>
      <Pressable onPress={() => setCompleted(!completed)}>
        <Ionicons
          name="checkmark-circle"
          size={32}
          color={completed ? colors.primary : "gray"}
        ></Ionicons>
      </Pressable>
      <Text>{text}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
});
