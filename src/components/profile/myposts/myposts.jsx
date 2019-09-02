import React from 'react';
import s from './myposts.module.css';
import Post from './post/post.jsx';

const Myposts = (props) => {
    let postelts = props.posts.map(post => <Post message={post.message} likes={post.likes} key={post.id}/>).reverse();
    let newpost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostchange = () => {
        let text = newpost.current.value;
        props.updatePostText(text);
    };
    return (
        <div className={s.postsblock}>
            <h3>myposts</h3>
            <div>
                <textarea onChange={onPostchange}
                          ref={newpost}
                          placeholder="write your message here"
                          value={props.newPostText}/>
            </div>
            <div className={s.button}>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postelts}
            </div>
        </div>
    )
};
export default Myposts