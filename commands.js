module.exports = {
    pwd: function(){
        var output = process.argv[1];
        process.stdout.write(output);
    },
    date: function(){
        var today = new Date();
        process.stdout.write(today.toDateString() + ' ' + today.toTimeString());
    },
    ls: function(){
        const fs = require('fs');

        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            //process.stdout.write("Hello prompt > ");
          });
    },
    echo: function(arr){
        process.stdout.write(arr.join(' '));
    }
}