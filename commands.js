module.exports = {

    fs: require('fs'),

    pwd: function(){
        var output = process.argv[1];
        process.stdout.write(output);
    },
    date: function(){
        var today = new Date();
        process.stdout.write(today.toDateString() + ' ' + today.toTimeString());
    },
    ls: function(){
        //const fs = require('fs');

        this.fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            //process.stdout.write("Hello prompt > ");
          });
    },
    echo: function(arr){
        process.stdout.write(arr.join(' '));
    },

    cat: function(arr){
        this.fs.readFile(arr[0],function(err,data){
            process.stdout.write(data);
        });   
    },
    head: function(arr){
        this.fs.readFile(arr[0],function(err,data){
            submit = '';
            for(var keys in data){
                console.log(data[keys]);
            }
        });   
    },
}