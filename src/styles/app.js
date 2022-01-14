import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../constants/index';

const styles = StyleSheet.create({
    container: {
      width: SIZES.width,
      height: SIZES.height,
      marginTop: SIZES.statusBar,
      backgroundColor: COLORS.transparent,
      alignItems: 'center',
    },
});

export default styles;