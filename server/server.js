const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
let User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        require: true,
        minlength: 1

    }
});

let newTodo = new Todo({
    text: 'Cook diner'
});

//
// let otherTodo = new Todo({
//     text: ' Feed the cat    ',
//     completed: true,
//     completedAt: 123
// });
// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log(e);
// });

let user = new User({
    email: "  me@com.com  "
});
user.save().then((user)=> {
    console.log(JSON.stringify(user, undefined, 2));
},
(e) => {
    console.log(e);
});