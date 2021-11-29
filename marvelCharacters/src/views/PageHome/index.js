/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import HerosList from '../../components/HerosList';

const background = {uri: '../../assets/img/background.png'};
export default props => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/img/background.png')}
        style={{backgroundColor: 'rgba(0,0,0,9)'}}>
        <ScrollView>
          <HerosList />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
