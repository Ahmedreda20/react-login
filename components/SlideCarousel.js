import * as React from 'react';
import { View, Image } from 'react-native';
export default function SlideCarousel({ item, index }) {
  return (
    <View key={index}>
      <Image
        source={item.img}
        style={{
          width: '100%',
          height: 150,
        }}
      />
    </View>
  );
}
