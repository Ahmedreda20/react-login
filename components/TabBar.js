import { View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function TabBar({ state, descriptors, navigation }) {
  const [visible, setVisible] = useState(true);
  function handleIcons(name) {
    switch (name) {
      case 'home':
        return 'home';
        break;
      case 'login':
        return 'log-out';
        break;
      case 'profile':
        return 'user';
        break;
      case 'products':
        return 'shoppingcart';
        break;
      default:
        break;
    }
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 15,
      }}
    >
      {state.routes
        .filter((r) => ['home', 'products', 'profile'].includes(r.name))
        .map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            // const event = navigation.emit({
            //   type: 'tabPress',
            //   target: route.key,
            //   canPreventDefault: true,
            // });

            // if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
            // }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : { selected: false }}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              key={index}
            >
              <AntDesign
                name={handleIcons(label.toLowerCase())}
                style={{ fontSize: 20, marginBottom: 3 }}
              />
              <Text
                style={{
                  fontWeight: 600,
                  color: '#666',
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
}
