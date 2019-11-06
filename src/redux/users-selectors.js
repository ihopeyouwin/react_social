import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.usertabs;
};
export const getUsersAll = createSelector(getUsers ,(usertabs) => {
   return  usertabs.filter(u => true);
});
export const getUsersVerified = createSelector(getUsers ,(usertabs) => {
    return  usertabs.filter(u => u.photos.small || u.followed === true);
});
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getUsersAmount = (state) => {
    return state.usersPage.totalUsers;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getFetchingStatus = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowProgress = (state) => {
    return state.usersPage.followProgress;
};