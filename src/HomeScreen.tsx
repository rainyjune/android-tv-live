import React, {useState} from 'react';

import {ActivityIndicator} from 'react-native';
import {useMenu, useChannels} from './dataProvider';
import type {HomeScreenProps, Channel, MenuItem} from './types';
import HomeLayout from './HomeLayout';
import ErrorLayout from './ErrorLayout';
import HomeMainContent from './HomeMainContent';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {menu, isMenuError, isMenuLoading} = useMenu();

  if (isMenuError) {
    return <ErrorLayout>数据读取失败，请检查网络连接并稍后再试。</ErrorLayout>;
  }
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const {channels, isChannelListLoading} = useChannels(
    selectedMenuIndex >= 0 && selectedMenuIndex < menu.length
      ? menu[selectedMenuIndex].dataURL
      : null,
  );

  return (
    <HomeLayout>
      {isMenuLoading ? (
        <ActivityIndicator size={100} color={'white'} />
      ) : (
        <HomeMainContent
          navigation={navigation}
          channels={channels}
          isChannelListLoading={isChannelListLoading}
          selectedMenuIndex={selectedMenuIndex}
          menu={menu}
          onMenuPress={(newIndex: any) => {
            setSelectedMenuIndex(newIndex);
          }}
        />
      )}
    </HomeLayout>
  );
};

export default HomeScreen;
