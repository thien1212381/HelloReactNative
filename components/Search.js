import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
  } from 'react-native';

var styles = StyleSheet.create({

});
import SearchBooks from './SearchBooks';
import SearchResults from './SearchResults';

class Search extends Component {
    renderScene(route,navigator) {
      switch (route.title) {
        case 'Search Book':  return (<route.component navigator={navigator} />);
        case 'Search Results': return (<route.component navigator={navigator} books={route.passProps.books} clickBack={()=>{
                                                navigator.pop({title:'Search Book'})
                                              }} />);
        default: return (<route.component book={route.passProps.book} clickBack={()=>{
                                                navigator.pop({title:'Search Results'})
                                              }} />);
      }
    }
    render() {
        return (
          <Navigator
              initialRoute={{title: 'Search Book',component: SearchBooks}}
              renderScene= {this.renderScene}
         />
        );
    }
}

module.exports = Search;
