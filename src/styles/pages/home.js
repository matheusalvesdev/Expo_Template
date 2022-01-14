import { StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants/index';

const styles = StyleSheet.create({
    container: {
      width: SIZES.width,
      height: SIZES.height,
      backgroundColor: COLORS.transparent,
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageIconExample: {
        width: SIZES.width - 200,
        height: SIZES.height - 680,
        resizeMode: 'contain'
    },
    textTitle: {
        fontFamily: FONTS.h2.fontFamily,
        fontSize: FONTS.h2.fontSize,
        lineHeight: FONTS.h2.lineHeight,
        color: COLORS.primary,
        marginVertical: SIZES.height - 760
    },
    textSubTitle: {
        fontFamily: FONTS.h4.fontFamily,
        fontSize: FONTS.h4.fontSize,
        lineHeight: FONTS.h4.lineHeight,
        color: COLORS.primary,
        marginVertical: SIZES.height - 760
    },
    textBody: {
        fontFamily: FONTS.body4.fontFamily,
        fontSize: FONTS.body4.fontSize,
        lineHeight: FONTS.body4.lineHeight,
        color: COLORS.primary,
        marginVertical: SIZES.height - 760
    },
    textLink: {
        fontFamily: FONTS.body4.fontFamily,
        fontSize: FONTS.body4.fontSize,
        lineHeight: FONTS.body4.lineHeight,
        color: COLORS.white,
        backgroundColor: COLORS.primary
    },
    textLinkRequest: {
        fontFamily: FONTS.body4.fontFamily,
        fontSize: FONTS.body4.fontSize,
        lineHeight: FONTS.body4.lineHeight,
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        marginVertical: SIZES.height - 760
    }
});

export default styles;