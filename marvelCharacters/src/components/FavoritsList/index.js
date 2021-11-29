/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import CardHeroFav from '../CardHeroFav';
import {useCharacters} from '../../Providers/CharactersProviders';

const FavList = props => {
  const {favCharsState} = useCharacters();

  // const chars = JSON.parse(teste);

  return (
    <View
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
      {favCharsState.length > 0 ? (
        favCharsState.map(character => {
          return <CardHeroFav nome={character.name} img={`${character.img}`} />;
        })
      ) : (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 42,
            color: 'white',
            margin: 'auto',
          }}>
          Não foram adicionados favoritos ainda
        </Text>
      )}
    </View>
  );
};

export default FavList;
