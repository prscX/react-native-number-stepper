/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { RNNumberStepper } from 'react-native-number-stepper'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RNNumberStepper
          value={5}
          size={1}
          autoRepeat={true}
          // width={300}
          // height={100}
          // leftButtonText={'M'}
          // rightButtonText={'P'}
          // buttonsTextColor={'#ebebeb'}
          // buttonsBackgroundColor={'#fd6e61'}
          // labelTextColor={'#858585'}
          // labelBackgroundColor={'#eaeef0'}
          // buttonsContainerWidth={60}
          // borderColor={'#000'}
          // borderWidth={5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
