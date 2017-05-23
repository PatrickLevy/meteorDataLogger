function comments(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            const i = action.index;
            return [
                ...state.slice(0, i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1), // after the one we are updating
            ];
            break;
        case 'ADD_FETCHED_DATA' :
            console.log('dispatching ADD_FETCHED_DATA from comments');
            return [
                ...state
            ];
        // return the updated state
        default:
            return state;
    }
}

export default comments;