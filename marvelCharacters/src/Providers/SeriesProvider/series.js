import React, {createContext, useState, useContext, useEffect} from 'react';
import axios from 'axios';

export const SeriesContext = createContext({});

export const SeriesProvider = ({children}) => {
  const [series, setseries] = useState([]);
  const [idChar, setIdChar] = useState();

  const getIdForSeries = id => {
    setIdChar(id);
  };

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters/${idChar}/series?&ts=1638159963&apikey=3aab527e676e8981b72f4b4d390cc6c3&hash=77ee8df9e711a88f1d0fe7802e98f5b6`,
      )
      .then(response => {
        setseries(response.data.data.results);
      });
  }, [idChar]);

  return (
    <SeriesContext.Provider value={{series, getIdForSeries}}>
      {children}
    </SeriesContext.Provider>
  );
};

export const useSeries = () => useContext(SeriesContext);
