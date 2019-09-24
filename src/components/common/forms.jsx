import React from 'react';
import s from './forms.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const errorCondition = touched && error;
    return (
        <div className={s.formControl + " " + (errorCondition ? s.error : "")}>
            {children}
            {errorCondition && <span>{error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};
export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div className={props.className}>
        {text}<Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
    </div>
);