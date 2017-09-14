/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Login from './app/iOS/Login';


import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,

} from 'react-native';

export default class life_log extends Component {
  render() {
    return (
      <NavigatorIOS
        navigationBarHidden={true}
        initialRoute={{title: "Login", component: Login}} //required for NaviOS
        style = {{flex: 1}}
      />
    );
  }
}



AppRegistry.registerComponent('life_log', () => life_log);