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
    messageKey : 7
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.messageBody;
            return {
                ...state,
                msgdata: [...state.msgdata, {id: state.messageKey, message: body} ],
                messageKey: (state.messageKey+1)
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (messageBody) => ({type: SEND_MESSAGE, messageBody});

export default messagesReducer;