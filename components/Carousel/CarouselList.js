import { View, FlatList } from "react-native";
import { cardData } from "../../data/data";
import CarouselItem from "./CarouselItem";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const ITEM_WIDTH = wp("70%");
const MARGIN_HORIZONTAL = wp("2%");
const ITEM_FULL_WIDTH = ITEM_WIDTH + MARGIN_HORIZONTAL * 2;
const SPACER = (wp("100%") - ITEM_FULL_WIDTH) / 2.2;

const CarouselList = () => {
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  const renderItem = (itemData) => {
    return (
      <CarouselItem
        image={itemData.item.image}
        name={itemData.item.name}
        exp={itemData.item.exp}
        visa={itemData.item.visa}
        x={x}
      />
    );
  };

  return (
    <View>
      <Animated.FlatList
        onScroll={onScroll}
        ListHeaderComponent={<View />}
        ListHeaderComponentStyle={{ width: SPACER }}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ width: SPACER }}
        data={cardData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEventThrottle={40}
        decelerationRate="fast"
        snapToInterval={ITEM_FULL_WIDTH} // Snap each item to center
      />
    </View>
  );
};

export default CarouselList;
