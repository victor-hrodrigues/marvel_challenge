/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {useCharacters} from '../../Providers/CharactersProviders';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

export default props => {
  const {AddToFav} = useCharacters();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{props.nome}</Text>

      <View>
        <TouchableOpacity
          navigation={props.navigation}
          onPress={() => {
            navigation.navigate('Character', props.char);
          }}>
          <Image
            style={{width: 170, height: 160}}
            source={{
              uri: `${props.img}`,
            }}
          />
        </TouchableOpacity>
        <Button
          title="Favoritar"
          buttonStyle={styles.containerButton}
          onPress={() => AddToFav(props.char)}
        />
      </View>
    </View>
  );
};
