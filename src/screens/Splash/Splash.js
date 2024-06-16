import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {SplashStyle} from './SplashStyle';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('BottomTab');
    }, 2000);
  }, []);

  return (
    <View style={SplashStyle.main}>
      <Text style={SplashStyle.title}>Test</Text>
    </View>
  );
};

export default Splash;
