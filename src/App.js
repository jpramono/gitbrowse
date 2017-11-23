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
  historyPage: Array<string>,
};

export default class App extends Component<Props,State> {
  state={
    currentPage : ROUTES.HOME,
    historyPage : [ROUTES.HOME],
  }
  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress",this._onBackHardwarepress);
  }
  componentWillUnmount(){
    BackHandler.removeEventListener("hardwareBackPress",this._onBackHardwarepress);
  }
  _onBackHardwarepress=()=>{
    if(this.state.historyPage.length===0){
      return false;
    }else{
      let sizehistpage=this.state.historyPage.length;
      
      let newhistpage = [...this.state.historyPage];
      newhistpage.pop();
      //let newhistpage =[...histpage];
      console.log(newhistpage);
      this.setState({
        currentPage: this.state.historyPage[sizehistpage-1],
        historyPage: newhistpage,
      });
      return true;
    }
  }
  
  render() {
    
      let navigate = page => {this.setState({
        currentPage: page,
        historyPage: [...this.state.historyPage, page],
      })};
     
      switch (this.state.currentPage) { 
        
              case ROUTES.HOME: { 
                 return <WellcomeScene navigate={navigate} historypage={this.state.historyPage} />; 
               } 
               case ROUTES.SEARCH: { 
                 return <SearchScene navigate={navigate} historypage={this.state.historyPage}/>; 
               } 
               case ROUTES.BROWSE: { 
                 return <BrowseScene navigate={navigate} historypage={this.state.historyPage}/>; 
               } 
               default: { 
                 throw new Error('Unknown route.'); 
               }
              }
  }
}


