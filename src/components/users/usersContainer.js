import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, toggleFollowProgress, requestUsers} from "../../redux/users-reducer";
import Users from "./users";
import Preloader from "../common/preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFetchingStatus, getFollowProgress, getPageSize, getUsersAmount, getUsersSelector
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    };

    render() {
        return <> {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsers={this.props.totalUsers}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followProgress={this.props.followProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsers: getUsersAmount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetchingStatus(state),
        followProgress: getFollowProgress(state)
    }
};


export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowProgress, getUsersThunk: requestUsers
    }))(UsersContainer);