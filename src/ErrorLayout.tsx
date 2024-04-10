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

import HomeLayout from './HomeLayout';
export default function ErrorLayout({children}) {
  return (
    <HomeLayout>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            //backgroundColor: 'red',
            textAlign: 'center',
          }}>
          {children}
        </Text>
      </View>
    </HomeLayout>
  );
}
