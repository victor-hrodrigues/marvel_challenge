/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';

export default props => {
  return (
    <View style={{margin: 20}}>
      <Image
        style={{width: 150, height: 230}}
        source={{
          uri: `${props.img}`,
        }}
      />
    </View>
  );
};
