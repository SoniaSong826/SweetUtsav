import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { SliderBox } from "react-native-image-slider-box";

const postFolder = "../assets/Posts/";

export default class PostSlides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require(postFolder + "collageslide1.jpg"),
        require(postFolder + "collageslide2.jpg"),
        require(postFolder + "collageslide3.jpg"),
        require(postFolder + "collageslide4.jpg"),
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          sliderBoxHeight={130}
          images={this.state.images}
          ImageComponentStyle={{ borderRadius: 10, width: "90%" }}
          resizeMethod={"scale"}
          resizeMode={"center"}
          dotColor={colors.primary}
          inactiveDotColor={colors.lightGray}
          autoplay
          circleLoop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
