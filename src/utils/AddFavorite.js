import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddFavorite = async item => {
  const my_favorite = await AsyncStorage.getItem('FAVORITE');
  const data = [item];

  if (my_favorite != null) {
    const storeData = JSON.parse(my_favorite);
    const newArray = storeData.concat(data);
    await AsyncStorage.setItem('FAVORITE', JSON.stringify(newArray));
  } else {
    const storeData = [];
    const newArray = storeData.concat(data);
    await AsyncStorage.setItem('FAVORITE', JSON.stringify(newArray));
  }
};
