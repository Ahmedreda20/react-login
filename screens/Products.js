import React, { Fragment } from 'react';
import { View, Text, FlatList } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import Single_product from '../components/single_product';
export default function Products({ navigation }) {
  const products = [
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sint illum quasi necessitatibus exercitationem.',
      id: 0,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sint illum quasi necessitatibus exercitationem.',
      id: 1,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sint illum quasi necessitatibus exercitationem.',
      id: 2,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sint illum quasi necessitatibus exercitationem.',
      id: 3,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sint illum quasi necessitatibus exercitationem.',
      id: 4,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sint illum quasi necessitatibus exercitationem.',
      id: 5,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sint illum quasi necessitatibus exercitationem.',
      id: 6,
      hearted: false,
    },
    {
      img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
      title: 'Product title',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sint illum quasi necessitatibus exercitationem.',
      id: 7,
      hearted: false,
    },
  ];
  return (
    <Fragment>
      <HomeHeader navigation={navigation} />

      {/* flatList */}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Single_product navigation={navigation} item={item} key={item.id} />
        )}
        keyExtractor={(item) => item.id}
        style={{ padding: 10, paddingBottom: 15 }}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />

      {/* flatList end */}
    </Fragment>
  );
}
