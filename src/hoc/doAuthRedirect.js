import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth : state.auth.isAuth
});

export const doAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return (!this.props.isAuth) ? <Redirect to={'/login'}/> : <Component {...this.props}/>;
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};