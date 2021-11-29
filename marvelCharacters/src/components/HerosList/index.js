/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View} from 'react-native';
import CardHero from '../CardHero';
import {useCharacters} from '../../Providers/CharactersProviders';
import {styles} from './styles';

const HerosList = props => {
  const {characters, moreChars} = useCharacters();

  return (
    <View
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
      {characters.map(character => {
        return (
          <CardHero
            key={character.id}
            nome={character.name}
            img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            char={character}
            navigation={props.navigation}
          />
        );
      })}
      <Button
        title="Mais personagens"
        onPress={moreChars}
        style={styles.button}
      />
    </View>
  );
};

export default HerosList;
