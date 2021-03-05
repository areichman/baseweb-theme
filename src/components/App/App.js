import { Button } from "baseui/button";
import AppTheme from '../AppTheme/AppTheme'
import ThornLightTheme from '../../themes/thorn-light'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <AppTheme theme={ThornLightTheme}>
      <div className="App">
        <Button>I'm a BaseWeb Button with a Thorn theme</Button>
      </div>
    </AppTheme>
  );
}

export default App;
