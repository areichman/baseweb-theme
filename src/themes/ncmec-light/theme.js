import { createTheme } from 'baseui';
import { colors } from './colors'

const primitives = {
  primary: colors.sun,
  primaryA: colors.shipGray,
  primaryB: 'white',

  /*
  primary50: colors.sun50,
  primary100: colors.sun100,
  primary200: colors.sun200,
  primary300: colors.sun300,
  primary400: colors.sun400,
  primary500: colors.sun500,
  primary600: colors.sun600,
  primary700: colors.sun700,
  */
};

const overrides = {
  borders: {
    buttonBorderRadius: '4px',
    surfaceBorderRadius: '4px',
  },
  colors: {
    buttonPrimaryText: colors.mineshaft,
    buttonPrimaryFill: colors.sun,
    buttonPrimaryHover: colors.saffron,
    buttonSecondaryText: colors.blueLagoon,
    buttonTertiaryText: colors.blueLagoon,
  },
};

export const LightTheme = createTheme(primitives, overrides);
