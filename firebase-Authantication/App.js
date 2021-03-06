import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import { Header, Button, Spinner, Card, CardSection } from './src/components/common'
import { SignupForm, LoginForm } from './src/components'

export default class App extends React.Component {
  state = { loggedIn: null }
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCXs2qMUazezjisKUS2ICNAKbasCkJdGDQ",
      authDomain: "react-sample-17caa.firebaseapp.com",
      databaseURL: "https://react-sample-17caa.firebaseio.com",
      projectId: "react-sample-17caa",
      storageBucket: "react-sample-17caa.appspot.com",
      messagingSenderId: "411422279834"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection><Button onPress={() => firebase.auth().signOut()}>Log Out</Button></CardSection>);
      case false:
        return <LoginForm />;
      default:
        return <Spinner />
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authantication'} />
        {this.renderContent()}
      </View >
    );
  }
}
