import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function Product({ item, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('singleProduct')}>
      <View
        key={item.id}
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
    </TouchableOpacity>
  );
}
