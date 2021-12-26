import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './style';

const Container = ({style, children}) => {
  return (
    <ScrollView>
      <View style={[style.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};



export default Container;