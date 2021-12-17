import React from 'react';
import { View, Text } from 'react-native';
export default function CustomHeader({ options }) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#e2e8f0',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: 'Rubik',
          fontSize: 18,
          fontWeight: 500,
          color: '#64748b',
        }}
      >
        {options.title}
      </Text>
    </View>
  );
}
