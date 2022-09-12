import React, { Component } from "react";
import { View } from "react-native";
import styles from "./style";
import { SliderBox } from "react-native-image-slider-box";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://i.imgur.com/CHYk8Jc.png",
        "https://i.imgur.com/CBmbPGs.png",
        "https://i.imgur.com/CBmbPGs.png",
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          resizeMethod={"resize"}
          resizeMode={"cover"}
          onCurrentImagePressed={(index) =>
            console.log(`image ${index} pressed`)
          }
          dotStyle={{
            width: 7,
            height: 7,
          }}
          dotColor="#ffffff"
          inactiveDotColor="#90A4AE"
          ImageComponentStyle={{
            borderRadius: 10,
            width: "90%",
            height: 145,
          }}
          paginationBoxVerticalPadding={10}
          autoplay
          circleLoop
        />
      </View>
    );
  }
}
