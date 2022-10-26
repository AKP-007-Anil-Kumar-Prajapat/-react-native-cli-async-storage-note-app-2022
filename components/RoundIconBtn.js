/* eslint-disable no-unused-vars */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../misc/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const RoundIconBtn = ({antIconName, size, color, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <AntIcon
        name={antIconName}
        color={color || colors.LIGHT}
        size={size || 24}
        style={[styles.icons, {...style}]}
      />
    </TouchableOpacity>
  );
  //   <AntDesign
  //     name={antIconName}
  // size={size || 24}
  // color={color || colors.LIGHT}
  // style={[styles.icons, {...style}]}
  //   />
  // <Icon.Button
  //   name="facebook"
  //   backgroundColor="#3b5998"
  //   onPress={this.loginWithFacebook}>
  //   Login with Facebook
  // </Icon.Button>
  // );
};

export default RoundIconBtn;

const styles = StyleSheet.create({
  icons: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});
