var http = require('http');

var srv = http.createServer(function(request, response) {
          response.end("Working as expected !!!!")
            });
srv.listen(3000, function(){
    console.log('listening to port : 3000');
});