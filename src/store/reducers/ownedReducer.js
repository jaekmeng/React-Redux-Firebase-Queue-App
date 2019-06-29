const initState = {
    owned: []
}

//Catching different cases in the redux reducer.
const ownedReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_OWNED':
            console.log('created', action.owned);
            return state;
            
        case 'CREATE_OWNED_ERROR':
            console.log('create error', action.err);
            return state;
            
        case 'DELETE_OWNED':
            console.log('created', action.owned);
            return state;
                
        case 'DELETE_OWNED_ERROR':
            console.log('delete error', action.err);
            return state;    
        default:
            return state;
    }
}

export default ownedReducer