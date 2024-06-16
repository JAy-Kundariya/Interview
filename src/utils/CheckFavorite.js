import AsyncStorage from '@react-native-async-storage/async-storage';

export const CheckFavorite = async item => {
  const my_favorite = await AsyncStorage.getItem('FAVORITE');
  const convert = JSON.parse(my_favorite);

  if (my_favorite != null) {
    const newArray = convert.filter(value => value?.id == item?.id);
    if (newArray.length > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
