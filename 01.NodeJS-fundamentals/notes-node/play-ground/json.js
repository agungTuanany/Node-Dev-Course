// var obj = {
//     name: 'agung'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

/**
JSON.stringify() it takes the object ('obj')
and return 'obj' variable with the JSON.stringify version

that means is the result is store in stringObject that actually a string and no longer an object.
**/

// var personString = '{"name": "agung", "last-name": "Tuanany", "age": 25}';
//
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

/**
JSON.parse() is the opposite JSON.stringify()
it take your personString from a string back into original form that is an object.
**/

const fs = require('fs');

var originalNote = {
    title: "The title originalNote",
    body: "The body originalNote"
}

//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
console.log(note.body);
console.log(note.footer);
