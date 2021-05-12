import AppTheme from '../src/components/AppTheme/AppTheme'
import { LightTheme } from '../src/themes/ncmec-light'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <AppTheme theme={LightTheme}>
      <Story />
    </AppTheme>
  ),
];
