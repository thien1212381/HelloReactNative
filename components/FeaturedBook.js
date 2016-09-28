import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import BookList from './BookList';
import BookDetail from './BookDetail';



class Featured extends Component {
    renderScene(route,navigator){
      switch (route.title) {
        case 'Book List': return (<BookList navigator={navigator} />);
        default :return (<BookDetail clickBack={()=>{
                                                navigator.pop({title:'Book List'})
                                              }} book={route.book}/>);
      }
    }
    render() {
        return (
  	       <Navigator
                      initialRoute={{title: 'Book List'}}
                      renderScene= {this.renderScene}
          />
        );
    }
}

module.exports = Featured;
