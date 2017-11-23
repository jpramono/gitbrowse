import React, {Component} from 'react';
import {StyleSheet, Text, View,button, Button} from 'react-native';
import styles from './default-StyleScene';
import {ROUTES} from './const/constants';

type Props={
    navigate: (page: string)=> void,
    historypage: Array<string>,
  };
  
  
  export default class BrowseScene extends Component<Props> {
   
    render() {
      // console.log(this.props.historypage);
      return (
        <View style={styles.container}>
          <Text style={styles.counterText}>Browse</Text>
          <Button title='back' onPress={() => this.props.navigate(ROUTES.HOME)}/>
         
        </View>
      );
    }
  }