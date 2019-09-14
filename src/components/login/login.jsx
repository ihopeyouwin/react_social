import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/forms";
import {requiredField} from "../../utilities/validator";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

};

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} name={"login"} component={Input} validate={[requiredField]}/>
        </div>
        <div>
            <Field placeholder={"password"} name={"password"} component={Input} validate={[requiredField]}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me
        </div>
        <button>Sign in</button>
    </form>
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;