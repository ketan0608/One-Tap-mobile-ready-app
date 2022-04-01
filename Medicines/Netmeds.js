import React, { useCallback } from 'react';
import {
  Alert,
  Button,
  Linking,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
const OpenURLButton = ({ url }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(
        "Error','Your Internet connection is poor. Cannot connect to database"
      );
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={require('../assets/Netmeds.png')}
        style={{
          marginLeft: 25,
          marginTop: 20,
          height: 95,
          justifyContent: 'center',
        }}
      />
    </TouchableOpacity>
  );
};

export default class Netmeds extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#15193c',
        }}>
        <OpenURLButton url={'https://www.netmeds.com/'}>Pharmeasy</OpenURLButton>
      </View>
    );
  }
}
