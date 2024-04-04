/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Button,
  Pressable,
  Alert
} from 'react-native';


import Video, {VideoRef} from 'react-native-video';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator
        /*
        screenOptions={{
          headerShown: false
        }}
        */
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '电视直播盒子'}}
        />
        <Stack.Screen options={{headerShown: false}} name="Player" component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 104
  },
  itemContainer: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red",
    marginTop: 10
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList
        data={[
          {title: 'CCTV-1', videoURL: 'https://node1.olelive.com:6443/live/CCTV1HD/hls.m3u8'},
          {title: 'CCTV-2', videoURL: 'https://node1.olelive.com:6443/live/CCTV2HD/hls.m3u8'},
          {title: 'CCTV-4', videoURL: 'https://h5cdn404.kylintv.tv/live/cctv4hd_iphone.m3u8'},
          {title: 'CCTV-5', videoURL: 'https://node1.olelive.com:6443/live/CCTV5HD/hls.m3u8'},
          {title: 'CCTV-5+', videoURL: 'https://node1.olelive.com:6443/live/CCTV5PHD/hls.m3u8'},
          {title: 'CCTV-7', videoURL: 'https://node1.olelive.com:6443/live/CCTV7HD/hls.m3u8'},
          {title: 'CCTV-9', videoURL: 'https://node1.olelive.com:6443/live/CCTV9HD/hls.m3u8'},
          {title: 'CCTV-10', videoURL: 'https://node1.olelive.com:6443/live/CCTV10HD/hls.m3u8'},
          {title: 'CCTV-13', videoURL: 'https://node1.olelive.com:6443/live/CCTV13HD/hls.m3u8'},
          {title: 'CCTV+ 1', videoURL: 'https://cd-live-stream.news.cctvplus.com/live/smil:CHANNEL1.smil/playlist.m3u8'},
          {title: 'CCTV+ 2', videoURL: 'https://cd-live-stream.news.cctvplus.com/live/smil:CHANNEL2.smil/playlist.m3u8'},
          {title: 'Shangyu', videoURL: 'https://l.cztvcloud.com/channels/lantian/SXshangyu3/720p.m3u8'},
          {title: 'Demo', videoURL: 'https://demo.m3u8play.com/m3u8/out/demo.m3u8'},
        ]}
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
    </View>
    </SafeAreaView>
  );
};

const PlayerScreen = ({navigation, route}) => {
  //console.log(`navigation:`, navigation, 'route:', route);

  const { title, videoURL  } = route.params;
  const videoRef = useRef<VideoRef>(null);
 
  return (
    <Video
    resizeMode="cover"
      fullscreen={true} 
      controls={true}
     // Can be a URL or a local file.
     //source={background}
     source={{
      uri: videoURL,
      type: "m3u8",
      title: title,
    }}
     // Store reference
     ref={videoRef}
     // Callback when remote video is buffering
     //onBuffer={onBuffer}
     // Callback when video cannot be loaded
     onError={(arg1) => {
      Alert.alert("", "抱歉，播放出错了", [{
        onPress: () => {
          navigation.goBack();
        }
      }])
      console.log('Video error:', arg1)
     }}
     style={styles.backgroundVideo}
    />
  )
 }

export default App;
