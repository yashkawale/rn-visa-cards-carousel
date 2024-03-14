import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const CarouselItem = ({ image, name, exp, visa, x }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(x.value, [0, 250], [0, 50]);
    return {
      transform: [{ rotateZ: `${rotateZ}deg` }],
    };
  });
  return (
    <Animated.View style={[styles.container]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.container} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.exp}>{exp}</Text>
        </View>
        <Image source={visa} style={styles.visa} />
      </View>
      <Image
        source={require("../../assets/gradients/chip.png")}
        style={styles.chip}
      />
    </Animated.View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    width: wp("70%"),
    height: wp("100%"),
    marginHorizontal: wp("2%"),
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: wp("10%"),
  },

  imageContainer: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  textContainer: {},

  name: {
    fontWeight: "bold",
    fontSize: wp("4.5%"),
  },

  exp: {
    fontWeight: "500",
  },

  visa: {
    width: wp("18%"),
    height: wp("18%"),
  },

  chip: {
    position: "absolute",
    transform: [{ scale: 0.5 }, { rotateZ: "90deg" }],
    top: wp("8%"),
    right: -wp("8%"),
  },
});
