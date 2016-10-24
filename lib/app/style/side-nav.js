import { StyleSheet } from 'react-native';
import { h4s, COLORS } from '../../styler';

export default StyleSheet.create({
    listView: {
        backgroundColor: COLORS.WHITE,
        padding: h4s(16),
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
