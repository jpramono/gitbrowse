// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View,button, Button} from 'react-native';
import styles from './default-StyleScene';
type Props={};
type State={
current:string,
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
        <Button title='Search' onPress={()=>{}}/>
        <Button title='Browse' onPress={()=>{}}/>
      </View>
    );
  }
}


