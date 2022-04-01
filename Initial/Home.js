import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import db from '../config';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionText: '',
    };
  }
  updateDatabase = () => {
    db.collection('suggestion/')
.add({
  suggestion:this.suggestionText.value
})
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#15193c',
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            width: RFValue(190),
            height: RFValue(190),
            borderRadius: RFValue(70),
            alignSelf: 'center',
            marginTop: RFValue(60),
            resizeMode: 'contain',
          }}
        />
        <Text style={{ marginLeft: 90, fontSize: 20, color: 'yellow' }}>
          One Tap😉😉
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: '#15193c',
          }}>
          <Text style={{ color: 'purple', fontSize: 20 }}>About App:</Text>
          <Text style={{ color: 'white', fontSize: 15 }}>
            This is a app to ease your daily life here you can click on the
            desirable option and search for medicines booking and much more
          </Text>
          <Text style={{ color: 'violet', fontSize: 20 }}>App Version:</Text>
          <Text style={{ color: 'white', fontSize: 15 }}> 9.1.3</Text>
          <View>
            <KeyboardAvoidingView>
              <TextInput
                style={{ backgroundColor: 'white', marginTop: 31 }}
                placeholder="Suggestion"
                onChangeText={(text) => {
                  this.setState({
                    suggestionText: (this.state.suggestionText = text),
                  });
                }}
                value={this.state.suggestionText}
                multiline={true}></TextInput>
            </KeyboardAvoidingView>
            <Button
              onPress={this.updateDatabase}
              title="Submit"
              color="#841584"
            />
          </View>
        </View>
      </View>
    );
  }
}
