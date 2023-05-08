import { Dashboard } from './components/Dashboard';
import { AgeProvider } from './context/useAge';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <AgeProvider>
      <GlobalStyle />
      <Dashboard />
    </AgeProvider>
  );
}

export default App;
