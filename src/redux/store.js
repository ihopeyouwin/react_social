import profileReducer from "./profile-reducer";
import sidepageReducer from "./sidepage-reducer";
import messagesReducer from "./messages-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, whatsup?', likes: 14},
                {id: 2, message: 'yo how\'s it going', likes: 134},
                {id: 3, message: 'hots 2200 ml', likes: 245},
                {id: 4, message: 'top 10 falstad eu? huh', likes: 11},
                {id: 5, message: 'still dick sock', likes: 29},
                {id: 6, message: 'swipe arthas', likes: 900}
            ],
            newPostText: 'why so serious222'
        },
        messagesPage: {
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
                {id: 5, message: 'dick sock'},
                {id: 6, message: 'go hots'},
            ],
            newMsgBody: 'why so serious111'
        },
        sidePage: {
            sidebar: [
                {id: 1, name: 'Profile', path: '/profile'},
                {id: 2, name: 'Dialogs', path: '/dialogs'},
                {id: 3, name: 'News', path: '/users'},
                {id: 4, name: 'Music', path: '/music'},
                {id: 5, name: 'Settings', path: '/settings'}
            ],
            dialogData: [
                {id: 2, name: 'slava', path: './slava.png'},
                {id: 3, name: 'vorchun', path: './jules.png'},
                {id: 4, name: 'Lidon', path: './lida.png'},
                {id: 5, name: 'dzham', path: './jew.png'},
                {id: 6, name: 'belyaev', path: './nigga.png'}
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // pattern observer
    },
    dispatch(action) { //type: 'ADD-POST'
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidePage = sidepageReducer(this._state.sidePage, action);

        this._callSubscriber(this._state);
    }
};

export default store;