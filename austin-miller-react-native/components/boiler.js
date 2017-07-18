import React, { Component } from 'react'
import { AppRegistry, Image, Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider, graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Initialize the Apollo Client
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj51abp43qd2c0196l6xsycsi',
  }),
})

const allPostsQuery = gql`
  query posts {
    allPosts {
      id
      imageURL
      description
    }
}`;

const allFilesQuery = gql`
  query files {
    allFiles {
      name
      url
      createdAt
    }
}`;

class Files extends Component {

  renderFiles = ({id, name, url}) => {
    console.log("id in renderFiles ======", id)
    console.log("name in renderFiles ======", name)
    return (
      <Image
        key={name}
        style={styles.filesImage}
        source={{uri: url}}
      />
    )
  }

  render() {
    console.log("props for Files", this.props)
    const {data} = this.props
    const {loading, allFiles} = data
    console.log("==========================")
    console.log("allFiles ///////", allFiles)
    if (loading) {
      return <ActivityIndicator />
    }
    return (
      <View style={styles.files}>
        {allFiles.map(this.renderFiles)}
      </View>
    )
  }
}

class Feed extends Component {
  renderPost = ({id, imageURL}) => {
    console.log("id in RENDERPOST ======", id)
    console.log("imageUrl in RENDERPOST ======", imageURL)
    return (
      <Image
        key={id}
        style={styles.image}
        source={{uri: imageURL}}
      />
    )
  }

  render() {
    console.log("props for Feed", this.props)
    const {data} = this.props
    const {loading, allPosts} = data
    console.log("==========================")
    console.log("allPosts ///////", allPosts)
    if (loading) {
      return <ActivityIndicator />
    }
    return (
      <View style={styles.feed}>
        {allPosts.map(this.renderPost)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 15,
  },
  files: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filesImage: {
    width: 150,
    height: 150,
    margin: 15,
  },
  container: {
    flex: 1,
  }
})

// Inject query response as `this.props.data`
const FeedWithData = graphql(allPostsQuery)(Feed)
const FeedWithFiles = graphql(allFilesQuery)(Files)

// ApolloProvider lets us use Apollo Client in descendant components
export default App = () => (
  <ApolloProvider client={client}>
    <View style={styles.container}>
      <FeedWithData />
      <FeedWithFiles />
    </View>
  </ApolloProvider>
)


AppRegistry.registerComponent('App', () => App)
