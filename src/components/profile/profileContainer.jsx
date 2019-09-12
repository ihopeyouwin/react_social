import React from 'react';
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {doAuthRedirect} from "../../hoc/doAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1618;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}
let AuthRedirectComponent = doAuthRedirect(ProfileContainer);
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let ContainerWithUrlData = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(ContainerWithUrlData);