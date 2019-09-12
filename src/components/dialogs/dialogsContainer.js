import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/messages-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {doAuthRedirect} from "../../hoc/doAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody: (body) => {
            dispatch(updateMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    doAuthRedirect
)(Dialogs);