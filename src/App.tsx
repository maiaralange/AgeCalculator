import { Dashboard } from './components/Dashboard';
import { BirthdayProvider } from './context/useBirthday';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <BirthdayProvider>
      <GlobalStyle />
      <Dashboard />
    </BirthdayProvider>
  );
}

export default App;
