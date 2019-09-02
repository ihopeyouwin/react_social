const UPDATE_NEW_MSG_BODY = 'UPDATE_NEW_MSG_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 2, name: 'slava', path: './slava.png'},
        {id: 3, name: 'vorchun', path: './jules.png'},
        {id: 4, name: 'Lidon', path: './lida.png'},
        {id: 5, name: 'dzham', path: './jew.png'},
        {id: 6, name: 'belyaev', path: './nigga.png'}
    ],
    msgdata: [
        {id: 1, message: 'yo dude'},
        {id: 2, message: 'yo cmon'},
        {id: 3, message: 'yo hows it going'},
        {id: 4, message: 'yeaks'},
        {id: 5, message: 'your enemy is farming, while you sleep'},
        {id: 6, message: 'go hots'},
    ],
    newMsgBody: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MSG_BODY:
            return {
                ...state,
                newMsgBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMsgBody;
            return {
                ...state,
                newMsgBody: '',
                msgdata: [...state.msgdata, {id: 7, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageBodyCreator = (newbody) => ({type: UPDATE_NEW_MSG_BODY, body: newbody});

export default messagesReducer;