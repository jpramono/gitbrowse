// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View,button, Button} from 'react-native';
import styles from './default-StyleScene';
import {ROUTES} from './const/constants';

type Props={
  navigate: (page: string)=> void,
};
type State={
  page:string,
};


export default class WellcomeScene extends Component<Props,State> {
 state={
   page:ROUTES.HOME,
 }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>Wellcome</Text>
        <Button title='Search' onPress={() => this.props.navigate(ROUTES.SEARCH)}/>
        <Button title='Browse' onPress={() => this.props.navigate(ROUTES.BROWSE)}/>
      </View>
    );
  }
}


