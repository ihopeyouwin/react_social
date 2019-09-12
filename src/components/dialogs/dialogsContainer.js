import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/messages-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {doAuthRedirect} from "../../hoc/doAuthRedirect";

let mapStateToProps = (state) =>{
    return {
        messagesPage: state.messagesPage,
    }
};
let mapDispatchToProps = (dispatch) =>{
    return {
        updateMessageBody: (body) => {
            dispatch(updateMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
};
let AuthRedirectComponent = doAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;