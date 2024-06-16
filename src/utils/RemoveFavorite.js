import AsyncStorage from '@react-native-async-storage/async-storage';

export const RemoveFavorite = async item => {
  const my_favorite = await AsyncStorage.getItem('FAVORITE');

  const convert = JSON.parse(my_favorite);

  const newArray = convert.filter(value => value?.id != item?.id);

  await AsyncStorage.setItem('FAVORITE', JSON.stringify(newArray));
};
