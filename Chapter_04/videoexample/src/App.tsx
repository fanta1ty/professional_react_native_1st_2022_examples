import Home from './views/home/Home.tsx';
import React from 'react';
import Genre from './views/genre/Genre.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Movie from './views/movie/Movie.tsx';
import {MainStackParamList} from './@types/Stacks';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ColorConstants, FontConstants} from './constants/StyleConstants.ts';
import User from './views/user/User.tsx';

const MainStack = createNativeStackNavigator<MainStackParamList>();
const TabNavigator = createBottomTabNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorConstants.background,
        },
        headerTintColor: ColorConstants.font,
        headerTitleStyle: {
          fontWeight: FontConstants.weightBold,
        },
      }}>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{title: 'Movie Genres'}}
      />
      <MainStack.Screen
        name="Genre"
        component={Genre}
        options={{title: 'Movie Genres'}}
      />
      <MainStack.Screen
        name="Movie"
        component={Movie}
        options={({route}) => ({title: route.params.movie.title})}
      />
    </MainStack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        <TabNavigator.Screen
          name="Main"
          component={MainStackScreen}
          options={{headerShown: false}}
        />
        <TabNavigator.Screen
          name="User"
          component={User}
          options={{
            headerStyle: {
              backgroundColor: ColorConstants.background,
            },
            headerTintColor: ColorConstants.font,
            headerTitleStyle: {
              fontWeight: FontConstants.weightBold,
            },
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
