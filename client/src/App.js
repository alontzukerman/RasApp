import React from 'react' ;
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import HomePage from './HomePage';
import SoldiersPage from './components/SoldiersPage';
import OneSoldierPage from './components/OneSoldierPage';
import Notes from './components/Notes';
function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/soldiers" exact>
            <SoldiersPage />
          </Route>
          <Route path="/soldier/:soldierId" exact>
            <OneSoldierPage />
          </Route>
          <Route path="/notes" exact>
            <Notes />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  height: 100vh ;
  width: 100vw ;
  overflow-y: scroll ;
  background-color: #888 ;
`;
export default App;
