import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
  } from 'react-native';

var styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center'
    },
    image: {
        width: 107,
        height: 165,
        padding: 10
    },
    description: {
        padding: 5,
        fontSize: 15,
        color: '#656565'
    },
    button: {
      width:50,
      height:50,
      alignItems: 'center'
    }
});

class BookDetail extends Component {
    render() {
        var book = this.props.book;
        var imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';
        var description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: imageURI}} />
                <TouchableHighlight onPress={()=>this.props.clickBack()}>
                  <View style={styles.button}><Text>Back</Text></View>
                </TouchableHighlight>
                <Text style={styles.description}>{description}</Text>
            </View>
        );
    }
}

module.exports = BookDetail;
