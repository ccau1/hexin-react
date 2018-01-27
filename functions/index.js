const functions = require("firebase-functions");
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.modifyTodo = functions.firestore
  .document("todos/{todoId}")
  .onWrite(event => {
    const newData = event.data.data();
    const previousData = event.data.previous.data();
    // ensure it doesn't go into infinite loop
    // if newData is undefined, that means it is deleting
    if (!newData || (previousData && newData.task === previousData.task)) {
      return 0;
    }

    // add custom data
    const data = { lastModified: new Date() };

    // update current document with data
    return event.data.ref.set(data, { merge: true });
  });
