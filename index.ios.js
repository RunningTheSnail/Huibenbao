/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Welcome from './component/ios/welcome';

export default class huibenbao extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Welcome/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('huibenbao', () => huibenbao);
