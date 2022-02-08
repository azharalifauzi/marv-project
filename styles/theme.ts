import { extendTheme } from '@chakra-ui/react';
import type { Theme } from '@chakra-ui/react';

export const colors = {
  brand: {
    primary: '#0B4C50',
    secondary: '#BD9940',
    black: '#333333',
    'gray-1': '#C4C4C4',
    white: '#FFFFFF'
  }
};

export const fonts: Theme['fonts'] = {
  heading: "'Libre Baskerville', serif",
  body: "'Libre Baskerville', serif",
  mono: "'Libre Baskerville', serif"
};

const theme = extendTheme({ colors, fonts });

export default theme;
