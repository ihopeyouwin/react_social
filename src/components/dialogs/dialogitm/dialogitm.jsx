import React from 'react';
import s from './../dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogitm = (props) => {
    return (
        <div className={s.dialog}>
            <img src={require(`${props.path}`)} alt="img" />
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default Dialogitm;