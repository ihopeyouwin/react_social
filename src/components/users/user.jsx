import React from 'react';
import s from './users.module.css';
import ava from './assets/empty.png'
import {NavLink} from "react-router-dom";

let User = ({user, followProgress, follow, unfollow}) => {
    return (
        <div className={s.usertab} key={user.id}>
            <span className={s.usercell}>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : ava} alt="img"/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }}>Unfollow</button>
                        : <button disabled={followProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
                        }}>Follow</button>}
                </div>
                <div className={s.line}></div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status ? `status: ${user.status}` : 'status is empty'}</div>
                <div>{`this user personal id: ${user.id}`}</div>
            </span>
        </div>
    )
};

export default User;