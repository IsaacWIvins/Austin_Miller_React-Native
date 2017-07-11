import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

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
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-musical-notes" size={35} color={tintColor} />
    }
  },
  Shows: {
    screen: Shows,
    navigationOptions: {
      tabBarLabel: 'Shows',
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-calendar" size={35} color={tintColor} />
    }
  },
  Connect: {
    screen: Connect,
    navigationOptions: {
      tabBarLabel: 'Connect',
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-contact" size={35} color={tintColor} />
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-glasses" size={35} color={tintColor} />
    }
  },
  Player: {
    screen: Player,
    navigationOptions: {
      tabBarLabel: 'Player',
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-play" size={35} color={tintColor} />
    }
  },
});
