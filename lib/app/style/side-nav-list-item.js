import { StyleSheet } from 'react-native';
import { h4s, COLORS } from '../../styler';

export default StyleSheet.create({
    label: {
        textAlign: 'center',
        margin: h4s(4),
        paddingTop: h4s(8),
        paddingBottom: h4s(8),
        borderWidth: 1,
        borderColor: COLORS.BLACK,
        borderStyle: 'solid',
        borderRadius: 2,
    },
});
