import { Pressable, StyleSheet, View, Text, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { useState } from "react";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";

type TaskProps = {
  text: string;
  initialCompleted: boolean;
  deleteTask: any;
};

export default function Task({
  text,
  initialCompleted,
  deleteTask,
}: TaskProps) {
  const [completed, setCompleted] = useState(initialCompleted);
  const swipe = new Animated.Value(0);

  const handleFling = (event: any) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Animated.timing(swipe, {
        toValue: 500,
        duration: 300,
        useNativeDriver: true,
      }).start(() => deleteTask);
    }
  };

  return (
    <FlingGestureHandler
      direction={Directions.RIGHT}
      onHandlerStateChange={handleFling}
    >
      <Animated.View
        style={[style.rowContainer, { transform: [{ translateX: swipe }] }]}
      >
        <Pressable onPress={() => setCompleted(!completed)}>
          <Ionicons
            name="checkmark-circle"
            size={32}
            color={completed ? colors.primary : "gray"}
          ></Ionicons>
        </Pressable>
        <Text>{text}</Text>
      </Animated.View>
    </FlingGestureHandler>
  );
}

const style = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    elevation: 3, // Android
    shadowColor: "#000000", // iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
});
