import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants/Styles';

export const SplashStyle = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 70,
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
});
