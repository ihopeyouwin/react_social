import React, {useState, useEffect} from 'react';
import s from './profileinfo.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState( false);
    let [status, setStatus] = useState(props.status);

    useEffect(() =>{
        setStatus(props.status)
    }, [props.status]);

    const startEditMode = () => {
        setEditMode(true);
    };
    const cancelEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (evt) => {
        setStatus(evt.currentTarget.value)
    };
    return (
        <div className={s.status}>
            {!editMode &&
            <div onDoubleClick={startEditMode}><span>Status: </span>{props.status}</div>}
            {editMode &&
            <div onBlur={cancelEditMode}>
                <input onChange={onStatusChange} autoFocus={true} value={status}/>
            </div>
            }
            <div className={s.line}/>
        </div>
    )
};

export default ProfileStatusWithHooks;