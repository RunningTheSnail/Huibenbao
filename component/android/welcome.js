/**
 * Created by toonew on 2017/4/10.
 */
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
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import NoStatusBar from './no_statusbar';

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('welcome welcome');
    return (
        <View style={styles.container}>
          <NoStatusBar/>
          <Image style={styles.welcome} source={require('../../assets/image/huibenbao.png')}/>
        </View>
    );
  }

  componentDidMount() {
    this.skipToSplash();
  }

  skipToSplash() {
    const {navigate} = this.props.nav;
    navigate('Splash');
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