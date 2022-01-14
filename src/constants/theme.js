import { Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

// Cores usadas no aplicativo
export const COLORS = {
    primary: '#417D9A',
    transparent: 'transparent',
    white: '#FFF'
};

// Tamanhos usados no aplicativo
export const SIZES = {
    // Tamanhos globais
    base: 8,
    font: 14,
    radius: 30,
    radius2: 15,
    padding: 10,
    padding2: 12,

    // Tamanhos de fontes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // Dimensoes
    width,
    height,
    statusBar: StatusBar.currentHeight
};

// Fontes usadas no aplicativo
// Diretório das fontes: assets/fonts
export const FONTS = {
    largeTitle: { fontFamily: 'Roboto-Regular', fontSize: SIZES.largeTitle, lineHeight: 38 },
    h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22 },
};

export default { COLORS, SIZES, FONTS };