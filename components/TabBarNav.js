import React from 'react';
import TabBar from './TabBar';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import CustomHeader from './CustomHeader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function TabBarNav() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        header: (props) => <CustomHeader {...props} />,
      })}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: true,
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
