import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/forms";
import {requiredField} from "../../utilities/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login(email)"} name={"email"} component={Input} validate={[requiredField]}/>
        </div>
        <div>
            <Field placeholder={"password"} name={"password"} type={'password'} component={Input}
                   validate={[requiredField]}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me
        </div>
        <button>Sign in</button>
    </form>
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);