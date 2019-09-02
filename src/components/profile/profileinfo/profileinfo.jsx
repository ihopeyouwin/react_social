import React from 'react';
import s from './profileinfo.module.css';
import bigphoto from './../../../assets/beach.jpg';

const Profileinfo = () =>{
    return(
        <div>
            <img src={bigphoto} alt='bigphoto'/>
            <div className={s.descblock}>ava+desc</div>
        </div>
    )
}
export default Profileinfo;