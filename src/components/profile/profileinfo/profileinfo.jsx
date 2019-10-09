import React from 'react';
import s from './profileinfo.module.css';
import Preloader from "../../common/preloader";
import userPhoto from './../../../assets/emptyuser.png';
import ProfileStatusWithHooks from "./profilestatusHOOK";

const Profileinfo = ({profile, status,updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <div>
            <Preloader/>
        </div>
    }
    const onAvatarChange = (e) =>{
      if(e.target.files.length){
          savePhoto(e.target.files[0]);
      }
    };
    return (
        <div>
            <div className={s.descblock}>
                <div>
                    <img src={profile.photos.large || userPhoto} className={s.avatar} alt="userPhoto"/>
                    {isOwner && <input type={"file"} onChange={onAvatarChange}/>}
                </div>
                <div className={s.fullname}>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={s.job}>
                    <div><span>ищу ли работу: </span>{profile.lookingForAJob ? 'ищу' : 'не ищу'}</div>
                    <div><span>Комментарий: </span>{profile.lookingForAJobDescription}</div>
                </div>
                <div className={s.contacts}>
                    <div>Контакты: </div>
                    <div><span>vk:  </span>{profile.contacts.vk}</div>
                    <div><span>github:  </span>{profile.contacts.github}</div>
                    <div><span>insta:  </span>{profile.contacts.instagram}</div>
                    <div><span>twitter:  </span>{profile.contacts.twitter}</div>
                </div>
            </div>
        </div>
    )
};
export default Profileinfo;