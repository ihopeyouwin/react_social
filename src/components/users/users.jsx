import React from 'react';
import s from './users.module.css';
import Paginator from "../common/paginator/paginator";
import User from "./user";

let Users = ({currentPage, onPageChanged, pageSize, totalUsers, ...props}) => {
    return (
        <div className={s.container}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       pageSize={pageSize} totalItemsCount={totalUsers}/>
            {props.users.map(u => <User user={u} key={u.id}
                                        followProgress={props.followProgress}
                                        follow={props.follow}
                                        unfollow={props.unfollow}/>)}
        </div>
    )
};

export default Users;