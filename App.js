import * as Font from 'expo-font';
import React, { useEffect } from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './components/TabBar';
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import SingleProduct from './screens/SingleProduct';
import Products from './screens/Products';
import { useFonts } from 'expo-font';
import {
  Tajawal_200ExtraLight,
  Tajawal_300Light,
  Tajawal_400Regular,
  Tajawal_500Medium,
  Tajawal_700Bold,
  Tajawal_800ExtraBold,
  Tajawal_900Black,
} from '@expo-google-fonts/tajawal';
import AppLoading from 'expo-app-loading';
import CustomHeader from './components/CustomHeader';

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Tajawal_200ExtraLight,
    Tajawal_300Light,
    Tajawal_400Regular,
    Tajawal_500Medium,
    Tajawal_700Bold,
    Tajawal_800ExtraBold,
    Tajawal_900Black,
    Rubik: require('./assets/fonts/Rubik-Medium.ttf'),
    Rakkas: require('./assets/fonts/Rakkas-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <React.Fragment>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false,

            header: (props) => <CustomHeader {...props} pathRoute={route} />,
          })}
          tabBar={(props) => <TabBar {...props} />}
        >
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="login" component={Login} />
          <Tab.Screen name="products" component={Products} />
          <Tab.Screen name="singleProduct" component={SingleProduct} />
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              headerShown: true,
              title: 'Profile',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
