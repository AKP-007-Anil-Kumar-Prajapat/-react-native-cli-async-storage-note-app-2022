/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
/* eslint-disable no-unused-vars */
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../misc/colors';
import SearchBar from '../components/SearchBar';
import RoundIconBtn from '../components/RoundIconBtn';
import NoteInputModal from '../components/NoteInputModal';

const NoteScreen = ({user}) => {
  const [greet, setGreet] = useState('Evening');
  const [modalVisible, setModalVisible] = useState(false);

  const findGreat = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet('Morining');
    if (hrs === 1 || hrs < 17) return setGreet('Afternoon');
    setGreet('Evening');
  };

  useEffect(() => {
    findGreat();
  }, []);

  const handleOnSubmit = (title, desc) => {
    console.log(title, desc);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <View style={styles.constainer}>
        <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
        <SearchBar containerStyle={{marginVertical: 15}} />
        <View
          style={(StyleSheet.absoluteFillObject, styles.emptyHeaderContainer)}>
          <Text style={styles.emptyHeader}>Add Notes</Text>
          <RoundIconBtn
            onPress={() => setModalVisible(true)}
            antIconName="plus"
            style={styles.addBtn}
          />
        </View>
      </View>
      <NoteInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2,
  },
  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 50,
  },
});

export default NoteScreen;
