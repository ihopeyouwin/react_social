import React from 'react';
import s from './forms.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const errorCondition = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (errorCondition ? s.error : "")}>
            {props.children}
            {errorCondition && <span>{meta.error}</span>}
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