const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
//Uses firebase cloud functions to perform admin methods.

//Automatically creates a queue reference to firebase realtime database when a new service provider is created in firestore.
exports.providerCreated = functions.firestore.document('providers/{id}').onCreate(doc => {

    const providerID = doc.id;
    const provider = {
        id: providerID,
        queue: 0,
        isOpen: false
    }
    
    const createQueue = (provider) => {
        return admin.database().ref('object/' + providerID).set({
            id: provider.id,
            isOpen: provider.isOpen,
            queue: provider.queue
        }).then(console.log('added new queue!', providerID))
    }

    return createQueue(provider);
})

//Automatically deletes the queue reference to firebase realtime database when a service provider is deleted in firestore.
exports.providerDeleted = functions.firestore.document('providers/{id}').onDelete(doc => {

    const providerID = doc.id;
    
    const deleteQueue = (providerId) => {
        return admin.database().ref('object/' + providerId).remove().then(console.log('deleted queue!', providerId))
    }

    return deleteQueue(providerID);
})



