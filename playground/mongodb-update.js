//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=> {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB');

//     db.collection('Todos').findOneAndUpdate({
//         _id: new ObjectID('582c6a0e62277e3b5377294e')
//     },{$set: {
//        completed: true
//     }}, {
//         returnOriginal: false
//         }).then((result)=>{
//         console.log(result);
// });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('582ba0ac354cc403808adf67')
    },{$set: {
        name: 'Igor'
    },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
    // db.close();
});

//582ba0ac354cc403808adf67