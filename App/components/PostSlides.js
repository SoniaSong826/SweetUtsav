import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { SliderBox } from "react-native-image-slider-box";

const postFolder = '../assets/Posts/';

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
          images={this.state.images}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          sliderBoxHeight={200}
          dotColor={colors.primary}
          inactiveDotColor={colors.lightGray}
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 130,
    borderRadius: 10,
  },
});
