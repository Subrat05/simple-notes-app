const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    debugger
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added !'));
    } else {
        console.log(chalk.red.inverse('Title is Exist, Please try with different Title'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);

    } catch(e) {
        return [];
    }
}

const listNotes = () => {
    const notes= loadNotes();
    notes.forEach((note) => console.log(chalk.magenta('Title is:' + note.title + " and body is: " + note.body)));
}

const readNote = (title) => {
    const notes = loadNotes();
    const matchedNote = notes.find((note) => note.title === title);
    if(matchedNote) {
        console.log(chalk.green('Title is ' + matchedNote.title));
        console.log(chalk.green('Body is: '+ matchedNote.body));
    } else { 
        console.log(chalk.red.inverse('Note not found !'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Title removed'));
        saveNotes(notesToKeep);
        } else {
        console.log(chalk.red.inverse('Title is not present'));
    }
}
module.exports = {
    addNotes: addNotes,
    loadNotes: loadNotes,
    listNotes: listNotes,
    readNote: readNote,
    removeNote: removeNote
}