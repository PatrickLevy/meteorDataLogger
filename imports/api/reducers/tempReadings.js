function tempReadings(state = [], action) {
    console.log('state', state);
    // switch(action.type) {
    //     case 'INCREMENT_LIKES' :
    //         const i = action.index;
    //         return [
    //             ...state.slice(0, i), //before the one we are updating
    //             {...state[i], likes: state[i].likes + 1},
    //             ...state.slice(i + 1), // after the one we are updating
    //         ];
    //         break;
    //     // return the updated state
    //     default:
    //         return state;
    // }
    console.log(state, action);
    return state;
}

export default tempReadings;