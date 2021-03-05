import {createTheme} from 'baseui';

// https://www.crispedge.com/color-shades-generator
const coral50 = '#fef0ed';
const coral100 = '#fcd3c9';
const coral200 = '#fbb5a5';
const coral300 = '#f99881';
const coral400 = '#f87b5e'; // thorn coral
const coral500 = '#dc6d53';
const coral600 = '#c05f49';
const coral700 = '#a5523e';

const primitives = {
  primary: coral400,
  // primaryA: black,
  // primaryB: white,
  primary50: coral50,
  primary100: coral100,
  primary200: coral200,
  primary300: coral300,
  primary400: coral400,
  primary500: coral500,
  primary600: coral600,
  primary700: coral700,
};

const overrides = {
  borders: {
    buttonBorderRadius: '4px',
  }
};

const theme = createTheme(primitives, overrides);
// console.log(theme)

export default theme
