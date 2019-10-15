import React, {useState} from 'react';
import s from './profileinfo.module.css';
import Preloader from "../../common/preloader";
import userPhoto from './../../../assets/emptyuser.png';
import ProfileStatusWithHooks from "./profilestatusHOOK";
import ProfileDataForm from "./profiledataform";

const Profileinfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <div>
            <Preloader/>
        </div>
    }
    const onAvatarChange = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    };
    const cancelEditMode = () =>{
        setEditMode(false);
    };
    return (
        <div>
            <div className={s.descblock}>
                <div>
                    <img className={s.avatar} src={profile.photos.large || userPhoto} alt="userPhoto"/>
                    {isOwner && <input type={"file"} onChange={onAvatarChange}/>}
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile}
                                       onSubmit={onSubmit}
                                       profile={profile}
                                       cancelEditMode={cancelEditMode}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}}
                                   profile={profile}
                                   status={status}
                                   updateStatus={updateStatus}
                                   isOwner={isOwner}/>}
            </div>
        </div>
    )
};
const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
    return <div className={s.profileData}>
        {isOwner && <div className={s.edit}>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div className={s.fullname}>{profile.fullName}</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div className={s.job}>
            <div><span>Looking for a job: </span>{profile.lookingForAJob ? 'yep' : 'nope'}</div>
            {profile.lookingForAJob &&
            <div><b>Skills/descriptions: </b>{profile.lookingForAJobDescription}</div>
            }
            <div><b>About me: </b>{profile.aboutMe}</div>
        </div>
        <div className={s.contacts}>
            <b>Contacts</b>: {Object.keys(profile.contacts).map((key, index) => {
            let element;
            if (index === 0 || (index >= 2 && index !== 7)) {
                element = <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            }
            return element;
        })}
        </div>
    </div>
};


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <span className={s.address}>{contactTitle}:</span> <a href={contactValue}>{contactValue}</a>
    </div>
};
export default Profileinfo;