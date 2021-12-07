import React, { useRef } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function LatestProduct({ item, index }) {
  function HeartCurrentItem(id) {
    if (item.id === id) {
      item.hearted = !item.hearted;
    }
  }
  return (
    <View
      key={index}
      style={{
        marginHorizontal: 5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'start',
        width: 150,
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 8,
      }}
    >
      <Image
        source={item.img}
        style={{
          width: '100%',
          height: 100,
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 3,
        }}
      >
        <Text
          style={{
            fontWeight: 600,
          }}
        >
          350G
        </Text>
        <Text
          style={{
            fontWeight: 600,
            color: 'orange',
            fontSize: 12,
          }}
        >
          <AntDesign
            name="star"
            style={{
              fontSize: 12,
              marginHorizontal: 4,
            }}
          />
          4.5
        </Text>
      </View>
      <Text
        style={{
          color: '#047857',
          fontWeight: 700,
          fontSize: 16,
        }}
      >
        $90
      </Text>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          position: 'absolute',
          top: 0,
          left: 0,
          margin: 10,
          borderRadius: 9999,
        }}
        onPress={() => HeartCurrentItem(item.id)}
      >
        <AntDesign
          name={item.hearted ? 'heart' : 'hearto'}
          style={{
            color: 'red',
            fontSize: 16,
            fontWeight: 700,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
