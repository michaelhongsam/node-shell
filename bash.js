//console.log(process);
//console.log(Object.keys(process));
//console.log(process.argv);
process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline

    if(cmd === 'pwd'){
        var output = process.argv[1];
        process.stdout.write(output);
    }
    if(cmd === 'date'){
        var today = new Date();
        process.stdout.write(today.toDateString() + ' ' + today.toTimeString());
    }

  
    process.stdout.write('\nYou typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  
  });