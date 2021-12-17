import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SingleProduct({ navigation }) {
  const [product, setProduct] = useState({
    title: 'كافي لاتيه',
    content:
      'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي',
    review: [
      {
        id: 0,
        fill: true,
      },
      {
        id: 1,
        fill: true,
      },
      {
        id: 2,
        fill: true,
      },
      {
        id: 3,
        fill: true,
      },
      {
        id: 4,
        fill: false,
      },
    ],
    qty: 1,
    price: 40,
  });

  function handleProduct(action) {
    setProduct({ ...product, qty: product.qty > 0 ? product.qty + action : 1 });
  }

  return (
    <View
      style={{
        position: 'relative',
        backgroundColor: '#cbd5e1',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
      }}
    >
      {/* header start */}
      <View
        style={{
          width: '100%',
          padding: 15,
          position: 'absolute',
          top: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          zIndex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f97316',
          }}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('home')}
        >
          <Feather
            name={'chevron-left'}
            style={{
              fontSize: 18,
              color: '#fff',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            gap: 6,
          }}
        >
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}
            activeOpacity={0.5}
          >
            <AntDesign
              name={'heart'}
              style={{
                fontSize: 18,
                color: '#ef4444',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              position: 'relative',
            }}
            activeOpacity={0.5}
          >
            <MaterialCommunityIcons
              name={'cart-outline'}
              style={{
                fontSize: 20,
                color: '#64748b',
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: -6,
                right: -4,
                paddingHorizontal: 8,
                paddingVertical: 2,
                backgroundColor: '#ef4444',
                borderRadius: 8,
                borderWidth: 3,
                borderColor: '#fff',
              }}
            >
              <Text
                style={{
                  color: '#ffff',
                  fontWeight: 600,
                  fontSize: 9,
                }}
              >
                1
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* header end */}
      {/* image card */}
      <View
        style={{
          width: '100%',
          flex: 0.4,
        }}
      >
        <Image
          source="https://media-cdn.tripadvisor.com/media/photo-s/1b/34/8c/8d/la-poire-cafe.jpg"
          style={{
            flex: 1,
            resizeMode: 'cover',
          }}
        />
      </View>
      {/* image card */}
      {/* cart box start */}
      <View
        style={{
          width: '100%',
          flex: 0.6,
          flexDirection: 'column',
          paddingVertical: 30,
          paddingBottom: 0,
          paddingHorizontal: 25,
          position: 'relative',
          backgroundColor: '#fff',
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          overflow: 'scroll',
          marginTop: -40,
        }}
      >
        {/* header cart button */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: [{ translateX: '-50%' }],
            backgroundColor: '#cbd5e1',
            borderRadius: 9999,
            width: '25%',
            height: 4,
          }}
        ></TouchableOpacity>
        {/* header cart button */}
        {/* card content */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'orange',
              fontSize: 20,
              fontWeight: 700,
              fontFamily: 'Tajawal_700Bold',
            }}
          >
            {(product.price * product.qty).toFixed(2)} ر.س
          </Text>
          <View
            style={{
              flex: 1,
              padding: 5,
            }}
          >
            <Text
              style={{
                fontFamily: 'Tajawal_700Bold',
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              كافي لاتيه
            </Text>
            <View
              style={{
                alignItems: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 5,
              }}
            >
              {product.review.map((r, i) => (
                <AntDesign
                  name={'star'}
                  key={i}
                  style={{ color: r.fill ? 'orange' : 'gray', fontSize: 18 }}
                />
              ))}
            </View>
          </View>
        </View>
        {/* card content top */}
        {/* content item */}
        <View
          style={{
            marginTop: 4,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: '#64748b',
              fontFamily: 'Tajawal_500Medium',
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            {product.content}
          </Text>
        </View>
        {/* content item end */}
        {/* notes box */}
        <View
          style={{
            width: '100%',
          }}
        >
          <Text
            style={{
              fontFamily: 'Tajawal_700Bold',
              fontSize: 18,
              color: '#64748b',
              marginBottom: 5,
            }}
          >
            ملاحظات
          </Text>
          <TextInput
            placeholder="ملاحظات"
            multiline
            style={{
              width: '100%',
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderWidth: 1,
              borderColor: '#cbd5e1',
              borderStyle: 'solid',
              fontFamily: 'Tajawal_700Bold',
              borderRadius: 15,
              minHeight: 150,
            }}
          />
        </View>
        {/* notes box */}
        {/* controls */}
        <View
          style={{
            width: '100%',
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            gap: 6,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.5,
              padding: 15,
              paddingHorizontal: 20,
              backgroundColor: '#f97316',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                fontFamily: 'Tajawal_500Medium',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              اضافة الى السلة
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              gap: 6,
              alignItems: 'stretch',
              justifyContent: 'center',
              flex: 0.5,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                fontSize: 14,
                height: 35,
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: '#38bdf8',
                borderRadius: 8,
              }}
              onPress={() => handleProduct(1)}
            >
              <AntDesign
                name={'plus'}
                style={{
                  color: '#fff',
                  fontWeight: 700,
                  fontFamily: 'Tajawal_700Bold',
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                padding: 10,
                fontSize: 14,
                height: 35,
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontWeight: 700,
                fontFamily: 'Tajawal_700Bold',
                borderRadius: 8,
              }}
            >
              {product.qty}
            </View>
            <TouchableOpacity
              style={{
                padding: 10,
                fontSize: 14,
                height: 35,
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                borderRadius: 8,
                backgroundColor: '#e0f2fe',
              }}
              onPress={() => handleProduct(-1)}
            >
              <AntDesign
                name={'minus'}
                style={{
                  fontWeight: 700,
                  fontFamily: 'Tajawal_700Bold',
                  color: '#38bdf8',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* controls */}
      </View>
      {/* cart box end */}
    </View>
  );
}
