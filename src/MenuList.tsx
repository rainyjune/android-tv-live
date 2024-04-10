import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';

import styles from './styles';

export default function MenuList({data, onPress, selectedMenuIndex}) {
  const menu = data;
  const menuList = menu.map((item, index) => {
    return (
      <Pressable
        key={item.id}
        android_ripple={{color: 'lightblue'}}
        onPress={() => {
          const newIndex = menu.findIndex(menuItem => menuItem.id === item.id);
          if (newIndex > -1) {
            onPress(newIndex);
          }
        }}
        style={styles.itemContainer}>
        <Text
          style={[
            {
              paddingHorizontal: 0,
              paddingVertical: 5,
              fontSize: 28,
              fontWeight: 'bold',
            },
            index === selectedMenuIndex
              ? {
                  borderBottomColor: 'white',
                  borderBottomWidth: 2,
                }
              : {},
          ]}>
          {item.title}
        </Text>
      </Pressable>
    );
  });

  return (
    <ScrollView
      key="menu"
      horizontal={true}
      contentContainerStyle={{
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{
        height: 80,
        flexGrow: 0,
        paddingLeft: 20,
      }}>
      {menuList}
    </ScrollView>
  );
}
