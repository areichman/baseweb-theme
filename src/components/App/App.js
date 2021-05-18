import { LightTheme } from '../../themes/ncmec-light'
import AppTheme from '../AppTheme/AppTheme'
import AppHeader from '../AppHeader/AppHeader'
import AppRoutes from '../AppRoutes/AppRoutes'
import './App.css';

function App() {
  return (
    <AppTheme theme={LightTheme}>
      <AppHeader />
      <AppRoutes />
    </AppTheme>
  );
}

export default App;
