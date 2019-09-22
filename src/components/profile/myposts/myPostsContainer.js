import {addpostActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./myposts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
    }
};
let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: (newPostBody) => {
            dispatch(addpostActionCreator(newPostBody));
        }
    }
};
const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);
export default MypostsContainer;