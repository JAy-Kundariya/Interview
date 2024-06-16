import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../constants/Styles';
import {RemoveFavorite} from '../utils/RemoveFavorite';

const ListFavComponent = props => {
  const {item} = props;
  const [focused, setFocused] = useState(true);

  const addFavorite = async item => {
    RemoveFavorite(item)
      .then(() => {
        setFocused(false);
        if (props.onUpdate) props.onUpdate();
      })
      .catch(error => {
        console.log(error);
      });
  };

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

export default ListFavComponent;
