import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Styles';
import {DetailsStyle} from './DetailsStyle';
import {AddFavorite} from '../../utils/AddFavorite';
import {CheckFavorite} from '../../utils/CheckFavorite';
import {RemoveFavorite} from '../../utils/RemoveFavorite';
import {useFocusEffect} from '@react-navigation/native';

const Details = props => {
  const item = props.route.params;
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
    <View style={DetailsStyle.main}>
      <Icon
        onPress={() => props.navigation.goBack()}
        name="arrowleft"
        color={Colors.primary}
        size={25}
        style={DetailsStyle.back}
      />
      <Image source={{uri: item?.thumbnailUrl}} style={DetailsStyle.img} />

      <Text style={DetailsStyle.heading}>albumId : {item.albumId}</Text>
      <Text numberOfLines={1} style={DetailsStyle.title}>
        title : {item.title}
      </Text>

      <Icon
        onPress={() => addFavorite(item)}
        name={focused ? 'star' : 'staro'}
        color={Colors.primary}
        size={40}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
