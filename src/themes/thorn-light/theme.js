import { createTheme } from 'baseui';
import { colors } from './colors';

const primitives = {
  accent: colors.coral,
};

const overrides = {
  borders: {
    buttonBorderRadius: '4px',
    surfaceBorderRadius: '4px',
  },
  colors: {
    buttonPrimaryFill: colors.coral,
    buttonPrimaryHover: colors.coral700,
    buttonPrimaryActive: colors.coral600,

    buttonSecondaryText: 'white',
    buttonSecondaryFill: colors.indigo,
    buttonSecondaryHover: colors.indigo300,
    buttonSecondaryActive: colors.indigo200,

    borderSelected: colors.coral,
  }
};

export const LightTheme = createTheme(primitives, overrides);

// console.log(LightTheme)
