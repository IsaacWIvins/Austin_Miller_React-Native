import React, { Component } from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SocialIcon } from 'react-native-elements'

import AlbumsListData from '../components/album/albumlist'
import SongsList from '../components/album/songslist'
import About from '../components/about/about'
import Facebook from '../components/connect/facebook'
import Spotify from '../components/connect/spotify'
import BandCamp from '../components/connect/bandcamp'

const defaultNav = {
  headerStyle: {
    backgroundColor: 'black',
    padding: 15,
    height: 40,
  },
  headerTintColor: 'whitesmoke',
}

export const MusicStack = StackNavigator({
  AlbumsListData: {
    screen: AlbumsListData,
    headerMode: 'screen',
    navigationOptions: {
      ...defaultNav,
      title: 'Albums',
    }
  },
  SongsList: {
    screen: SongsList,
    navigationOptions: ({ navigation }) => ({
      ...defaultNav,
      title: `${navigation.state.params.albumName}`,
    }),
  }
});
SocialIcon
export const ConnectTabs = TabNavigator({
  Facebook: {
    screen: Facebook,
    headerMode: 'screen',
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <SocialIcon type="facebook" size={35} color={tintColor} />
    }
  },
  Spotify: {
    screen: Spotify,
    navigationOptions: {
      tabBarLabel: 'Music',
      tabBarIcon: ({ tintColor }) => <SocialIcon type="soundcloud" size={35} color={tintColor} />
    }
  },
  BandCamp: {
    screen: BandCamp,
    navigationOptions: {
      ...defaultNav,
      title: 'BandCamp',
    }
  }
},
{
  tabBarOptions: {
    showLabel: false,
    style: {
      height: 55,
      backgroundColor: 'transparent',
    },
    activeBackgroundColor: 'rgb(50, 51, 48)',
  }
},);

export const Tabs = TabNavigator(
  {
    MusicStack: {
      screen: MusicStack,
      navigationOptions: {
        tabBarLabel: 'Music',
        tabBarIcon: ({ tintColor }) => <Ionicons name="md-musical-notes" size={35} color={tintColor} />
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="md-information-circle" size={35} color={tintColor} />
      }
    },
    ConnectTabs: {
      screen: ConnectTabs,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="md-calendar" size={35} color={tintColor} />
      }
    }
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      style: {
        marginTop: 20,
        backgroundColor: 'black',
      },
      activeTintColor: 'white',
      showLabel: false,
    }
  },
);

export default Tabs;
