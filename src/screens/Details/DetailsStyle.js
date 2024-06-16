import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Styles';

export const DetailsStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 150,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
