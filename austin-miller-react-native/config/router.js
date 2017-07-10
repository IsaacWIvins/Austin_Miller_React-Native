import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AlbumsList from '../components/albums/albumList';
import AlbumShow from '../components/albums/albumShow';
import Connect from '../screens/contact';
import Shows from '../screens/shows';
import About from '../screens/about';
import Player from '../screens/audioPlayer';

export const SongList = StackNavigator({
  AlbumsList: {
    screen: AlbumsList,
    navigationOptions: {
      title: 'Albums',
    }
  },
  AlbumShow: {
    screen: AlbumShow,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  }
})

export const Tabs = TabNavigator({
  AlbumsList: {
    screen: SongList,
    navigationOptions: {
      tabBarLabel: 'Music',
    }
  },
  Shows: {
    screen: Shows,
    navigationOptions: {
      tabBarLabel: 'Shows',
    }
  },
  Connect: {
    screen: Connect,
    navigationOptions: {
      tabBarLabel: 'Connect',
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'About',
    }
  },
  Player: {
    screen: Player,
    navigationOptions: {
      tabBarLabel: 'Player',
    }
  },
});
