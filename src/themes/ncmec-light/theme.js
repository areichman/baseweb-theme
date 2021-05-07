import { createTheme } from 'baseui';
import { colors } from './colors'

const primitives = {
  primary: colors.shipGray,
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
    borderSelected: colors.sun,
  },
};

export const LightTheme = createTheme(primitives, overrides);
