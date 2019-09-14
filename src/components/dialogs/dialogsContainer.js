import {sendMessageCreator} from "../../redux/messages-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageBody) => {
            dispatch(sendMessageCreator(messageBody));
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs);