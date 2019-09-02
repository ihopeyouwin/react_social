
import {addpostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./myposts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) =>{
    return {
        updatePostText: (text) => {
            let action = updatePostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addpostActionCreator());
        }
    }
};
const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);
export default MypostsContainer;