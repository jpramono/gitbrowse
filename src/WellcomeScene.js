// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View,button, Button} from 'react-native';
import styles from './default-StyleScene';
import {ROUTES} from './const/constants';

type Props={
  navigate: (page: string)=> void,
  historypage: Array<string>,
};



export default class WellcomeScene extends Component<Props> {
  
  render() {
    console.log(this.props.historypage);
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>Wellcome</Text>
        <Button title='Search' onPress={() => this.props.navigate(ROUTES.SEARCH)}/>
        <Button title='Browse' onPress={() => this.props.navigate(ROUTES.BROWSE)}/>
      </View>
    );
  }
}


