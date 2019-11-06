import React, {useState} from 'react';
import s from './paginator.module.scss';
import cn from 'classnames';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftEdgeNumber = (portionNumber - 1) * portionSize + 1;
    let rightEdgeNumber = portionNumber * portionSize;
    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>}
            <div className={s.pages}>
                {pages
                    .filter(page => page >= leftEdgeNumber && page <= rightEdgeNumber)
                    .map(page => {
                        return <span className={cn({[s.selectedpage]: currentPage === page}, s.pageNumber)}
                                     onClick={(e) => {
                                         onPageChanged(page)
                                     }}
                                     key={page}>{page}</span>
                    })}
                {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>}
            </div>
        </div>
    )
};

export default Paginator;