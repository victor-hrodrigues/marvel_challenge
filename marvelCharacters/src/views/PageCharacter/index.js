import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  View,
} from 'react-native';
import {styles} from './style';
import {useComics} from '../../Providers/ComicsProviders';
import {useSeries} from '../../Providers/SeriesProvider/series';
import ComicCard from '../../components/ComicCard';

const background = {uri: '../../assets/img/background.png'};

export default props => {
  const {comics, getId} = useComics();
  const {series, getIdForSeries} = useSeries();

  getId(props.route.params.id);
  getIdForSeries(props.route.params.id);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/img/background.png')}>
        <ScrollView>
          <Text style={styles.name}>{props.route.params.name}</Text>
          <View style={styles.img}>
            <Image
              style={{width: '100%', height: 400}}
              source={{
                uri: `${props.route.params.thumbnail.path}.${props.route.params.thumbnail.extension}`,
              }}
            />
          </View>
          <Text style={styles.descripition}>
            {props.route.params.description.length > 0
              ? props.route.params.description
              : 'Sem descrição.'}
          </Text>

          <Text style={styles.title}>Comics</Text>
          <ScrollView horizontal={true} style={{flex: 1}}>
            {comics.length > 0 ? (
              comics.map(item => {
                return (
                  <ComicCard
                    img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  />
                );
              })
            ) : (
              <Text style={styles.empty}>Não ha quadrinhos</Text>
            )}
          </ScrollView>
          <Text style={styles.title}>Series</Text>
          {
            <ScrollView horizontal={true} style={{flex: 1}}>
              {series.length > 0 ? (
                series.map(item => {
                  return (
                    <ComicCard
                      name={item.title}
                      img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    />
                  );
                })
              ) : (
                <Text style={styles.empty}>Não ha Series</Text>
              )}
            </ScrollView>
          }
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
