import React, {Component} from 'react';
import {StyleSheet, Text, View,button, Button} from 'react-native';
import styles from './default-StyleScene';
import {ROUTES} from './const/constants';

type Props={
    navigate: (page: string)=> void,
  };
  
  
  export default class SearchScene extends Component<Props> {
   
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.counterText}>search</Text>
          <Button title='back' onPress={() => this.props.navigate(ROUTES.HOME)}/>
         
        </View>
      );
    }
  }