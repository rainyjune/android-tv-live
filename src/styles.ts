import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    fontSize: 28,
    height: 104,
  },
  itemContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    marginTop: 10,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    flex: 1,
    //justifyContent: 'center',
  },
});

export default styles;
