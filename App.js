
import React, { Component } from 'react';
import Navigation from './Navigation/Navigation'
import Firebase from './components/Firebase'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.ignoredYellowBox = ['Setting a timer'];
type Props = {};
export default class App extends Component<Props> {

  componentWillMount(){
    Firebase.init();
  }
  render() {
    return (
      <Navigation/>
    );
  }
}
