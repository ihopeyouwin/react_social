import React from 'react';
import logo from './../../assets/es6.png';
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={s.header}>
            <img src={logo} alt='img logo wide'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};
export default Header