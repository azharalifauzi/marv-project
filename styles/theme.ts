import { extendTheme } from '@chakra-ui/react';
import type { Theme } from '@chakra-ui/react';

export const colors = {
  brand: {
    primary: '#0B4C50',
    secondary: '#BD9940',
    black: '#333333',
    'gray-1': '#C4C4C4',
    'gray-2': '#d9d9d9',
    white: '#FFFFFF',
    lightblue: '#CBD5E0'
  }
};

export const fonts: Partial<Theme['fonts']> & { [key: string]: string } = {
  heading: "'Libre Baskerville', serif",
  body: "'Libre Baskerville', serif",
  mono: "'Libre Baskerville', serif",
  aliencow: "'Aliens & cows', serif"
};

const theme = extendTheme({ colors, fonts });

export default theme;
