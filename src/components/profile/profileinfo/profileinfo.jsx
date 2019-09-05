import React from 'react';
import s from './profileinfo.module.css';
import bigphoto from './../../../assets/beach.jpg';
import Preloader from "../../common/preloader";

const Profileinfo = (props) => {
    if (!props.profile) {
        return <div>
            <img src={bigphoto} alt='bigphoto'/>
            <Preloader/>
        </div>
    }
    return (
        <div>
            <div className={s.descblock}>
                <img src={props.profile.photos.large} className={s.avatar} alt="userPhoto"/>
                <div className={s.fullname}>{props.profile.fullName}</div>
                <div className={s.status}>
                    <span>Статус: </span>{props.profile.aboutMe}
                    <div className={s.line}></div>
                </div>
                <div className={s.job}>
                    <div><span>ищу ли работу: </span>{props.profile.lookingForAJob ? 'ищу' : 'не ищу'}</div>
                    <div><span>Комментарий: </span>{props.profile.lookingForAJobDescription}</div>
                </div>
                <div className={s.contacts}>
                    <div>Контакты: </div>
                    <div><span>vk:  </span>{props.profile.contacts.vk}</div>
                    <div><span>github:  </span>{props.profile.contacts.github}</div>
                    <div><span>insta:  </span>{props.profile.contacts.instagram}</div>
                    <div><span>twitter:  </span>{props.profile.contacts.twitter}</div>
                </div>
            </div>
        </div>
    )
};
export default Profileinfo;