import React, { Fragment } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Product from './Product';
export default function ProductsWithFilter({ products, navigation }) {
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
          التصنيفات
        </Text>
        <Text
          style={{
            fontFamily: 'Tajawal_700Bold',
            fontSize: 12,
            color: '#545454',
          }}
        >
          مشاهدة الكل
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
          renderItem={({ item }) => <Product navigation={navigation} item={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={{ flex: 1, padding: 10, paddingBottom: 15 }}
          showsHorizontalScrollIndicator={false}
        />
        {/* flatList end */}
        <View style={{ width: 80 }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 9999,
                backgroundColor: '#047857',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                style={{
                  fontSize: 20,
                  color: '#fff',
                }}
              />
            </View>
            <Text
              style={{
                fontFamily: 'Tajawal_700Bold',
                textAlign: 'center',
                fontSize: 14,
                marginTop: 10,
              }}
            >
              تصنيف المنتجات
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
}
