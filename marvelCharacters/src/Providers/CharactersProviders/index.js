import React, {createContext, useState, useContext, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import axios from 'axios';

export const CharactersContext = createContext({});

export const CharactersProvider = ({children}) => {
  const [characters, setCharacters] = useState([]);
  const [favCharsState, setFavCharsState] = useState([]);
  const [favCharsName, setFavCharsName] = useState([]);
  const [Num, setDefNum] = useState(1);
  const [offSet, setOffSet] = useState(0);

  const moreChars = () => {
    setOffSet(Num * 20);
    setDefNum(Num + 1);
  };

  const adicionadoFavs = () => {
    ToastAndroid.show(
      'Personagem adicionado a os favoritos',
      ToastAndroid.SHORT,
    );
  };

  const duplicataResponse = () => {
    ToastAndroid.show(
      'O personagem ja se encontra na lista de favoritos',
      ToastAndroid.SHORT,
    );
  };

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?limit=20&offset=${offSet}?&ts=1638159963&apikey=3aab527e676e8981b72f4b4d390cc6c3&hash=77ee8df9e711a88f1d0fe7802e98f5b6`,
      )
      .then(response => {
        setCharacters(response.data.data.results);
      });
  }, [offSet]);

  const AddToFav = char => {
    const favchar = {
      name: char.name,
      img: `${char.thumbnail.path}.${char.thumbnail.extension}`,
    };

    if (favCharsName.includes(char.name)) {
      duplicataResponse();
    } else {
      setFavCharsState([...favCharsState, favchar]);
      setFavCharsName([...favCharsName, favchar.name]);
      adicionadoFavs();
    }
  };

  return (
    <CharactersContext.Provider
      value={{characters, AddToFav, favCharsState, moreChars}}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);
