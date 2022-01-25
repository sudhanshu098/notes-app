const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  return "Your notes ...";
};
const addNote = function (title, body) {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });

  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added sucessfully!!"));
  } else {
    console.log(chalk.bgRed("Note title exists!!"));
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("../plyground/notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("../plyground/notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};
const removeNotes = (title) => {
  const notes = loadNotes();
  notes.filter((note) => {
    if (note.title == title) {
      notes.pop(note);
      console.log(chalk.bgGreen.inverse("Note Removed!!"));
      return;
    } else {
      console.log(chalk.bgRed("No note found!!"));
      return;
    }
  });
  saveNotes(notes);
};
const readContent = (title) => {
  const notes = loadNotes();
  const readNote = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(node.title));
    console.log(note.body);
  } else {
    console.log(chalk.bgRed("Note not found!!"));
  }
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  loadNotes: loadNotes,
  readContent: readContent,
};
