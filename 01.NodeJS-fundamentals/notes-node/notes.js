console.log(notes.js);

const fs = require('fs');

// making reusable function
var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }

};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicatesNotes = notes.filter((note) => note.title === title);

    if(duplicatesNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

var getAll = () => {
    console.log('You Getting all notes from getAll() function');
};

var getNote = (title) => {
    console.log('You calling a getNote() function to fetch the notes', title);
}

var getRemove = (title) => {
    console.log('You calling a getRemove() function to remove the notes, Are you sure?', title);
}

module.exports = {
    // addNote: addNote,
    addNote,
    getAll,
    getNote,
    getRemove
};

/**
quick challenge: make function call 'add'
this 'add' function is gopnna set at exports object
this 'add' function take 2 arguments call 'a' and 'b'
and return the result
**/
module.exports.add = (a, b) => {
    return a + b;
};


// console.log(module);
//module.exports.age = 25;

/**
module.exports.addNote = () => {
// console.log('addNote ')
return "you just call a function";
}
**/

/**
// in ES5
var addNote = function() {

};
**/
