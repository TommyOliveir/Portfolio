import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { Router } from './config/Router';
import { theme } from './context/ThemeColor';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />;
    </ThemeProvider>
  );
}

export default App;
