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
        source={require('../assets/Goibbo.png')}
        style={{
          marginLeft: 25,
          marginTop: 40,
          height: 55,
          justifyContent: 'center',
          height:100,
        }}
      />
    </TouchableOpacity>
  );
};

export default class Goibibo extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#15193c',
        }}>
        <OpenURLButton url={'https://www.goibibo.com/'}></OpenURLButton>
      </View>
    );
  }
}
