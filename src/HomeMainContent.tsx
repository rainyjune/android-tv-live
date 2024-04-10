import {ActivityIndicator, Text, View, FlatList, Pressable} from 'react-native';
import MenuList from './MenuList';

import styles from './styles';

export default function HomeMainContent({
  menu,
  onMenuPress,
  selectedMenuIndex,
  isChannelListLoading,
  channels,
  navigation,
}) {
  return [
    <MenuList
      key={'menuList'}
      data={menu}
      onPress={(newIndex: any) => {
        onMenuPress(newIndex);
      }}
      selectedMenuIndex={selectedMenuIndex}
    />,
    <View
      key={'listContainer'}
      style={{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
      {isChannelListLoading ? (
        <ActivityIndicator size={70} color={'white'} />
      ) : (
        <FlatList
          numColumns={3}
          key="list"
          data={channels}
          columnWrapperStyle={{gap: 16}}
          renderItem={({item}) => (
            <Pressable
              android_ripple={{color: 'lightblue'}}
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
  ];
}
