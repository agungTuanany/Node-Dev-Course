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
    //console.log( "If you get message your input object was duplicated");
    if(duplicatesNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
    console.log(' You Getting all notes from getAll() function');
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];

    console.log(' You calling a getNote() function to fetch the notes', title);
}

var getRemove = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    // this return statement is evaluating,
    // cause notes and filteredNotes came with a new values
    // and we wanna print out the message in 'remove' command in app.js.
    // if not equal is return to a new filteredNotes
    // if is equal is return a notes.length
    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    console.log(" ");
    console.log(' --  is: ');
    console.log();
    console.log(` Title: ${note.title}`);
    console.log(` body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    getRemove,
    logNote
};

/**
quick challenge: make function call 'add'
this 'add' function is gonna set at exports object
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
// console.log('addNote ');
return "you just call a function";
};
**/

/**
// in ES5
var addNote = function() {

    return;
};

module.exports = {
    addNote : addNote;
};
**/
