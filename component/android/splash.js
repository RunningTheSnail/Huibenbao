/**
 * Created by toonew on 2017/4/10.
 */
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ViewPagerAndroid
} from 'react-native';

export default class Splash extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };

  render() {
    console.log('welcome splash');
    return (
        <ViewPagerAndroid style={styles.container} initialPage={0}>
          <View>
            <Image style={styles.welcome} source={require('../../assets/image/aaa.png')}/>
          </View>
          <View>
            <Image style={styles.welcome} source={require('../../assets/image/bbb.png')}/>
          </View>
          <View>
            <Image style={styles.welcome} source={require('../../assets/image/ccc.png')}/>
          </View>
          <View>
            <Image style={styles.welcome} source={require('../../assets/image/ddd.png')}/>
          </View>
          <View>
            <Image style={styles.welcome} source={require('../../assets/image/eee.jpeg')}/>
          </View>
        </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    transform: []
  }
});