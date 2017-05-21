// Good practice would be to put each of these in their own file

// Add Temp Data
export function addFetchedTempData(data) {
    console.log('dispatching addFetchedTempData');
    return {
        type: 'ADD_FETCHED_DATA',
        data,
    }
}

// add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment,
    }
}


// remove comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId,
    }
}