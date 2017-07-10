import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AlbumsList from '../components/albums/albumList';
import AlbumShow from '../components/albums/albumShow';
import Connect from '../screens/contact';

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
      tabBarLabel: 'Albums',
    }
  },
  Connect: {
    screen: Connect,
    navigationOptions: {
      tabBarLabel: 'Idk yet',
    }
  },
});
