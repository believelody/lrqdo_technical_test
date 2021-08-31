import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { AppProvider } from './context';
import Home from './pages';
import DetailsPage from './pages/details';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:code">
            <DetailsPage />
          </Route>
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
