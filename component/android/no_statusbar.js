/**
 * Created by toonew on 2017/4/10.
 */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

export default class NoStatusBar extends Component {
  render() {
    return (
        <StatusBar hidden={true}/>
    );
  }
}