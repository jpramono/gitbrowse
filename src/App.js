// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WellcomeScene from './WellcomeScene';
import styles from './default-StyleScene';
type Props={
  
}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <WellcomeScene />
      </View>
    );
  }
}


