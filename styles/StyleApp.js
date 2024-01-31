import React, { Component } from 'react';

import {
   View,
   StyleSheet
} from 'react-native';


export default style = StyleSheet.create({
   navbar: {
      backgroundColor: 'yellow',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '10%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row'
   },
   content: {
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
   }
});