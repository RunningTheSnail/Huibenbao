/**
 * Created by toonew on 2017/4/11.
 */
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

export default class Huibenguan extends Component {
  static navigationOptions = {
    tabBar: {
      label: "绘本馆",
      icon: ({focused}) => {
        if (focused) {
          return <Image source={require('../../assets/image/home_tab_home_selected.png')}
                        style={{width: 26, height: 26}}/>
        } else {
          return <Image source={require('../../assets/image/home_tab_home_normal.png')}
                        style={{width: 26, height: 26}}/>
        }
      }
    }
  };

  render() {
    return (<Text>视频</Text>);
  }
}