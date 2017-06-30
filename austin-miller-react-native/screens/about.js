import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SectionList } from 'react-native';


const aboutSections = [
  {
    key: 0,
    data: [{ key: 0, title: "Early Life",
    description: "Austin Miller’s interest in music emerged at a young age. Raised all-American on Springsteen, Petty, and piano lessons." }]
  },
  {
    key: 1,
    data: [{ key: 0, title: "Insparation",
    description: "Over the years, inspiration has continued to strike" }]
  },
  {
    key: 2,
    data: [{ key: 0, title: "Insparation",
    description: "Over the years, inspiration has continued to strike" }]
  },
  {
    key: 3,
    data: [{ key: 0, title: "Insparation",
    description: "Over the years, inspiration has continued to strike" }]
  },
  {
    key: 4,
    data: [{ key: 0, title: "Insparation",
    description: "Over the years, inspiration has continued to strike" }]
  },
];

export default class About extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ScrollView horizontal>
            <Image source={require('../assets/images/headshot.jpg')} style={styles.boxSmall} />
            <Image source={require('../assets/images/suaveAF.jpg')} style={styles.boxSmall} />
            <Image source={require('../assets/images/sunnyAnd65.jpg')} style={styles.boxSmall} />
            <Image source={require('../assets/images/austinOnStage.jpg')} style={styles.boxSmall} />
            <Image source={require('../assets/images/jammin.jpg')} style={styles.boxSmall} />
            <Image source={require('../assets/images/faceWithTheBass.jpg')} style={styles.boxSmall} />
        </ScrollView>
        <SectionList
          style={styles.list}
          sections={aboutSections}
          renderItem={this.renderItems}
          renderHeaders={this.renderHeaders}
        />
      </ScrollView>
    );
  }

  renderItems = ({item}) => {
    console.log({item})
    return (
      <View
        style={styles.row}
        key={item.key}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    )
  };
  //
  // renderHeaders = ({sections}) => {
  //   return (
  //     <View style={styles.headers}>
  //       <Text style={styles.headerText}>{sections.key}</Text>
  //     </View>
  //   )
  // };

}//ends class extention

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(89, 75, 73)',
  },
  boxSmall: {
    width: 300,
    height: 300,
    marginTop: 60,
    marginRight: 15,
  },
  list: {
    flex: 1,
  },
  row: {
    backgroundColor: 'white',
    marginTop: 30,
    padding: 30,
  },
  headers: {
    backgroundColor: 'whitesmoke',
    color: 'rgb(41, 13, 37)',
    padding: 10,
  },
  title: {
    flex: 1,
    marginTop: 30,
    fontSize: 40,
    fontWeight: '500',
    padding: 10,
    alignItems: 'center',
  },
  description: {
    fontSize: 20,
    alignItems: 'center'
  }
});
