import React from 'react' ;
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import HomePage from './pages/HomePage';
import SoldiersPage from './pages/SoldiersPage';
import OneSoldierPage from './pages/OneSoldierPage';
import NotesPage from './pages/NotesPage';
import NohehutPage from './pages/NohehutPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
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
            <NotesPage />
          </Route>
          <Route path="/nohehut" exact>
            <NohehutPage />
          </Route>
          <Route path="/profile" exact>
            <ProfilePage />
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
