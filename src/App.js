import React, {Component} from 'react';
import './App.css';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import NavbarContainer from "./components/navbar/navbarContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";

class App extends Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className="App-content">
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
export default compose(withRouter, connect(null, {getAuthUserData}))(App);