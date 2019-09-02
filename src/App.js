import React from 'react';
import './App.css';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import NavbarContainer from "./components/navbar/navbarContainer";
import UsersContainer from "./components/users/usersContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavbarContainer />
                <div className="App-content">
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;