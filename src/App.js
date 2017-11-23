// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View,BackHandler} from 'react-native';
import WellcomeScene from './WellcomeScene';
import SearchScene from './SearchScene';
import BrowseScene from './BrowseScene';
import styles from './default-StyleScene';
import {ROUTES} from './const/constants';
type Props={};
type State={
  currentPage: string,
  historyPage: array<string>,
};

export default class App extends Component<Props,State> {
  state={
    currentPage : ROUTES.HOME,
    historyPage : []
  }
  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress",this._onBackHardwarepress);
  }
  componentWillUnmount(){
    BackHandler.removeEventListener("hardwareBackPress",this._onBackHardwarepress);
  }
  _onBackHardwarepress(){
    if(this.state.currentPage=== ROUTES.HOME){
      return false;
    }else{
      this.setState({
        currentPage: ROUTES.HOME
      });
      return true;
    }
  }
  gopage(page,historypage){

  }
  backpage(historypage){

  }
  render() {
    
      let navigate = page => this.setState({currentPage: page});
      switch (this.state.currentPage) { 
              case ROUTES.HOME: { 
                 return <WellcomeScene navigate={navigate} />; 
               } 
               case ROUTES.SEARCH: { 
                 return <SearchScene navigate={navigate} />; 
               } 
               case ROUTES.BROWSE: { 
                 return <BrowseScene navigate={navigate} />; 
               } 
               default: { 
                 throw new Error('Unknown route.'); 
               }
              }
  }
}


