import React from 'react';
import s from './myposts.module.css';
import Post from './post/post.jsx';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from './../../../utilities/validator';
import {Textarea} from "../../common/forms";

let maxLength30 = maxLengthCreator(30);

const Myposts = React.memo((props) => {
    let postelts = props.posts.map(post => <Post message={post.message} likes={post.likes}
                                                 key={post.id}/>).reverse();
    let addNewPost = (value) => {
        props.addPost(value.newPostBody);
        value.newPostBody = '';
    };
    return (
        <div className={s.postsblock}>
            <h3>myposts</h3>
            <PostsReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postelts}
            </div>
        </div>
    )
});

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostBody'}
                       placeholder="write your message here"
                validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <button className={s.button}>Add post</button>
            </div>
        </form>
    )
};
const PostsReduxForm = reduxForm({form: 'addPostForm'})(addPostForm);
export default Myposts;