import React from "react";
import {connect} from "react-redux";
import {
    follow,
    toggleIsFetching,
    setUsers,
    toPage,
    unfollow,
    setUsersCount,
    toggleFollowProgress
} from "../../redux/users-reducer";
import Users from "./users";
import Preloader from "../common/preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
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
    follow,
    unfollow,
    setUsers,
    toPage,
    setUsersCount,
    toggleIsFetching,
    toggleFollowProgress
})(UsersContainer);