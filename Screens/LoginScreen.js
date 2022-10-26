/* eslint-disable curly */
/* eslint-disable react/self-closing-comp */
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
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RoundIconBtn from '../components/RoundIconBtn';
import colors from '../misc/colors';
const Intro = ({onFinish}) => {
  const [name, setname] = useState('');
  const handleOnChangeText = text => {
    setname(text);
  };
  console.log(name);

  const handleSubmit = async () => {
    const user = {name: name};
    await AsyncStorage.setItem('user', JSON.stringify(user));
    if (onFinish) onFinish();
    // Alert.alert('Alert Title', 'alertMessage', [
    //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
    //   {
    //     text: 'OK',
    //     onPress: () => {
    //       console.log('Data Submit Sussefully');
    //     },
    //   },
    // ]);
  };

  return (
    <>
      <StatusBar hidden />
      <View style={Styles.container}>
        <Text style={Styles.inputTitle}> Please Enter Your's Name Here</Text>
        <TextInput
          value={name}
          onChangeText={handleOnChangeText}
          placeholder="Enter Your Name"
          style={Styles.TextInput}
        />
        {name.trim().length >= 3 ? (
          <RoundIconBtn
            antIconName="arrowright"
            onPress={handleSubmit}></RoundIconBtn>
        ) : null}
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
    marginBottom: 20,
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
