import React from "react";
import {connect} from "react-redux";
import {
    follow,
    toPage,
    unfollow,
    toggleFollowProgress,
    getUsersThunk} from "../../redux/users-reducer";
import Users from "./users";
import Preloader from "../common/preloader";


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
                   tounfollow={this.props.unfollow}
                   tofollow={this.props.follow}
                   toggleFollowProgress={this.props.toggleFollowProgress}
                   followProgress={this.props.followProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usertabs,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProgress: state.usersPage.followProgress,
    }
};

export default connect(mapStateToProps, {
    follow, unfollow, toPage, toggleFollowProgress, getUsersThunk,})(UsersContainer);