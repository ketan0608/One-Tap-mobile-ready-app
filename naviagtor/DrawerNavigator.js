import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from './CustomSidebarMenu';
import Medicines from '../Medicines/Medicine';
import Booking from '../booking/Booking';
import {NavigationContainer} from '@react-navigation/native'
import Home from '../Initial/Home'
const Drawer = createDrawerNavigator();
export default class Drawernavigator extends Component {
  render() {
    let props = this.props;
    return (
      <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: 'black',
          itemStyle: { marginVertical: 5 },
          headerShown:false,
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Home⛪"
          component={Home}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Medicine💊"
          component={Medicines}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Booking🎫"
          component={Booking}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
