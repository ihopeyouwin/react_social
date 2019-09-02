import React from 'react';
import n from './../navbar.module.css';
import {NavLink} from "react-router-dom";

const Navitm = (props) => {
    return (
        <div className={n.item}>
            <NavLink to={props.path} activeClassName={n.active}>{props.name}</NavLink>
        </div>
    )
};
export default Navitm;