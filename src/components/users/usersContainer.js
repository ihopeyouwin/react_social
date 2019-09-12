import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowProgress,
    getUsersThunk} from "../../redux/users-reducer";
import Users from "./users";
import Preloader from "../common/preloader";
import {doAuthRedirect} from "../../hoc/doAuthRedirect";


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
        users: state.usersPage.usertabs,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProgress: state.usersPage.followProgress,
    }
};
let withRedirect = doAuthRedirect(UsersContainer);
export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowProgress, getUsersThunk,})(withRedirect);