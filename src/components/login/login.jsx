import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/forms";
import {requiredField} from "../../utilities/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/forms.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField("login(email)", "email", [requiredField], Input)}
        {createField("password", "password", [requiredField], Input, {type: 'password'})}
        {createField(null, "rememberMe", null, Input, {type: 'checkbox', className: s.inRow}, 'remember me')}
        {error && <div className={s.formGlobalError}>{error}</div>}
        <button>Sign in</button>
    </form>
};
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.container}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        <p>you may use Email: 'free@samuraijs.com' as login <br/> and Password: 'free' as password </p>
    </div>
};


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);