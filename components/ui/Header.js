import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CHOOSE A STYLE THAT PERFECTLY</Text>
      <Text style={styles.text}>SUITS YOU</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginVertical: wp("10%"),
  },

  text: {
    color: "#b3b3b3",
    textAlign: "center",
    fontSize: wp("5%"),
  },
});
