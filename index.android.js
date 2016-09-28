/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{Component} from 'react';
import Featured from './components/FeaturedBook';
import Search from './components/Search';
import BookList from './components/BookList';
import {
  StyleSheet,
  View,
  Text,
  AppRegistry
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

    render() {
        return (
          <ScrollableTabView>
            <Featured tabLabel="Featured"/>
            <Search tabLabel="Seach"/>
          </ScrollableTabView>

        );
    }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
