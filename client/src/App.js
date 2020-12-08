import React from 'react' ;
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import HomePage from './HomePage';
import InformationPage from './InformationPage';
function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/information" exact>
            <InformationPage />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  background-color: #333 ;
`;
export default App;
