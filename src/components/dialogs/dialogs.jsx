import React from 'react';
import s from './dialogs.module.css';
import Message from "./message/message";
import Dialogitm from "./dialogitm/dialogitm";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/forms";
import {maxLengthCreator, requiredField} from "../../utilities/validator";

let maxLength100 = maxLengthCreator(100);
const Dialogs = (props) => {
    let state = props.messagesPage;
    let dialogelts = state.dialogs.map(di => <Dialogitm path={di.path} name={di.name} key={di.id}/>);
    let msgelts = state.msgdata.map(el => <Message message={el.message} key={el.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.messageBody);
    };
    return (
        <div className={s.dialogswrapper}>
            <div className={s.diallist}>
                {dialogelts}
            </div>
            <div className={s.messages}>
                <div>{msgelts}</div>
                <DialogReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[requiredField, maxLength100]} name="messageBody" placeholder="write your message here"/>
            </div>
            <button>Send</button>
        </form>
    )
};
const DialogReduxForm = reduxForm({form: 'dialogs'})(AddMessageForm);


export default Dialogs;