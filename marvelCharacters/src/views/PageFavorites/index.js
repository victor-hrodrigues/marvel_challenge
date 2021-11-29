import React from 'react';
import {SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import FavList from '../../components/FavoritsList';
import {styles} from './style';
const background = {uri: '../../assets/img/background.png'};
export default props => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/img/background.png')}
        style={styles.imgBack}>
        <ScrollView>
          <FavList />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
