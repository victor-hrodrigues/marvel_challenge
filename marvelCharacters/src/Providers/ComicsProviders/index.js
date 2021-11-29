import React, {createContext, useState, useContext, useEffect} from 'react';
import axios from 'axios';

export const ComicsContext = createContext({});

export const ComicsProvider = ({children}) => {
  const [comics, setComics] = useState([]);
  const [idChar, setIdChar] = useState();

  const getId = id => {
    setIdChar(id);
  };

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters/${idChar}/comics?&ts=1638159963&apikey=3aab527e676e8981b72f4b4d390cc6c3&hash=77ee8df9e711a88f1d0fe7802e98f5b6`,
      )
      .then(response => {
        setComics(response.data.data.results);
      });
  }, [idChar]);

  return (
    <ComicsContext.Provider value={{comics, getId}}>
      {children}
    </ComicsContext.Provider>
  );
};

export const useComics = () => useContext(ComicsContext);
