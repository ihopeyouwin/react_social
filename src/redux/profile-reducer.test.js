import profileReducer, {addpostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'hi, whatsup?', likes: 14},
        {id: 2, message: 'yo how\'s it going', likes: 134},
        {id: 3, message: 'hots 3200 ml', likes: 245},
        {id: 4, message: 'top 10 falstad eu? huh', likes: 11},
        {id: 5, message: 'still cant beat sc2 insane?', likes: 29},
        {id: 6, message: 'thats reducer initial state', likes: 900}
    ],
    profile: null,
    status: undefined,
    postKey: 7
};

it('new post length should be incremented', () => {
    let action = addpostActionCreator('good test');
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(7);
});
it('new post string must be correct', () => {
    let action = addpostActionCreator('good test');
    let newState = profileReducer(state,action);
    expect(newState.posts[6].message).toBe('good test');
});
it('after deletion posts length decrements', () => {
    let action = deletePost(1);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(5);
});
it('if id is incorrect, after deletion posts length should never be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(5);
});