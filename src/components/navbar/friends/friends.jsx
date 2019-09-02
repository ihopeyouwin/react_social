import React from 'react';
import s from './../navbar.module.css';

const Friends = (props) => {
    return (
        <div className={s.frwrap}>
            <img src={require(`${props.path}`)} alt="img"/>
            <div>{props.name}</div>
        </div>
    )
};
export default Friends;