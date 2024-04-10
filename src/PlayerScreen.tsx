import React, {useRef} from 'react';

import {Alert} from 'react-native';

import Video, {VideoRef} from 'react-native-video';
import {useTranslation} from 'react-i18next';
import type {PlayerScreenProps} from './types';

import styles from './styles';

const PlayerScreen = ({navigation, route}: PlayerScreenProps) => {
  const {t} = useTranslation();
  const {title, videoURL} = route.params;
  const videoRef = useRef<VideoRef>(null);

  return (
    <Video
      resizeMode="cover"
      fullscreen={true}
      source={{
        uri: videoURL,
        type: 'm3u8',
        title: title,
      }}
      // Store reference
      ref={videoRef}
      // Callback when remote video is buffering
      //onBuffer={onBuffer}
      // Callback when video cannot be loaded
      onError={arg1 => {
        Alert.alert('', t('VIDEO_ERROR'), [
          {
            onPress: () => {
              navigation.goBack();
            },
          },
        ]);
        console.log('Video error:', arg1);
      }}
      style={styles.backgroundVideo}
    />
  );
};

export default PlayerScreen;
