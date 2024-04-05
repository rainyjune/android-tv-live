import React, { useEffect, useState, useRef } from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';

import styles from './styles';

type Channel = {
    title: string;
    videoURL: string;
};

const HomeScreen = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Channel[]>([]);
  
    const getChannels = async () => {
      try {
        const response = await fetch('https://yuan-projects.github.io/YuanPlayer/demo/tvchannels.json');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getChannels();
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      {
        isLoading ? <ActivityIndicator size="large" /> : 
        <FlatList
          data={data}
          renderItem={({item}) => 
           (
            <Pressable
              android_ripple={{color: "red"}} 
              style={styles.itemContainer}
              onPress={
                ({nativeEvent: PressEvent}) => {
                  navigation.navigate('Player', item)
                }
              }
            >
              <Text style={styles.item}>{item.title}</Text>
            </Pressable>)
          }
        />
      }
      </View>
      </SafeAreaView>
    );
  };


export default HomeScreen;