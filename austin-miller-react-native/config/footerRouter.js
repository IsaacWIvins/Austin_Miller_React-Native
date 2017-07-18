import React, { Component } from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'

import Footer from '../components/footer/footer'
import AudioPlayer from '../components/footer/audioPlayer'

const defaultNav = {
  header: null,
}

const NewFooter = ({ navigation, screenProps }) => <Footer changer={screenProps} navigation={navigation} />;

const OldAudio = ({ navigation, screenProps }) => <AudioPlayer changer={screenProps} navigation={navigation} />;

export const FooterStack = StackNavigator({
  NewFooter: {
    screen: NewFooter,
    navigationOptions: {
      ...defaultNav,
    },
  },
  OldAudio: {
    screen: OldAudio,
    navigationOptions: {
      ...defaultNav,
    },
  },
}, {
  mode: 'modal'
});

export default FooterStack;
