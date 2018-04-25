const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOptions =  {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions =  {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all note')
.command('read','Read a note', {
    title: titleOptions
})
.command('remove', 'Remove a note', {
    title: titleOptions
})
.help()
.argv;

var command = argv._[0];
console.log(' Your Command: ', command);
console.log(' Your processes is: ',process.argv);
console.log(' Your Yargs is: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(" You write the new object in notes");
        notes.logNote(note);
    } else {
        console.log(" You write an exist objects in node");
    };
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(` listing all list ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log(" You fetch the note and read it");
        notes.logNote(note);
    } else {
        console.log(" Your note was not exist");
    }
    console.log(' fetch or read from note called done');
} else if (command === 'remove') {
    var noteRemoved = notes.getRemove(argv.title);
    var message = noteRemoved ? " The note you try to remove was removed" : " The note you are looking not found"
    console.log(message);
    console.log(' Hey you just remove a note with NodeJS command');
} else {
    console.log(' Your command not in my list command that i made');
}


/*
// pattern to recall function
var res = notes.addNote();
console.log(res);
*/

/**
var resultFromAddFunction = notes.add(5, 6);
console.log(' result is ', resultFromAddFunction);
console.log(' Result is ', notes.add(6, 6));
**/


/**
var user = os.userInfo();
//console.log(user);

// original line on node v-6
// since I using node v-8 NodeJS need upgrade the bug
// fs.appendFile('selamatMalam.txt' hello, world!);


// option for node v-8
fs.appendFile('SelamatMalam.txt' , ` Hello ${user.username} there you are, You are ${notes.age} Years olds`, (err) => {
    if (err) {
        console.log('You missing some thing to write to file');
    }
});

**/

/**
fs.appendFile('selamatMalam.txt',`hello! `$(user.),(err) => {
    if (err) {
        console.log();
    }
});
**/
