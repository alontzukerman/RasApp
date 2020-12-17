import React, { useState, useEffect, useContext, lazy } from "react";
import network from "./network";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import SoldiersPage from "./pages/SoldiersPage";
// import OneSoldierPage from "./pages/OneSoldierPage";
// import NotesPage from "./pages/NotesPage";
// import NohehutPage from "./pages/NohehutPage";
// import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Cookies from "js-cookie";
import { User } from "./context";
import ErrorBoundary from "./components/ErrorBoundary";

const HomePage = lazy(()=> import('./pages/HomePage'));
const SoldiersPage = lazy(()=> import('./pages/SoldiersPage'));
const OneSoldierPage = lazy(()=> import('./pages/OneSoldierPage'));
const NotesPage = lazy(()=> import('./pages/NotesPage'));
const NohehutPage = lazy(()=> import('./pages/NohehutPage'));
const ProfilePage = lazy(()=> import('./pages/ProfilePage'));


function App() {
  const [user, setUser] = useState(null);

  // const location = useHistory();
  const checkValidateToken = async () => {
    if (Cookies.get("refreshToken")) {
      try {
        const { data } = await network.get("/api/auth/validate-token");
        console.log(data.user);
        setUser(data.user);
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    checkValidateToken();
  }, []);

  return (
    <Router>
      {/* <AppContainer>{getRoutes()}</AppContainer> */}
      {!user ? (
        <User.Provider value={{ user, setUser }}>
          <ErrorBoundary>
            <Route
              render={({ location }) => (
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/login">
                    <LoginPage />
                  </Route>
                  <Route exact path="*">
                    <Redirect to="/login" />
                  </Route>
                </Switch>
              )}
            />
          </ErrorBoundary>
        </User.Provider>
      ) : (
        <User.Provider value={{ user, setUser }}>
          <ErrorBoundary>
            <Switch>
              <Route path="/" exact>
                <Navbar />
                <HomePage />
              </Route>
              <Route path="/soldiers" exact>
                <Navbar />
                <SoldiersPage />
              </Route>
              <Route path="/soldier/:soldierId" exact>
                <Navbar />
                <OneSoldierPage />
              </Route>
              <Route path="/notes" exact>
                <Navbar />
                <NotesPage />
              </Route>
              <Route path="/nohehut" exact>
                <Navbar />
                <NohehutPage />
              </Route>
              <Route path="/profile" exact>
                <Navbar />
                <ProfilePage />
              </Route>
              <Route path="*" exact>
                <Redirect to="/" />
              </Route>
            </Switch>
          </ErrorBoundary>
        </User.Provider>
      )}
    </Router>
  );
}

export default App;
