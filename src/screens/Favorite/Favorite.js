import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {Colors} from '../../constants/Styles';
import ListComponent from '../../components/ListComponent';
import {FavoriteStyle} from './FavoriteStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import ListFavComponent from '../../components/ListFavComponent';

const Favorite = props => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await AsyncStorage.getItem('FAVORITE')
      .then(async function (response) {
        setData(JSON.parse(response));
      })
      .catch(function (error) {
        console.log('Something went wrong');
        console.log(error);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View style={FavoriteStyle.main}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={FavoriteStyle.flatlist}
        ListEmptyComponent={() => (
          <View style={{padding: 20}}>
            <Text style={{color: 'red'}}>No Data Found</Text>
          </View>
        )}
        renderItem={({item}) => (
          <ListFavComponent
            item={item}
            {...props}
            onUpdate={() => {
              fetchData();
            }}
          />
        )}
      />
    </View>
  );
};

export default Favorite;
