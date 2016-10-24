import { StyleSheet } from 'react-native';
import { w4s } from '../../styler';

export default StyleSheet.create({
    image: {
        height: w4s(75),
        width: w4s(75),
        borderRadius: w4s(75 / 2),
    },
    grid: {
        height: w4s(300),
        width: w4s(300),
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    col: {},
});
