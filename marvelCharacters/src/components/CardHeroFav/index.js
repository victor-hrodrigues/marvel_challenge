/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../CardHero/style';

export default props => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{props.nome}</Text>

      <View>
        <Image
          style={{width: 170, height: 160}}
          source={{
            uri: `${props.img}`,
          }}
        />
      </View>
    </View>
  );
};
