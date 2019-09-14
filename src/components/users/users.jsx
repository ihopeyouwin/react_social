import React from 'react';
import s from './users.module.css';
import ava from './assets/empty.png'
import {NavLink} from "react-router-dom";

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
                    return <span className={(props.currentPage === page) ? s.selectedpage : undefined}
                                 onClick={(e) => {
                                     props.onPageChanged(page)
                                 }}
                                 key={page}>{page}</span>
                })}
            </div>
            {props.users.map(u =>
                <div className={s.usertab} key={u.id}>
                    <span className={s.usercell}>
                        <div >
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : ava} alt="img"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id);
                                }}>Unfollow</button>
                                : <button disabled={props.followProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id);
                                }}>Follow</button>}
                        </div>
                        <div className={s.line}></div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status ? `status: ${u.status}` : 'status is empty'}</div>
                        <div>{`this user personal id: ${u.id}`}</div>
                    </span>
                </div>)}
        </div>
    )
};

export default Users;