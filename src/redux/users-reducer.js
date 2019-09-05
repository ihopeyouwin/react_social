const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    usertabs: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usertabs: state.usertabs.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, follow: true
                        };
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                usertabs: state.usertabs.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, follow: false
                        };
                    }
                    return user;
                })
            };
        case SET_USERS: {
            return {...state, usertabs: action.usertabs}
        }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_USERS_COUNT:
            return {...state, totalUsers: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (usertabs) => ({type: SET_USERS, usertabs});
export const toPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersAmount = (totalUsers) => ({type: SET_USERS_COUNT, count: totalUsers});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;