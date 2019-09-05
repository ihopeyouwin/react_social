const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'hi, whatsup?', likes: 14},
        {id: 2, message: 'yo how\'s it going', likes: 134},
        {id: 3, message: 'hots 3200 ml', likes: 245},
        {id: 4, message: 'top 10 falstad eu? huh', likes: 11},
        {id: 5, message: 'still cant beat sc2 insane?', likes: 29},
        {id: 6, message: 'thats reducer initial state', likes: 900}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newpost = {
                id: 7,
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newpost],
                newPostText: ''
            };

        case UPDATE_POST_TEXT:
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
};

export const addpostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});

export default profileReducer;