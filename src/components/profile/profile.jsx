import React from 'react';
import Profileinfo from "./profileinfo/profileinfo";
import MypostsContainer from "./myposts/myPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MypostsContainer />
        </div>
    )
};
export default Profile;