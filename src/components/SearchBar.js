import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Styles';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = ({value, onchange, close}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.background,
        elevation: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          borderWidth: 1,
          flex: 1,
          marginEnd: 10,
          borderRadius: 10,
          paddingHorizontal: 15,
          borderColor: Colors.primary,
        }}
        onChangeText={onchange}
        value={value}
        placeholder="Seacrch ..."
        keyboardType="default"
      />
      <Icon onPress={close} name="close" color={Colors.primary} size={25} />
    </View>
  );
};

export default SearchBar;
