import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
  Button,
} from 'react-native';
import type {HomeScreenProps, Channel} from './types';

import styles from './styles';

const menu = [
  {
    id: 'cctv',
    title: '中央电视台',
    dataURL: 'https://yuan-projects.github.io/YuanPlayer/demo/tvchannels.json',
  },
  {
    id: 'regionalchannels',
    title: '地方卫视',
    dataURL:
      'https://yuan-projects.github.io/YuanPlayer/demo/regionalchannels.json',
  },
];

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Channel[]>([]);
  const [selectedMenuId, setSelectedMenuId] = useState(0);

  const selectedMenu = menu[selectedMenuId];

  const getChannels = async (dataURL: string) => {
    try {
      const response = await fetch(dataURL);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getChannels(selectedMenu.dataURL);
  }, [selectedMenu.dataURL]);

  const menuList = menu.map(item => {
    return (
      <Pressable
        key={item.id}
        android_ripple={{color: 'red'}}
        onPress={() => {
          const newIndex = menu.findIndex(menuItem => menuItem.id === item.id);
          if (newIndex > -1) {
            setSelectedMenuId(newIndex);
          }
        }}
        style={styles.itemContainer}>
        <Text
          style={{
            fontSize: 28,
          }}>
          {item.title}
        </Text>
      </Pressable>
    );
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        //alignItems: 'center',
      }}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        [
          <ScrollView
            key="menu"
            horizontal={true}
            contentContainerStyle={{
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
              //paddingTop: 25,
              //paddingBottom: 25,
              //paddingLeft: 10,
            }}
            style={{
              //flex: 1,
              height: 80,
              backgroundColor: 'pink',
              flexGrow: 0,
              paddingLeft: 20,
            }}>
            {menuList}
          </ScrollView>,
          <View
            key={'listContainer'}
            style={{flex: 1, backgroundColor: 'darkorange', padding: 20}}>
            <FlatList
              /*
              style={{
                backgroundColor: 'red',
                flexGrow: 1,
                flexShrink: 0,
              }}
              */
              key="list"
              data={data}
              renderItem={({item}) => (
                <Pressable
                  android_ripple={{color: 'red'}}
                  style={styles.itemContainer}
                  onPress={({nativeEvent: PressEvent}) => {
                    navigation.navigate('Player', item);
                  }}>
                  <Text style={styles.item}>{item.title}</Text>
                </Pressable>
              )}
            />
          </View>,
        ]
      )}
    </View>
  );
};

export default HomeScreen;
//<View style={styles.container}></View>
