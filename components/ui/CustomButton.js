import { Pressable, StyleSheet, Text } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const CustomButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e4e6eb",
    marginHorizontal: wp("8%"),
    borderRadius: 8,
    marginVertical: wp("4%"),
  },

  title: {
    color: "#121212",
    textAlign: "center",
    padding: wp("4%"),
  },
});
