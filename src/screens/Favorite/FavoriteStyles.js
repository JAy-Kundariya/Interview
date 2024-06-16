import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Styles';

export const FavoriteStyle = StyleSheet.create({
  main: {
    flex: 1,

    backgroundColor: Colors.background,
  },
  flatlist: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 110,
    gap: 10,
  },
  loaderBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background + '00',
  },
});
