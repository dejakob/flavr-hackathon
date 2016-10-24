import { Dimensions } from 'react-native';

const IPHONE_4S_HEIGHT = 480;
const IPHONE_4S_WIDTH = 320;

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export const RATIO_HEIGHT = SCREEN_HEIGHT / IPHONE_4S_HEIGHT;
export const RATIO_WIDTH = SCREEN_WIDTH / IPHONE_4S_WIDTH;
