import PageHome from '../views/PageHome';
import PageFavorites from '../views/PageFavorites';
import PageCharacter from '../views/PageCharacter';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home-outline' : 'home';
              break;
            case 'Favorites':
              iconName = focused ? 'star-outline' : 'star';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarOptions: {
          activeTintColor: '#800000',
          inactiveTintColor: 'white',
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: 'gray',
        },
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={PageHome} />
      <Tab.Screen name="Favorites" component={PageFavorites} />
    </Tab.Navigator>
  );
};

const Tese = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Tabs"
            component={tabs}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Character" component={PageCharacter} />
          <Stack.Screen name="Homea" component={PageHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Tese;
