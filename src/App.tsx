import { BrowserRouter } from 'react-router-dom';
import { PrincipalLayout } from './layout';
import { AppRoutes } from './shared/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PrincipalLayout>
        <AppRoutes />
      </PrincipalLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
