import React from 'react';
import { View} from 'react-native';
import Pharmeasy from './Pharmeasy';
import Tata1mg from './Tata1mg';
import Netmeds from './Netmeds';
import Apollo from './Apollo';
export default class Medicine extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Pharmeasy />
        <Netmeds />
        <Tata1mg />
        <Apollo />
        </View>
    );
  }
}
