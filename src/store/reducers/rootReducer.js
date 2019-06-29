import custReducer from './custReducer'
import ownedReducer from './ownedReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    cust: custReducer,
    owned: ownedReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer