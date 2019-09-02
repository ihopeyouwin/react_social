import React from 'react';
import s from './users.module.css';
import ava from './assets/empty.png'

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
                            <img src={u.photos.small != null ? u.photos.small : ava} alt="img"/>
                        </div>
                        <div>
                            {u.follow
                                ? <button onClick={() => props.tounfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.tofollow(u.id)}>Follow</button>}
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