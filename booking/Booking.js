import React from 'react';
import { View } from 'react-native';
import Goibibo from './Goibibo';
export default class Booking extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#15193c' }}>
        <Goibibo />
      </View>
    );
  }
}
