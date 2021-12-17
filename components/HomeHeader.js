import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Input from './Input';
export default function HomeHeader({ navigation }) {
  return (
    <View
      style={{
        width: '100%',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'between',
          backgroundColor: '#047857',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          padding: 20,
          paddingBottom: 40,
        }}
      >
        <TouchableOpacity>
          <AntDesign
            name={'user'}
            style={{
              color: '#fff',
              fontSize: 25,
            }}
            onPress={() => navigation.navigate('profile')}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
            fontFamily: 'Tajawal_400Regular',
            flex: 1,
            textAlign: 'center',
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          البادية
        </Text>
        <TouchableOpacity>
          <Feather
            name={'bell'}
            style={{
              color: '#fff',
              fontSize: 25,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          top: '-25px',
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            position: 'relative',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              top: 0,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
              left: 0,
              backgroundColor: '#059669',
              borderRadius: 10,
              marginRight: 5,
            }}
          >
            <Feather
              name="search"
              style={{
                color: '#F9FAFB',
                fontSize: 16,
              }}
            />
          </TouchableOpacity>
          <Input
            title="search"
            style={{
              fontWeight: '700',
              fontFamily: 'Tajawal_500Medium',
            }}
          />
        </View>
      </View>
    </View>
  );
}
