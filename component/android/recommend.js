/**
 * Created by toonew on 2017/4/11.
 */
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Recommend extends Component {
  static navigationOptions = {
    tabBar: {
      label: "推荐"
    }
  };

  render() {
    return (<Text>视频</Text>);
  }
}