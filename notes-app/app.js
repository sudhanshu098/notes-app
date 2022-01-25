const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");
const { string } = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: string,
    },
  },
  handler: (args) => {
    notes.removeNotes(args.title);
  },
});
yargs.command({
  command: "list",
  describe: "list of notes",
  handler: () => {
    const loadNotes = notes.loadNotes();
    loadNotes.map((note) => {
      console.log(note.title);
    });
  },
});
yargs.command({
  command: "read",
  describe: "read a notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: string,
    },
  },
  handler: (args) => {
    notes.readContent(args.title);
  },
});
yargs.parse();
