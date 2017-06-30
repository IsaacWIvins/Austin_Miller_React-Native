import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class Connect extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require('../assets/images/headshot.jpg')} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>Contact Austin</Text>
          <Text>Paragraph talking about reasons to connect with austin or the proper times and what not.</Text>
        </View>
        <View>
          <Text style={styles.title}>Follow</Text>
          {/* //this part with have links to
          //twitter
          //spotify
          //facebook
          //ohter austin shit that i can't even imagine */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(193, 78, 247)',
  },
  imgContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 3,
    borderColor: 'whitesmoke',
  }
});
