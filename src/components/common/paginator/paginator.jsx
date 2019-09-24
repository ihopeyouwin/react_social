import React from 'react';
import s from './paginator.module.css';

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.pages}>
            {pages.map(page => {
                return <span className={(props.currentPage === page) ? s.selectedpage : undefined}
                             onClick={(e) => {props.onPageChanged(page)}}
                             key={page}>{page}</span>
            })}
        </div>
    )
};

export default Paginator;