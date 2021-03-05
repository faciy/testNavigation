import React from 'react';
// import {
//   View,
//   Text
// } from 'react-native';
import Feed from './screens/Feed';
import Detail from './screens/Detail';

import Screen1 from './screens/drawer/Screen1';
import Screen2 from './screens/drawer/Screen2';
import Screen3 from './screens/drawer/Screen3';

import Tab1 from './screens/tabs/Tab1';
import Tab2 from './screens/tabs/Tab2';
import Tab3 from './screens/tabs/Tab3';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const createHomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Detail" component={Detail} />
      {/* <Stack.Screen name="Bottom Tab" component={createTabBottom} /> */}
      <Stack.Screen name="Top Tab" component={createTabTop} />
    </Stack.Navigator>
  )
}

const createTabTop = () => {
  return(
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen name="Tab1" component={createTabBottom} />
      <MaterialTopTabs.Screen name="Tab2" component={createTabBottom} />
      <MaterialTopTabs.Screen name="Tab3" component={createTabBottom} />
    </MaterialTopTabs.Navigator>

  )
}

const createTabBottom = () => {
  return(
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="Tab1" component={Tab1} />
      <MaterialBottomTabs.Screen name="Tab2" component={Tab2} />
      <MaterialBottomTabs.Screen name="Tab3" component={Tab3} />
    </MaterialBottomTabs.Navigator>

  )
}


const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={createHomeStack} />
        <Drawer.Screen name="Contact" component={Screen1} />
        <Drawer.Screen name="Favorite" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
