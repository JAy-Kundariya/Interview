import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../constants/Styles';
import {RemoveFavorite} from '../utils/RemoveFavorite';
import {AddFavorite} from '../utils/AddFavorite';
import {useFocusEffect} from '@react-navigation/native';
import {CheckFavorite} from '../utils/CheckFavorite';

const ListComponent = props => {
  const {item} = props;
  const [focused, setFocused] = useState(false);

  const addFavorite = async item => {
    if (focused == true) {
      RemoveFavorite(item)
        .then(() => setFocused(false))
        .catch(error => {
          console.log('Something went wrong RemoveFavorite');
          console.log(error);
        });
    } else {
      await AddFavorite(item)
        .then(() => setFocused(true))
        .catch(error => {
          console.log('Something went wrong AddFavorite');
          console.log(error);
        });
    }
  };

  const checkData = async () => {
    await CheckFavorite(item)
      .then(response => setFocused(response))
      .catch(error => {
        console.log('Something went wrong CheckFavorite');
        console.log(error);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      checkData();
    }, []),
  );

  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Details', item)}
      style={{
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: Colors.background,
        alignItems: 'center',
        elevation: 10,
        borderRadius: 10,
      }}>
      <Image
        source={{uri: item?.thumbnailUrl}}
        style={{height: 50, width: 50, borderRadius: 25}}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.black}}>
          albumId : {item.albumId}
        </Text>
        <Text
          numberOfLines={1}
          style={{fontSize: 12, fontWeight: 'bold', color: Colors.black}}>
          title : {item.title}
        </Text>
      </View>
      <Icon
        onPress={() => addFavorite(item)}
        name={focused ? 'star' : 'staro'}
        color={Colors.primary}
        size={25}
      />
    </TouchableOpacity>
  );
};

export default ListComponent;

const styles = StyleSheet.create({});
