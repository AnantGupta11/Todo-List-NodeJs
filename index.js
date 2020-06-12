const http= require('http');
//port no where the server running
const port =8000;

//fs module is a node js module which helps in reading and writing files
const fs =require('fs');

//this function handle the server req and respose
function requestHandler(req, res){
    console.log(req.url);
    //writeHead is use to tell the server which type of data send
    res.writeHead(200,{'content-type': 'text/html'});
    fs.readFile('./index.html', function(err,data){
        if(err){
            console.log('Error in load file',err);
            return res.end('<h1>Error</h1>');
        }
        return res.end(data);

    })
    //return res.end('<h1>Hello</h1>');
}

//method in http for creating server
const server = http.createServer(requestHandler);

//for running the server server should listen the port

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on port:",port);
});