import React, { useRef } from 'react';
import { View, SafeAreaView, Dimensions, ScrollView } from 'react-native';

import Carousel from 'react-native-anchor-carousel';
// import global components
import SlideCarousel from '../components/SlideCarousel';
import ProductsWithFilter from '../components/ProductsWithFilter';
import LatestProducts from '../components/LatestProducts';
import HomeHeader from '../components/HomeHeader';
// import TabBarNav from '../components/TabBarNav';

export default function Home({ navigation }) {
  const carousel = useRef();
  const { width: windowWidth } = Dimensions.get('window');

  const state = {
    activeIndex: 0,
    carouselItems: [
      {
        img: 'https://www.nzherald.co.nz/resizer/zoanQ40cF1HPP7CteeuhdbWHz7s=/620x349/smart/filters:quality(70)/arc-anglerfish-syd-prod-nzme.s3.amazonaws.com/public/SSDVXBOGWJDXHGCEYNUPXJ3CWE.jpg',
        id: 0,
      },
      {
        img: 'https://thestoreguide.co.nz/wp-content/uploads/2021/01/kfc-offer-1.jpg',
        id: 1,
      },
      {
        img: 'https://i2-prod.mirror.co.uk/incoming/article18361947.ece/ALTERNATES/s1200/0_kfc-chicken.png',
        id: 2,
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNgnyznim6DkMapmcqjINBTWXUVcSXG3DojJjZgkLvBYEVrdnKnpCGoU-8_uJzhcK_Xw&usqp=CAU',
        id: 3,
      },
      {
        img: 'https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:chicken-8.jpg,f_auto,q_auto,w_500/v1/au/restaurants/11005838.jpg',
        id: 4,
      },
    ],
    products: [
      {
        img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
        title: 'Product title',
        id: 0,
      },
      {
        img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
        title: 'Product title',
        id: 1,
      },
      {
        img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
        title: 'Product title',
        id: 2,
      },
      {
        img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
        title: 'Product title',
        id: 3,
      },
      {
        img: 'https://d12n9cpx6835mo.cloudfront.net/finger_food_50_web_thumb.jpg?v=178.6',
        title: 'Product title',
        id: 4,
      },
    ],
  };

  return (
    <React.Fragment>
      {/* <TabBarNav /> */}
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: '#F3F4F6',
              // flex: 1,
              // alignItems: 'flex-start',
              // flexDirection: 'column',
            }}
          >
            {/* header start */}
            <HomeHeader navigation={navigation} />
            {/* header end */}
            {/* carousel start */}
            <SafeAreaView>
              <View>
                <Carousel
                  layout={'default'}
                  ref={carousel}
                  data={state.carouselItems}
                  itemWidth={windowWidth * 0.8}
                  containerWidth={windowWidth}
                  style={{
                    flexGrow: 0,
                    height: 150,
                  }}
                  renderItem={SlideCarousel}
                />
              </View>
            </SafeAreaView>
            {/* carousel end */}
            {/* flatList products width filter start */}
            <ProductsWithFilter products={state.products} navigation={navigation} />
            {/* flatList products width filter end */}
            {/* flatList products latest products start */}
            <LatestProducts navigation={navigation} />
            {/* flatList products latest products end */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
}
