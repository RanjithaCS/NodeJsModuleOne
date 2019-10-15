var http = require('http');
var chalk =  require('chalk');
var srv = http.createServer(function(request, response) {
          response.end("Working as expected !!!!")
            });
srv.listen(3000, function(){
    console.log(chalk.green('listening to port : 3000'));
});