import React from 'react';
import logo from './u21.png';
import h from './header.module.css';

const Header = () =>{
    return(
        <header className={h.header}>
            <img src={logo} alt='img logo wide'/>
        </header>
    )
}
export default Header