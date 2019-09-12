import React from 'react';
import './App.css';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import NavbarContainer from "./components/navbar/navbarContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer />
                <NavbarContainer />
                <div className="App-content">
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;