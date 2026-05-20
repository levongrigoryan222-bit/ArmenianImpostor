import { Text } from "react-native";

const words = [
  {
    armenian: "Բառև",
    english: "Hello",
    options: ["Hello","Goodbye","Thank you","Water"]
  },
  {
    armenian: "Ջուր",
    english: "Water",
    options: ["Bread","Water","Book","House"]
  },
];

export default function HomeScreen() {
  return (
    <Text> {words[0].armenian} </Text>
  )
};
