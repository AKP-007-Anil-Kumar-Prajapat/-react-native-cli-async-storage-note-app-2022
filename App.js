/* eslint-disable curly */
/* eslint-disable no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Intro from './Screens/LoginScreen';
import NoteScreen from './Screens/NoteScreen';

export default function App() {
  const [user, setUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if (result !== null) {
      setUser(JSON.parse(result));
    }
    console.log(result);
  };
  useEffect(() => {
    // findUser();
    AsyncStorage.clear();
  }, []);

  if (!user.name) return <Intro onFinish={findUser} />;

  return <NoteScreen user={user} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center ',
  },
});
