import React from 'react';
import {CharactersProvider} from './CharactersProviders';
import {ComicsProvider} from './ComicsProviders';
import {SeriesProvider} from './SeriesProvider/series';

const Providers = ({children}) => {
  return (
    <CharactersProvider>
      <ComicsProvider>
        <SeriesProvider>{children}</SeriesProvider>
      </ComicsProvider>
    </CharactersProvider>
  );
};

export default Providers;
