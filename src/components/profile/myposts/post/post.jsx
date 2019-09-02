import React from 'react';
import p from './post.module.css';

const Post = (props) =>{

    return(
    <div className={p.item}>
        <img src="https://s3.amazonaws.com/artistsnclients/k63/samples/pju_800.JPG" alt="img" />
        {props.message}
        <div>
            <span>like</span>
            <span>({props.likes})</span>
        </div>
    </div>
    )
}
export default Post