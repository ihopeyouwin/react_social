import React from 'react';
import s from './profileinfo.module.css';


const Profileinfo = () =>{
    return(
        <div>
            <img src='http://www.otdyh-vko.kz/images/defaults/beach.jpg' alt='mydick'/>
            <div className={s.descblock}>ava+desc</div>
        </div>
    )
}
export default Profileinfo;