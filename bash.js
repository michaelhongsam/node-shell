//console.log(process);
//console.log(Object.keys(process));
//console.log(process.argv);

const commands = require('./commands.js');


process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    var split = data.toString().trim().split(' '); // remove the newline
    var cmd = split[0];
    var argument = split.slice(1);
    
    commands[cmd](argument);
  
    process.stdout.write('\nYou typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  
  });