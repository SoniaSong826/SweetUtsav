import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import colors from "../config/colors";

import LocationSelecter from "./LocationSelecter";

const sweetCities = [
  {
    id: 1,
    title: "Melbourne",
    acronym: "MEL",
    img: require("../assets/CityLogo/Melbourne.jpg"),
  },
  {
    id: 2,
    title: "Sydney",
    acronym: "SYD",
    img: require("../assets/CityLogo/Sydney.jpg"),
  },
  {
    id: 3,
    title: "Brisbane",
    acronym: "BRI",
    img: require("../assets/CityLogo/Brisbane.jpg"),
  },
];

function LocationSelecterView() {
  const [city, setCity] = useState(sweetCities[0]);
  return (
      <LocationSelecter
        items={sweetCities}
        selectedItem={city}
        onSelectItem={(city) => setCity(city)}
      ></LocationSelecter>
  );
}
const styles = StyleSheet.create({

});

export default LocationSelecterView;
