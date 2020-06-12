const http= require('http');
//port no where the server running
const port =800;

//this function handle the server req and respose
function requestHandler(req, res){
    console.log(req.url);
    return res.end('<h1>Hello</h1>');
}

//method in http for creating server
const server = http.createServer(requestHandler);

//for running the server server should listen the port

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on port: 80")
});