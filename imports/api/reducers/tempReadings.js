function tempReadings(state = [], action) {
    switch(action.type) {
        case 'ADD_FETCHED_DATA' :
            console.log('adding fetched data to state via redux');
            return [
                ...state,
                ...action.data
            ];
            break;
        case 'SOME_OTHER_ACTION' :
            return [
                ...state,
            ];
        default:
            return state;
    }
}

export default tempReadings;