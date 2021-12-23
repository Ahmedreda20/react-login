import React, { useRef } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function single_product({ item, navigation }) {
  const { width: windowWidth } = Dimensions.get('window');

  function HeartCurrentItem(id) {
    if (item.id === id) {
      item.hearted = !item.hearted;
    }
  }
  return (
    <TouchableOpacity onPress={() => navigation.navigate('singleProduct')} style={{ flex: 1 }}>
      <View
        style={{
          marginBottom: 10,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'start',
          flex: 1,
          position: 'relative',
          borderRadius: 10,
        }}
        key={item.id}
      >
        <Image
          source={item.img}
          style={{
            width: '100%',
            height: 250,
            borderRadius: 8,
            marginBottom: 12,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
            flex: 1,
            width: '85%',
            marginTop: '-25%',
            left: '50%',
            transform: [{ translateX: '-50%' }],
            shadow: {
              shadowColor: '#ddd',
              shadowRadius: 10,
              shadowOpacity: 1,
            },
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 3,
              position: 'relative',
              justifyContent: 'space-between',
              gap: 5,
            }}
          >
            <Text
              style={{
                fontWeight: 600,
                flex: 1,
              }}
            >
              {item.title}
            </Text>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
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
          <Text
            style={{
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {item.content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
