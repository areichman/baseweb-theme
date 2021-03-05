import AppTheme from '../src/components/AppTheme/AppTheme'
import ThornLightTheme from '../src/themes/thorn-light'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <AppTheme theme={ThornLightTheme}>
      <Story />
    </AppTheme>
  ),
];
