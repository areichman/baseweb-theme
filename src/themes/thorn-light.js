import { createTheme } from 'baseui';

// thorn brand colors
// shades generated via https://www.crispedge.com/color-shades-generator
const coral = '#f87b5e';
const indigo = '#221A45';
const mint = '#66deca';

const coral50 = '#fef0ed';
const coral100 = '#fcd3c9';
const coral200 = '#fbb5a5';
const coral300 = '#f99881';
const coral400 = coral;
const coral500 = '#dc6d53';
const coral600 = '#c05f49';
const coral700 = '#a5523e';

const indigo50 = '#e6e5ea';
const indigo100 = '#b5b2c1';
const indigo200 = '#847f97';
const indigo300 = '#534c6e';
const indigo400 = indigo;
const indigo500 = '#1e173d';
const indigo600 = '#1a1435';
const indigo700 = '#16112e';

const mint600 = '#4fac9d';
const mint700 = '#449486';

const primitives = {
  primary: coral,
  primary50: coral50,
  primary100: coral100,
  primary200: coral200,
  primary300: coral300,
  primary400: coral400,
  primary500: coral500,
  primary600: coral600,
  primary700: coral700,
  // primaryA: black,
  // primaryB: white,

  accent: indigo,
};

const overrides = {
  borders: {
    buttonBorderRadius: '4px',
    surfaceBorderRadius: '4px',
  },
  colors: {
    // buttonPrimaryFill: coral,
    // buttonPrimaryHover: coral700,
    // buttonPrimaryActive: coral600,

    buttonSecondaryText: 'white',
    buttonSecondaryFill: indigo,
    buttonSecondaryHover: indigo300,
    buttonSecondaryActive: indigo200,

    buttonTertiaryText: 'white',
    buttonTertiaryFill: mint,
    buttonTertiaryHover: mint700,
    buttonTertiaryActive: mint600,

    borderSelected: coral,
  }
};

const theme = createTheme(primitives, overrides);
// console.log(theme)

export default theme;
