
//Changing redux and firestore process.
export const createOwned = (owned) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const state = getState();

        firestore.collection('providers').add({
            ...owned,
            owned: state.firebase.auth.uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_OWNED', owned});
        }).catch((err) => {
            dispatch({type: 'CREATE_OWNED_ERROR', err});
        })
    }
};

export const deleteOwned = (owned) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('providers').doc(owned.id).delete().then(() => {
            dispatch({type:'DELETE_OWNED', owned});
        }).catch((err) => {
            dispatch({type: 'DELETE_OWNED_ERROR', err});
        })
    }
};