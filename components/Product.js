import * as React from 'react';
import { View, Text, Image } from 'react-native';

export default function Product({ item, index }) {
  return (
    <View
      key={index}
      style={{
        marginHorizontal: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
      }}
    >
      <Image
        source={item.img}
        style={{
          width: '100%',
          height: 60,
          borderRadius: 8,
          marginBottom: 12,
        }}
      />
      <Text
        style={{
          fontWeight: 600,
        }}
      >
        {item.title}
      </Text>
    </View>
  );
}
