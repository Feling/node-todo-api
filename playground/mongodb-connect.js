//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=> {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB');
    // db.collection('Todos').insertOne({
    //     text: 'Something todo',
    //     completed: false
    // }, (err, result)=>{
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });
        db.collection('Users').insertOne({
            name: 'Kobi',
            age: 28,
            location: 'Thailand'
        }, (err, result)=>{
            if (err){
                return console.log('Unable to insert user',err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        });


    db.close();
});