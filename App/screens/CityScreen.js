import React, { useContext, useState } from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import CityPicker from "../components/CityPicker";
import colors from "../config/colors";
import store from "../constants/const";
import LocationSelecter from "../components/LocationSelecter";
import ListItemSeparator from "../components/ListItemSeparator";
import mainContext from "../context/Context";

const sweetCities = [
  {
    id: 1,
    title: "Melbourne Coperate",
    acronym: "COP",
    img: require("../assets/CityLogo/Melbourne.jpg"),
  },
  {
    id: 2,
    title: "Tarneit",
    acronym: "TAR",
    img: require("../assets/CityLogo/Melbourne.jpg"),
  },
  {
    id: 3,
    title: "Caroline Springs",
    acronym: "CP",
    img: require("../assets/CityLogo/Melbourne.jpg"),
  },
  {
    id: 4,
    title: "Lyndhurst",
    acronym: "LYN",
    img: require("../assets/CityLogo/Melbourne.jpg"),
  },
  {
    id: 5,
    title: "Seven Hills",
    acronym: "SYD",
    img: require("../assets/CityLogo/Sydney.jpg"),
  },
  {
    id: 6,
    title: "Grand Plaza",
    acronym: "BRI",
    img: require("../assets/CityLogo/Brisbane.jpg"),
  },
];

function CityScreen({ route, navigation }) {

  const [store, setStore] = useState(sweetCities[0]);
  // const { store } = useContext(mainContext);
  // useEffect(() => {
  //   AsyncStorage.getItem("store").then((value) => {
  //       setStore(false);
  //   });
  // }, []);
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_green_background.jpg")}
    >
      <FlatList
        data={sweetCities}
        contentContainerStyle={styles.flatList}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        renderItem={({ item }) => (
          <CityPicker
            img={item.img}
            title={item.title}
            navigation={() => {
              navigation.navigate("Home");
            }}
            onPress={() => {
              store = item;
            }}
          ></CityPicker>
        )}
      ></FlatList>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  locationText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 13,
    color: colors.white,
  },
  text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 22,
    paddingTop: 50,
    color: colors.primary,
  },
  flatList: {
    alignItems: "center",
    flexGrow: 0,
  },
});

export default CityScreen;
