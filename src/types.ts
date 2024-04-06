import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Player: {
    title: string;
    videoURL: string;
  };
};

export type PlayerScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Player'
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type Channel = {
  title: string;
  videoURL: string;
};
