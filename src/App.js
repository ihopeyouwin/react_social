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
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader";
import store from "./redux/redux-store";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

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
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
const SocialApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>;
};
export default SocialApp;