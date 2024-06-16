import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import {Colors} from './src/constants/Styles';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={Colors.primary}
        animated
        barStyle={'light-content'}
      />
      <StackNavigation />
    </SafeAreaView>
  );
};

export default App;
