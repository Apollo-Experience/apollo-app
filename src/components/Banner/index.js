import React from "react";
import { View } from "react-native";
import { SimpleCarousel, Banner } from "react-native-simple-banner-carousel";
import styles from "./style";

export default function BannerCarrousel() {
  return (
    <View style={styles.container}>
      <SimpleCarousel
        data={[
          {
            title: "Festa 1",
            source: require("./imagem.jpeg"),
          },
          {
            title: "Festa 2",
            source: require("./imagem.jpeg"),
          },
        ]}
        renderItem={(props, i, width) => {
          return (
            <Banner
              id={`${props.title}_${i}`}
              source={props.source}
              width={width}
              onPress={(id) => console.log(`${id} was tapped.`)}
            />
          );
        }}
      />
    </View>
  );
}
