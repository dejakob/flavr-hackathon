import { StyleSheet } from 'react-native';
import { w4s, COLORS } from '../../styler';

export default StyleSheet.create({
    image: {
        height: w4s(75),
        width: w4s(75),
        borderRadius: w4s(75 / 2),
        backgroundColor: COLORS.WHITE,
    },
});
