import React from 'react';
import s from "./profileinfo.module.css";
import {createField, Input, Textarea} from "../../common/forms";
import {reduxForm} from "redux-form";
import {requiredField} from "../../../utilities/validator";

const ProfileDataForm = ({handleSubmit, profile, error, cancelEditMode}) => {
    return <form onSubmit={handleSubmit}>
        <b>Full name</b>: {createField("Full name", "fullName", [requiredField], Input)}
        <div>
            <b>Looking for a job</b> : {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div className={s.contacts}>
            <div>
                <b>Skills/descriptions </b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
                <b>About me </b>: {createField("About me", "aboutMe", [requiredField], Textarea)}
            </div>
        </div>
        <div>
            <div>Contacts: </div>
            {Object.keys(profile.contacts).map((key, index) => {
            let element;
            if (index === 0 || (index >= 2 && index !== 7)) {
                element = <b key={key}>{key}: {createField(key, `contacts.${key}`, [], Input)}</b>
            }
            return element;
        })}
        </div>
        <button>save</button>
        <button onClick={cancelEditMode}>cancel</button>
        {error && <div className={s.formGlobalError}>{error}</div>}
    </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;