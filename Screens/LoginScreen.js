/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../misc/colors';
const Intro = () => {
  const [user, setUser] = useState();
  const handleOnChangeText = text => {
    setUser(text);
  };
  console.log(user);
  return (
    <>
      <StatusBar hidden />
      <View style={Styles.container}>
        <Text style={Styles.inputTitle}> Please Enter Your's Name Here</Text>
        <TextInput
          value={user}
          onChangeText={handleOnChangeText}
          placeholder="Enter Your Name"
          style={Styles.TextInput}
        />
      </View>
    </>
  );
};

const width = Dimensions.get('window').width - 50;
console.log(width);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    width,
    color: colors.PRIMARY,
    height: 50,
    fontSize: 25,
    borderRadius: 5,
    paddingLeft: 10,
  },
  inputTitle: {
    alignSelf: 'flex-start',
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 10,
    opacity: 0.9,
  },
});

export default Intro;
