// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WellcomeScene from './WellcomeScene';
import styles from './Wellcome-StyleScene';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <WellcomeScene />
      </View>
    );
  }
}


