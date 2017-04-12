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

import {TabNavigator, TabView} from 'react-navigation';
import Video from './video';
import Live from './live';
import My from './my';
import Recommend from './recommend';
import Huibenguan from './hui_ben_guan';
import ListenHuiben from './listen_hui_ben';
import GrowthRecord from './growth_record';
var ScrollableTabView = require('react-native-scrollable-tab-view');

class MainPage extends Component {
  static navigationOptions = {
    header: {
      visible: false
    },
    tabBar: {
      label: "首页",
      icon: ({focused}) => {
        const uri = focused ? require('../../assets/image/home_tab_home_selected.png') : require('../../assets/image/home_tab_home_normal.png');
        return <Image source={uri} style={{width: 26, height: 26}}/>
      }
    }
  };

  render() {
    return (
        <ScrollableTabView>
          <Recommend tabLabel='推荐'/>
          <Huibenguan tabLabel='绘本馆'/>
          <ListenHuiben tabLabel='听绘本'/>
          <GrowthRecord tabLabel='成长记录'/>
        </ScrollableTabView>
    );
  }
}

const MainNav = TabNavigator({
  Recommend: {screen: MainPage},
  Huibenguan: {screen: Huibenguan},
  ListenHuiben: {screen: ListenHuiben},
  GrowthRecord: {screen: GrowthRecord}
}, {
  navigationOptions: {
    header: {
      visible: false
    },
    tabBar: {
      label: "首页",
      icon: ({focused}) => {
        const uri = focused ? require('../../assets/image/home_tab_home_selected.png') : require('../../assets/image/home_tab_home_normal.png');
        return <Image source={uri} style={{width: 26, height: 26}}/>
      }
    }
  }
});

export default MainCenter = TabNavigator({
  Home: {
    screen: MainPage
  },
  Video: {
    screen: Video
  },
  Live: {
    screen: Live
  },
  My: {
    screen: My
  }
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: TabView.TabBarBottom,
  tabBarOptions: {
    scrollEnabled: false,
    showIcon: true,
    labelStyle: {
      fontSize: 12
    },
    activeTintColor: '#e91e63',
  },
  animationEnabled: false,
  navigationOptions: {
    header: {
      visible: false
    }
  },
  swipeEnabled: false
});
