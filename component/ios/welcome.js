/**
 * Created by toonew on 2017/4/10.
 *
 * 开屏页
 */
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Welcome extends Component {
  render() {
    return (
        <Image style={styles.welcome} source={require('../../assets/image/huibenbao.png')}>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    width: null,
    height: null
  }
});