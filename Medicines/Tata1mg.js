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
        source={require('../assets/Tata1mg.png')}
        style={{
          marginLeft: 25,
          marginTop: 30,
          height: 95,
          justifyContent: 'center',
        }}
      />
    </TouchableOpacity>
  );
};

export default class Tata1mg extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#15193c',
        }}>
        <OpenURLButton url={'https://www.1mg.com/categories/ayurveda/top-brands/1mg-herbal-supplements-788'}>Pharmeasy</OpenURLButton>
      </View>
    );
  }
}
