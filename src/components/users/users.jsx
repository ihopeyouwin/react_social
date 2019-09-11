import React from 'react';
import s from './users.module.css';
import ava from './assets/empty.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.container}>
            <div className={s.pages}>
                {pages.map(page => {
                    return <span onClick={(e) => {
                        props.onPageChanged(page)
                    }}
                                 className={props.currentPage === page ? s.selectedpage : undefined}
                                 key={page}>{page}</span>
                })}
            </div>
            {props.users.map(u => <div className={s.usertab} key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : ava} alt="img"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.follow
                                ? <button disabled={props.followProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowProgress(true, u.id);
                                    usersAPI.stopFollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.tounfollow(u.id);
                                            }
                                            props.toggleFollowProgress(false, u.id);
                                        });
                                }}>Unfollow</button>
                                : <button disabled={props.followProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowProgress(true, u.id);
                                    usersAPI.startFollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.tofollow(u.id);
                                            }
                                            props.toggleFollowProgress(false, u.id);
                                        });
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
            </div>)}
        </div>
    )
};

export default Users;