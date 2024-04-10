import React, {useState} from 'react';

import {ActivityIndicator, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useMenu, useChannels} from './dataProvider';
import type {HomeScreenProps, Channel, MenuItem} from './types';
import HomeLayout from './HomeLayout';
import ErrorLayout from './ErrorLayout';
import HomeMainContent from './HomeMainContent';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {t} = useTranslation();
  const {menu, isMenuError, isMenuLoading} = useMenu();

  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const {channels, isChannelListError, isChannelListLoading} = useChannels(
    selectedMenuIndex >= 0 && selectedMenuIndex < menu.length
      ? menu[selectedMenuIndex].dataURL
      : null,
  );

  if (isMenuError) {
    return <ErrorLayout>{t('MENU_API_ERROR')}</ErrorLayout>;
  }

  return (
    <HomeLayout>
      {isMenuLoading ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={100} color={'white'} />
        </View>
      ) : (
        <HomeMainContent
          navigation={navigation}
          channels={channels}
          isChannelListLoading={isChannelListLoading}
          isChannelListError={isChannelListError}
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
