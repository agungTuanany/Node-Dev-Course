const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Todoapps');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
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

const newTodo = new Todo({
    text: 'Cycling morning'
});

const newTodo2 = new Todo({
    text: 'Swimming at afternoon',
    completed: true,
    completedAt: 28052018
})

// newTodo2.save().then((doc) => {
//     console.log('Saved todo', doc);
//     console.log(JSON.stringify(doc, undefined, 3));
// }, (error) => {
//     console.log('unable to save todo')
// });

const User = mongoose.model('User', {
    email: {
        require: true,
        trim:true,
        type: String,
        minLength:1
    }
});

const user = new User({
    email: ' jonoKodim@Kodamjaya.om'
});

user.save().then((doc) => {
    console.log('Saved user', doc);
    console.log(JSON.stringify(doc, undefined, 3));
}, (err) => {
    console.log('please input the correct email, err');
});
