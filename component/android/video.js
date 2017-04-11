/**
 * Created by toonew on 2017/4/11.
 */
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ViewPagerAndroid,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Video extends Component {
  static navigationOptions = {
    tabBar: {
      label: "视频",
      icon: ({focused}) => {
        if (focused) {
          return <Image source={require('../../assets/image/hfaxian.png')}
                        style={{width: 26, height: 26}}/>
        } else {
          return <Image source={require('../../assets/image/faxian.png')}
                        style={{width: 26, height: 26}}/>
        }
      }
    }
  };

  render() {
    return (<Text>视频</Text>);
  }
}