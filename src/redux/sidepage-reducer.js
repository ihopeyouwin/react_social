let initialState ={
    sidebar: [
        {id: 1, name: 'Profile', path: '/profile'},
        {id: 2, name: 'Dialogs', path: '/dialogs'},
        {id: 3, name: 'Users', path: '/users'},
        {id: 4, name: 'Music', path: '/music'},
        {id: 5, name: 'Settings', path: '/settings'}
    ],
    dialogData: [
        {id: 2, name: 'slava', path: './slava.png'},
        {id: 3, name: 'vorchun', path: './jules.png'},
        {id: 4, name: 'Lidonn', path: './lida.png'},
        {id: 5, name: 'dzham', path: './jew.png'},
        {id: 6, name: 'belyaev', path: './nigga.png'}
    ]
};

const sidepageReducer = (state = initialState, action) => {
    return state;
};

export default sidepageReducer;