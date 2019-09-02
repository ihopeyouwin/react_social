import React from 'react';
import Profileinfo from "./profileinfo/profileinfo";
import MypostsContainer from "./myposts/myPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <Profileinfo/>
            <MypostsContainer />
        </div>
    )
};
export default Profile