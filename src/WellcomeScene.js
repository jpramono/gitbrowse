// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View,button, Button} from 'react-native';
import styles from './Wellcome-StyleScene';
type Props={};
type State={
current:string,
prev:string,
};

export default class WellcomeScene extends Component<Props,State> {
  constructor(){
    super(...arguments);
    this.state={
      current:'Wellcome',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>Wellcome</Text>
        <Button title='Search'/>
        <Button title='Browse'/>
      </View>
    );
  }
}


