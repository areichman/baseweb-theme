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
    // button
    buttonPrimaryText: colors.mineshaft,
    buttonPrimaryFill: colors.sun400,
    buttonPrimaryHover: colors.sun300,
    buttonPrimaryActive: colors.sun200,
    buttonSecondaryText: colors.blueLagoon,
    buttonTertiaryText: colors.blueLagoon,

    // tab
    borderSelected: colors.sun,

    // checkbox
    tickFillSelected: colors.sun400,
    tickFillSelectedHover: colors.sun300,
    tickFillSelectedHoverActive: colors.sun200,
    tickMarkFill: 'black',
  },
};

export const LightTheme = createTheme(primitives, overrides);
