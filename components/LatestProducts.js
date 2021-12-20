import React, { Fragment } from 'react';
import { View, Text, FlatList } from 'react-native';

import LatestProduct from './LatestProduct';
export default function LatestProducts({ navigation }) {
  const products = [
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      id: 0,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      id: 1,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      id: 2,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      id: 3,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      id: 4,
      hearted: false,
    },
  ];
  return (
    <Fragment>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            fontFamily: 'Tajawal_700Bold',
            fontSize: 14,
          }}
        >
          الاكثر طلبا
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          width: '100%',
        }}
      >
        {/* flatList */}
        <FlatList
          data={products}
          renderItem={({ item }) => <LatestProduct navigation={navigation} item={item} />}
          keyExtractor={(item) => item.id}
          vertical={true}
          numColumns={2}
          style={{ flex: 1, padding: 10, paddingBottom: 15 }}
          showsHorizontalScrollIndicator={false}
        />
        {/* flatList end */}
      </View>
    </Fragment>
  );
}
