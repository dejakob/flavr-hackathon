import { StyleSheet } from 'react-native';
import { w4s, COLORS } from '../../styler';

const IMAGE_HEIGHT = w4s(250);
const IMAGE_WIDTH = IMAGE_HEIGHT;

export default StyleSheet.create({
    card: {
        padding: w4s(16),
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.GREY_LIGHT,
        borderStyle: 'solid',
        backgroundColor: COLORS.WHITE,

        // iOS only
        shadowColor: COLORS.GREY_DARK,
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 4,
    },
    image: {
        height: IMAGE_HEIGHT,
        width: IMAGE_WIDTH,
        borderRadius: 2,
    },
    caption: {
        textAlign: 'center',
        paddingTop: w4s(16),
    },
});
