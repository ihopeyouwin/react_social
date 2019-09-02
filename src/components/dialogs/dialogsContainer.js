
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/messages-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        messagesPage: state.messagesPage
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;