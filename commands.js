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
    },

    cat: function(arr){
        this.fs.readFile(arr[0],function(err,data){
            process.stdout.write(data);
        });   
    },
    head: function(arr){
        this.fs.readFile(arr[0], 'utf8', function(err,data){
            process.stdout.write(data.split('\n').slice(0,5).join('\n'));
        });
    },
    tail: function(arr){
        this.fs.readFile(arr[0], 'utf8', function(err,data){
            process.stdout.write(data.split('\n').slice(-5).join('\n'));
        });
    },
    sort: function(arr){
        this.fs.readFile(arr[0], 'utf8', function(err,data){
            process.stdout.write(data.split('\n').sort().join('\n'));
        });
    },
    wc: function(arr){
        this.fs.readFile(arr[0], 'utf8', function(err,data){
            process.stdout.write('Line Count: ' + data.split('\n').length);
            process.stdout.write(' Word Count: ' + data.split(/\s\s*/g).length);
            process.stdout.write(' Character Count: ' + data.length);
        });
    },
    uniq: function(arr){
        this.fs.readFile(arr[0], 'utf8', function(err,data){
            let output = '';
            const split = data.split('\n');
            for(var idx=0; idx<split.length-1; idx++){
                if(split[idx] !== split[idx+1]){
                    output += split[idx] + '\n';
                }
            }
            process.stdout.write(output);
        })
    }
}