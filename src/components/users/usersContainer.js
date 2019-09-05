import React from "react";
import {connect} from "react-redux";
import {follow, toggleIsFetching, setUsers, toPage, unfollow, setUsersAmount} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./users";
import Preloader from "../common/preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersAmount(response.data.totalCount);
            });
    }

    onPageChanged = (pagenumber) => {
        this.props.toPage(pagenumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagenumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <> {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   tounfollow={this.props.unfollow}
                   tofollow={this.props.follow}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usertabs,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};
/*let mapDispatchToProps = (dispatch) => {
    return {
        tofollow: (userId) => {
            dispatch(followAC(userId))
        },
        tounfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        },
        toPage: (pageNumber) => {
            dispatch(toPageAC(pageNumber));
        },
        defineTotalUsersCount: (totalCount) => {
            dispatch(usersAmountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(isFetchingAC(isFetching));
        }
    }
};*/

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    toPage,
    setUsersAmount,
    toggleIsFetching
})(UsersContainer);