// Good practice would be to put each of these in their own file


// increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index,
    };
}

// add comment
export function addComment(postId, author, comment) {
    console.log('dispatching addComment action')
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