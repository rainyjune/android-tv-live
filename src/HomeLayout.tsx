import React, {Children, useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
  ImageBackground,
} from 'react-native';
import type {HomeScreenProps, Channel, MenuItem} from './types';

import styles from './styles';
export default function HomeLayout({children}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <ImageBackground
        source={require('./assets/homeScreenBackground.jpg')}
        resizeMode="stretch"
        style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
}
