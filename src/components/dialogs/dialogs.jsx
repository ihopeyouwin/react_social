import React from 'react';
import s from './dialogs.module.css';
import Message from "./message/message";
import Dialogitm from "./dialogitm/dialogitm";

const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogelts = state.dialogs.map(di => <Dialogitm path={di.path} name={di.name} key={di.id}/>);
    let msgelts = state.msgdata.map(el => <Message message={el.message} key={el.id}/>);
    let newMsgBody = state.newMsgBody;
    let onSendMsg = () => {
        props.sendMessage();
    };
    let onMsgInput = (evt) => {
        let body = evt.target.value;
        props.updateMessageBody(body);
    };
    return (
        <div className={s.dialogswrapper}>
            <div className={s.diallist}>
                {dialogelts}
            </div>
            <div className={s.messages}>
                <div>{msgelts}</div>
                <div>
                    <textarea value={newMsgBody} onChange={onMsgInput} placeholder="write your message now"/>
                    <div><button onClick={onSendMsg}>Send</button></div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;