import React, {useEffect, useState} from 'react';

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

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [isMenuLoading, setIsMenuLoading] = useState(true);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Channel[]>([]);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);

  const getMenu = async (url = '') => {
    if (!url) return;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setMenu(json);
      if (json.length) {
        setSelectedMenuIndex(0);
      }
    } catch (error) {
      console.error('error:', error);
    } finally {
      setIsMenuLoading(false);
    }
  };
  const getChannels = async (dataURL: string = '') => {
    if (!dataURL) return;
    try {
      setLoading(true);
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
    getMenu('https://yuan-projects.github.io/YuanPlayer/demo/tvmenu.json');
  }, []);

  useEffect(() => {
    if (selectedMenuIndex < 0) return;
    const selectedMenu: MenuItem = menu[selectedMenuIndex];
    getChannels(selectedMenu.dataURL);
  }, [selectedMenuIndex]);

  const menuList = menu.map((item, index) => {
    return (
      <Pressable
        key={item.id}
        android_ripple={{color: 'red'}}
        onPress={() => {
          const newIndex = menu.findIndex(menuItem => menuItem.id === item.id);
          if (newIndex > -1) {
            setSelectedMenuIndex(newIndex);
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
        {isMenuLoading ? (
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
              }}
              style={{
                height: 80,
                flexGrow: 0,
                paddingLeft: 20,
              }}>
              {menuList}
            </ScrollView>,
            <View
              key={'listContainer'}
              style={{
                flex: 1,
                padding: 20,
                justifyContent: 'center',
                alignItems: 'stretch',
              }}>
              {isLoading ? (
                <ActivityIndicator size="large" />
              ) : (
                <FlatList
                  numColumns={1}
                  key="list"
                  data={data}
                  renderItem={({item}) => (
                    <Pressable
                      android_ripple={{color: 'red'}}
                      style={styles.itemContainer}
                      onPress={({nativeEvent: PressEvent}) => {
                        navigation.navigate('Player', item);
                      }}>
                      <Text style={[styles.item]}>{item.title}</Text>
                    </Pressable>
                  )}
                />
              )}
            </View>,
          ]
        )}
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
