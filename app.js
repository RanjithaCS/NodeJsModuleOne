const fs = require("fs");
fs.writeFileSync('./test.txt',"random text, random number");
fs.readFile('employees.txt', function(err, data){
    if(err)
    console.log(err.toString());
    else
    console.log(data.toString());
});

const util = require('util');
var str = "Today's date is : %d";
var msg= util.format(str,14);
console.log(msg);
