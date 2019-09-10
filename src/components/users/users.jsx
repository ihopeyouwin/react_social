import React from 'react';
import s from './users.module.css';
import ava from './assets/empty.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    //let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages.push(i);
    }
    return (
        <div>
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
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "e7e2f0ca-1756-49ac-a075-b19375687c40"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.tounfollow(u.id);
                                            }
                                        });
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "e7e2f0ca-1756-49ac-a075-b19375687c40"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.tofollow(u.id);
                                            }
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