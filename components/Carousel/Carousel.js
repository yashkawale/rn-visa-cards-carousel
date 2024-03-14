import { View } from "react-native";
import React from "react";
import Header from "../ui/Header";
import CustomButton from "../ui/CustomButton";
import CarouselList from "./CarouselList";

const Carousel = () => {
  return (
    <View>
      <Header />
      <CarouselList />
      <CustomButton title="Activate the card" onPress={null} />
    </View>
  );
};

export default Carousel;
