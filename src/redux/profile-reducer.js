import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'hi, whatsup?', likes: 14},
        {id: 2, message: 'yo how\'s it going', likes: 134},
        {id: 3, message: 'hots 3200 ml', likes: 245},
        {id: 4, message: 'top 10 falstad eu? huh', likes: 11},
        {id: 5, message: 'still cant beat sc2 insane?', likes: 29},
        {id: 6, message: 'thats reducer initial state', likes: 900}
    ],
    profile: null,
    status: undefined
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newpost = {
                id: 7,
                message: action.newPostBody,
                likes: 0
            };
            return {...state, posts: [...state.posts, newpost]};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};

export const addpostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};
export default profileReducer;