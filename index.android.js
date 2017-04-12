/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import Welcome from './component/android/welcome';
import Splash from './component/android/splash';
import MainCenter from './component/android/main';

export default class Huibenbao extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };

  render() {
    console.log('welcome huibenbao');
    return (
        <View style={styles.container}>
          <Welcome nav={this.props.navigation}/>
        </View>
    );
  }

}

const HuibenbaoNav = StackNavigator({
  Huibenbao: {screen: Huibenbao},
  Splash: {screen: Splash},
  MainCenter: {screen: MainCenter}
});


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


AppRegistry.registerComponent('huibenbao', () => HuibenbaoNav);
