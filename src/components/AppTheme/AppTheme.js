import {BaseProvider} from 'baseui';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';

const engine = new Styletron();

function AppTheme({ theme, children }) {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        {children}
      </BaseProvider>
    </StyletronProvider>
  )
}

export default AppTheme
