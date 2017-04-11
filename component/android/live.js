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
  ViewPagerAndroid,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Live extends Component {
  static navigationOptions = {
    tabBar: {
      label: "直播",
      icon: ({focused}) => {
        if (focused) {
          return <Image source={require('../../assets/image/icon_zhibo_y.png')}
                        style={{width: 26, height: 26}}/>
        } else {
          return <Image source={require('../../assets/image/icon_zhibo_n.png')}
                        style={{width: 26, height: 26}}/>
        }
      }
    }
  };

  render() {
    return (<Text>直播</Text>);
  }
}