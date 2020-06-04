const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes_util = require('./notes.util');
// Validator Example
// console.log(validator.isEmail('subrat.behera@node.com'));
// console.log(validator.isURL('https://wwww.nothing.com'));

// Chalk Example
// console.log(chalk.green.bgYellow('SUBRAT') + chalk.magenta.bgWhiteBright(' KUMAR') + chalk.redBright.bgBlueBright(' BEHERA'));
// console.log(chalk.redBright.bold.underline('THIS IS SUBRAT, NODE JS IS AWESOME'))
// console.log(chalk.blue.bgWhite('THIS IS POSSIBLE BECAUSE OF CHALK LIBRABERIES'));
// console.log(chalk.bgKeyword('red')('Some orange text'));

/*Installed nodemon global server which auto detects changes upon save the file for better development
 npm i nodemon -g
*/
//console.log(process.argv);
//console.log(yargs.argv);

//Yargs example 1 (simple)

// if(parseInt(yargs.argv.age) >= 18) {
//     console.log(chalk.green('Adult'));
// } else {
//     console.log(chalk.red('Child'));
// }

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Node title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string'
        },

    },
    handler:(argv) => notes_util.addNotes(argv.title, argv.body) 
})

yargs.command({
    command: 'remove',
    describe: 'will remove smth',
    builder: {
        title: {
            describe: 'remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes_util.removeNote(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'will list all notes',
    handler: () => notes_util.listNotes() 
})

yargs.command({
    command: 'read',
    describe: 'will read the note',
    builder: {
        title: {
            describe: 'read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes_util.readNote(argv.title)
})
yargs.parse();

//console.log(yargs.argv);