import React, { Component } from 'react';
import { SafeAreaView, View, Image,Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default class CustomSidebarMenu extends Component {
  render() {
    let props = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            width: RFValue(140),
            height: RFValue(140),
            borderRadius: RFValue(70),
            alignSelf: 'center',
            marginTop: RFValue(60),
            resizeMode: 'contain',
          }}></Image>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
  }
}
